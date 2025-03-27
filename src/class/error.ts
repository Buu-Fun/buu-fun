// Define your application error codes
export type APP_ERROR_CODES =
  | "CREDIT_NOT_FOUND"
  | "UNAUTHORIZED"
  | "LOW_CREDIT"
  | "INVALID_DATA"
  | "INTERNAL_SERVER_ERROR"
  | "UNKNOWN_ERROR"
  | "FAILED_TO_CREATE_SHAREABLE_BOARD";

// Custom error class that mimics TRPC error structure
export class TypedAppError extends Error {
  code: APP_ERROR_CODES;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;

  constructor(
    message: string,
    code: APP_ERROR_CODES = "UNKNOWN_ERROR",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any,
  ) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.data = data;

    // Maintains proper stack trace in V8 engines
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  // Static methods for creating errors
  static throw(
    message: string,
    code: APP_ERROR_CODES = "UNKNOWN_ERROR",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any,
  ): never {
    throw new TypedAppError(message, code, data);
  }

  static throwUnknown(): never {
    throw new TypedAppError("Something went wrong", "UNKNOWN_ERROR");
  }

  // Helper to map external/GraphQL error codes to our internal ones
  static mapErrorCode(code: string): APP_ERROR_CODES {
    const codeMap: Record<string, APP_ERROR_CODES> = {
      CREDIT_NOT_FOUND: "CREDIT_NOT_FOUND",
      UNAUTHORIZED: "UNAUTHORIZED",
      LOW_CREDIT: "LOW_CREDIT",
      INVALID_DATA: "INVALID_DATA",
      INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
      // Add any other mappings here
    };

    return codeMap[code] || "UNKNOWN_ERROR";
  }

  // Helper for creating errors from external sources
  static fromExternalError(
    message: string,
    codeOrError?: string | Error | unknown,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any,
  ): TypedAppError {
    // If codeOrError is a string, try to map it to a valid code
    if (typeof codeOrError === "string") {
      return new TypedAppError(message, this.mapErrorCode(codeOrError), data);
    }

    // If codeOrError is an Error or other object
    if (codeOrError && typeof codeOrError === "object") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const errorObj = codeOrError as any;
      const extractedCode = errorObj?.code || "";
      const extractedData = errorObj?.details || errorObj?.data || data;

      return new TypedAppError(
        message || errorObj?.message || "Something went wrong",
        this.mapErrorCode(extractedCode),
        extractedData,
      );
    }

    return new TypedAppError(message, "UNKNOWN_ERROR", data);
  }
}
