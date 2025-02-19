export class DataMuseError extends Error {
    constructor(
      message: string,
      public status?: number
    ) {
      super(message);
      this.name = "DataMuseError";
    }
  }