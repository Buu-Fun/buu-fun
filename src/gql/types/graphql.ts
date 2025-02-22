/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
};

export type Account = {
  __typename?: "Account";
  address: Scalars["String"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  solanaPubKey?: Maybe<Scalars["String"]["output"]>;
  telegramAvatar?: Maybe<Scalars["String"]["output"]>;
  telegramId?: Maybe<Scalars["Float"]["output"]>;
  telegramName?: Maybe<Scalars["String"]["output"]>;
  telegramUsername?: Maybe<Scalars["String"]["output"]>;
  twitterAvatar?: Maybe<Scalars["String"]["output"]>;
  twitterEmail?: Maybe<Scalars["String"]["output"]>;
  twitterId?: Maybe<Scalars["String"]["output"]>;
  twitterName?: Maybe<Scalars["String"]["output"]>;
  twitterUsername?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type AccountResult = Account | Error;

export type Error = {
  __typename?: "Error";
  code: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

export type GenRequest = {
  __typename?: "GenRequest";
  _id: Scalars["String"]["output"];
  images?: Maybe<Array<GenRequestFile>>;
  metadata: Scalars["JSON"]["output"];
  model_mesh?: Maybe<GenRequestFile>;
  status: GenRequestStatusEnum;
  timings?: Maybe<Timings>;
  type: Scalars["String"]["output"];
};

export type GenRequestFile = {
  __typename?: "GenRequestFile";
  content_type: Scalars["String"]["output"];
  file_name?: Maybe<Scalars["String"]["output"]>;
  file_size?: Maybe<Scalars["Float"]["output"]>;
  url: Scalars["String"]["output"];
};

/** The status of a request */
export enum GenRequestStatusEnum {
  Error = "Error",
  InProgress = "InProgress",
  Success = "Success",
}

export type HandledError = {
  __typename?: "HandledError";
  code: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

export type LoginAuth = {
  __typename?: "LoginAuth";
  token: Scalars["String"]["output"];
  tokenExpiry: Scalars["DateTimeISO"]["output"];
};

export type LoginAuthResult = Error | LoginAuth;

export type LoginChallenge = {
  __typename?: "LoginChallenge";
  input: SolanaSignIn;
};

export type LoginChallengeResult = Error | LoginChallenge;

export type LoginRefreshInput = {
  account: Scalars["String"]["input"];
};

export type Metadata = {
  __typename?: "Metadata";
  limit: Scalars["Int"]["output"];
  numElements: Scalars["Int"]["output"];
  offset: Scalars["Int"]["output"];
  orderBy: Scalars["String"]["output"];
  orderDirection: OrderDirection;
  page: Scalars["Int"]["output"];
  pages: Scalars["Int"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  disconnectTelegram: AccountResult;
  disconnectTwitter: AccountResult;
  generateImage: SubthreadResult;
  generateModel: SubthreadResult;
  generateSubthread: SubthreadResult;
  loginAuth: LoginAuthResult;
  loginChallenge: LoginChallengeResult;
  loginRefresh: LoginAuthResult;
};

export type MutationGenerateImageArgs = {
  subthreadId: Scalars["String"]["input"];
};

export type MutationGenerateModelArgs = {
  imageRequestId: Scalars["String"]["input"];
  subthreadId: Scalars["String"]["input"];
};

export type MutationGenerateSubthreadArgs = {
  prompt: Scalars["String"]["input"];
  style?: InputMaybe<SubthreadStyle>;
  threadId?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationLoginAuthArgs = {
  input: SolanaSignInInput;
  output: SolanaSignInOutput;
};

export type MutationLoginChallengeArgs = {
  account: Scalars["String"]["input"];
};

export type MutationLoginRefreshArgs = {
  input: LoginRefreshInput;
};

/** Order direction */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type Pagination = {
  limit?: InputMaybe<Scalars["Float"]["input"]>;
  offset?: InputMaybe<Scalars["Float"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  orderDirection?: InputMaybe<OrderDirection>;
};

export type Query = {
  __typename?: "Query";
  getSubthread: SubthreadResult;
  getSubthreads: SubthreadPageResult;
  getThreads: ThreadPageResult;
  me: AccountResult;
};

export type QueryGetSubthreadArgs = {
  subthreadId: Scalars["String"]["input"];
};

export type QueryGetSubthreadsArgs = {
  filters?: InputMaybe<SubthreadFilter>;
  pagination?: InputMaybe<Pagination>;
};

export type QueryGetThreadsArgs = {
  filters?: InputMaybe<ThreadFilter>;
  pagination?: InputMaybe<Pagination>;
};

export type SolanaSignIn = {
  __typename?: "SolanaSignIn";
  address: Scalars["String"]["output"];
  nonce: Scalars["String"]["output"];
};

export type SolanaSignInInput = {
  address: Scalars["String"]["input"];
  nonce: Scalars["String"]["input"];
};

export type SolanaSignInOutput = {
  account: WalletAccount;
  signature: Scalars["String"]["input"];
  signatureType: Scalars["String"]["input"];
  signedMessage: Scalars["String"]["input"];
};

export type Subthread = {
  __typename?: "Subthread";
  _id: Scalars["String"]["output"];
  address: Scalars["String"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  imageRequests?: Maybe<Array<GenRequest>>;
  modelRequests?: Maybe<Array<GenRequest>>;
  prompt: Scalars["String"]["output"];
  style: SubthreadStyle;
  threadId: Scalars["String"]["output"];
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type SubthreadFilter = {
  _id_eq?: InputMaybe<Scalars["String"]["input"]>;
  _id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _id_ne?: InputMaybe<Scalars["String"]["input"]>;
  _id_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  address_eq?: InputMaybe<Scalars["String"]["input"]>;
  address_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  address_ne?: InputMaybe<Scalars["String"]["input"]>;
  address_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  createdAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  threadId_eq?: InputMaybe<Scalars["String"]["input"]>;
  threadId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  threadId_ne?: InputMaybe<Scalars["String"]["input"]>;
  threadId_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  updatedAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
};

export type SubthreadPageResult = HandledError | SubthreadsPage;

export type SubthreadResult = HandledError | Subthread;

/** The style of the subthread */
export enum SubthreadStyle {
  Clay = "Clay",
  Cute = "Cute",
  Environment = "Environment",
  Fantasy = "Fantasy",
  Isometric = "Isometric",
  LowPoly = "LowPoly",
  Metallic = "Metallic",
  Realistic = "Realistic",
  SciFi = "SciFi",
  Stylized = "Stylized",
  Toon = "Toon",
  Voxel = "Voxel",
  Weapons = "Weapons",
  Wireframe = "Wireframe",
}

export type SubthreadsPage = {
  __typename?: "SubthreadsPage";
  items: Array<Subthread>;
  metadata: Metadata;
};

export type Thread = {
  __typename?: "Thread";
  _id: Scalars["String"]["output"];
  address: Scalars["String"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type ThreadFilter = {
  _id_eq?: InputMaybe<Scalars["String"]["input"]>;
  _id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _id_ne?: InputMaybe<Scalars["String"]["input"]>;
  _id_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  address_eq?: InputMaybe<Scalars["String"]["input"]>;
  address_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  address_ne?: InputMaybe<Scalars["String"]["input"]>;
  address_nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  createdAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  createdAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_eq?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  updatedAt_ne?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
};

export type ThreadPageResult = HandledError | ThreadsPage;

export type ThreadsPage = {
  __typename?: "ThreadsPage";
  items: Array<Thread>;
  metadata: Metadata;
};

export type Timings = {
  __typename?: "Timings";
  inference: Scalars["Float"]["output"];
};

export type WalletAccount = {
  address: Scalars["String"]["input"];
  chains: Array<Scalars["String"]["input"]>;
  features: Array<Scalars["String"]["input"]>;
  icon?: InputMaybe<Scalars["String"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  publicKey: Scalars["String"]["input"];
};

export type LoginChallengeMutationVariables = Exact<{
  account: Scalars["String"]["input"];
}>;

export type LoginChallengeMutation = {
  __typename?: "Mutation";
  loginChallenge:
    | { __typename?: "Error"; code: string; message: string }
    | {
        __typename?: "LoginChallenge";
        input: { __typename?: "SolanaSignIn"; address: string; nonce: string };
      };
};

export type LoginAuthMutationVariables = Exact<{
  output: SolanaSignInOutput;
  input: SolanaSignInInput;
}>;

export type LoginAuthMutation = {
  __typename?: "Mutation";
  loginAuth:
    | { __typename?: "Error"; code: string; message: string }
    | { __typename?: "LoginAuth"; token: string; tokenExpiry: any };
};

export type LoginRefreshMutationVariables = Exact<{
  input: LoginRefreshInput;
}>;

export type LoginRefreshMutation = {
  __typename?: "Mutation";
  loginRefresh:
    | { __typename?: "Error"; code: string; message: string }
    | { __typename?: "LoginAuth"; token: string; tokenExpiry: any };
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me:
    | {
        __typename?: "Account";
        address: string;
        twitterId?: string | null;
        twitterName?: string | null;
        twitterUsername?: string | null;
        twitterAvatar?: string | null;
        telegramId?: number | null;
        telegramName?: string | null;
        telegramUsername?: string | null;
        telegramAvatar?: string | null;
        solanaPubKey?: string | null;
        createdAt: any;
        updatedAt: any;
      }
    | { __typename?: "Error"; code: string; message: string };
};

export type DisconnectTwitterMutationVariables = Exact<{
  [key: string]: never;
}>;

export type DisconnectTwitterMutation = {
  __typename?: "Mutation";
  disconnectTwitter:
    | {
        __typename?: "Account";
        address: string;
        twitterId?: string | null;
        twitterName?: string | null;
        twitterUsername?: string | null;
        twitterAvatar?: string | null;
        telegramId?: number | null;
        telegramName?: string | null;
        telegramUsername?: string | null;
        telegramAvatar?: string | null;
        solanaPubKey?: string | null;
        createdAt: any;
        updatedAt: any;
      }
    | { __typename?: "Error"; code: string; message: string };
};

export type DisconnectTelegramMutationVariables = Exact<{
  [key: string]: never;
}>;

export type DisconnectTelegramMutation = {
  __typename?: "Mutation";
  disconnectTelegram:
    | {
        __typename?: "Account";
        address: string;
        twitterId?: string | null;
        twitterName?: string | null;
        twitterUsername?: string | null;
        twitterAvatar?: string | null;
        telegramId?: number | null;
        telegramName?: string | null;
        telegramUsername?: string | null;
        telegramAvatar?: string | null;
        solanaPubKey?: string | null;
        createdAt: any;
        updatedAt: any;
      }
    | { __typename?: "Error"; code: string; message: string };
};

export type GenerateSubthreadMutationVariables = Exact<{
  prompt: Scalars["String"]["input"];
  style?: InputMaybe<SubthreadStyle>;
  threadId?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GenerateSubthreadMutation = {
  __typename?: "Mutation";
  generateSubthread:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "Subthread";
        _id: string;
        address: string;
        createdAt: any;
        updatedAt: any;
        threadId: string;
        prompt: string;
        style: SubthreadStyle;
        imageRequests?: Array<{
          __typename?: "GenRequest";
          _id: string;
          status: GenRequestStatusEnum;
          metadata: any;
          type: string;
          images?: Array<{
            __typename?: "GenRequestFile";
            content_type: string;
            file_name?: string | null;
            file_size?: number | null;
            url: string;
          }> | null;
          model_mesh?: {
            __typename?: "GenRequestFile";
            content_type: string;
            file_name?: string | null;
            file_size?: number | null;
            url: string;
          } | null;
          timings?: { __typename?: "Timings"; inference: number } | null;
        }> | null;
        modelRequests?: Array<{
          __typename?: "GenRequest";
          _id: string;
          status: GenRequestStatusEnum;
          metadata: any;
          type: string;
          images?: Array<{
            __typename?: "GenRequestFile";
            content_type: string;
            file_name?: string | null;
            file_size?: number | null;
            url: string;
          }> | null;
          model_mesh?: {
            __typename?: "GenRequestFile";
            content_type: string;
            file_name?: string | null;
            file_size?: number | null;
            url: string;
          } | null;
          timings?: { __typename?: "Timings"; inference: number } | null;
        }> | null;
      };
};

export type GenerateImageMutationVariables = Exact<{
  subthreadId: Scalars["String"]["input"];
}>;

export type GenerateImageMutation = {
  __typename?: "Mutation";
  generateImage:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "Subthread";
        _id: string;
        address: string;
        createdAt: any;
        updatedAt: any;
        threadId: string;
        prompt: string;
        style: SubthreadStyle;
        imageRequests?: Array<{
          __typename?: "GenRequest";
          _id: string;
          status: GenRequestStatusEnum;
          metadata: any;
          type: string;
          images?: Array<{
            __typename?: "GenRequestFile";
            content_type: string;
            file_name?: string | null;
            file_size?: number | null;
            url: string;
          }> | null;
          model_mesh?: {
            __typename?: "GenRequestFile";
            content_type: string;
            file_name?: string | null;
            file_size?: number | null;
            url: string;
          } | null;
          timings?: { __typename?: "Timings"; inference: number } | null;
        }> | null;
        modelRequests?: Array<{
          __typename?: "GenRequest";
          _id: string;
          status: GenRequestStatusEnum;
          metadata: any;
          type: string;
          images?: Array<{
            __typename?: "GenRequestFile";
            content_type: string;
            file_name?: string | null;
            file_size?: number | null;
            url: string;
          }> | null;
          model_mesh?: {
            __typename?: "GenRequestFile";
            content_type: string;
            file_name?: string | null;
            file_size?: number | null;
            url: string;
          } | null;
          timings?: { __typename?: "Timings"; inference: number } | null;
        }> | null;
      };
};

export type GenerateModelMutationVariables = Exact<{
  imageRequestId: Scalars["String"]["input"];
  subthreadId: Scalars["String"]["input"];
}>;

export type GenerateModelMutation = {
  __typename?: "Mutation";
  generateModel:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "Subthread";
        _id: string;
        address: string;
        createdAt: any;
        updatedAt: any;
        threadId: string;
        prompt: string;
        style: SubthreadStyle;
        imageRequests?: Array<{
          __typename?: "GenRequest";
          _id: string;
          status: GenRequestStatusEnum;
          metadata: any;
          type: string;
          images?: Array<{
            __typename?: "GenRequestFile";
            content_type: string;
            file_name?: string | null;
            file_size?: number | null;
            url: string;
          }> | null;
          model_mesh?: {
            __typename?: "GenRequestFile";
            content_type: string;
            file_name?: string | null;
            file_size?: number | null;
            url: string;
          } | null;
          timings?: { __typename?: "Timings"; inference: number } | null;
        }> | null;
        modelRequests?: Array<{
          __typename?: "GenRequest";
          _id: string;
          status: GenRequestStatusEnum;
          metadata: any;
          type: string;
          images?: Array<{
            __typename?: "GenRequestFile";
            content_type: string;
            file_name?: string | null;
            file_size?: number | null;
            url: string;
          }> | null;
          model_mesh?: {
            __typename?: "GenRequestFile";
            content_type: string;
            file_name?: string | null;
            file_size?: number | null;
            url: string;
          } | null;
          timings?: { __typename?: "Timings"; inference: number } | null;
        }> | null;
      };
};

export type GetThreadsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
  filters?: InputMaybe<ThreadFilter>;
}>;

export type GetThreadsQuery = {
  __typename?: "Query";
  getThreads:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "ThreadsPage";
        items: Array<{
          __typename?: "Thread";
          _id: string;
          createdAt: any;
          updatedAt: any;
          address: string;
        }>;
        metadata: {
          __typename?: "Metadata";
          limit: number;
          offset: number;
          orderBy: string;
          orderDirection: OrderDirection;
          numElements: number;
          page: number;
          pages: number;
        };
      };
};

export type GetSubthreadsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
  filters?: InputMaybe<SubthreadFilter>;
}>;

export type GetSubthreadsQuery = {
  __typename?: "Query";
  getSubthreads:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "SubthreadsPage";
        items: Array<{
          __typename?: "Subthread";
          _id: string;
          address: string;
          createdAt: any;
          updatedAt: any;
          threadId: string;
          prompt: string;
          style: SubthreadStyle;
          imageRequests?: Array<{
            __typename?: "GenRequest";
            _id: string;
            status: GenRequestStatusEnum;
            metadata: any;
            type: string;
            images?: Array<{
              __typename?: "GenRequestFile";
              content_type: string;
              file_name?: string | null;
              file_size?: number | null;
              url: string;
            }> | null;
            model_mesh?: {
              __typename?: "GenRequestFile";
              content_type: string;
              file_name?: string | null;
              file_size?: number | null;
              url: string;
            } | null;
            timings?: { __typename?: "Timings"; inference: number } | null;
          }> | null;
          modelRequests?: Array<{
            __typename?: "GenRequest";
            _id: string;
            status: GenRequestStatusEnum;
            metadata: any;
            type: string;
            images?: Array<{
              __typename?: "GenRequestFile";
              content_type: string;
              file_name?: string | null;
              file_size?: number | null;
              url: string;
            }> | null;
            model_mesh?: {
              __typename?: "GenRequestFile";
              content_type: string;
              file_name?: string | null;
              file_size?: number | null;
              url: string;
            } | null;
            timings?: { __typename?: "Timings"; inference: number } | null;
          }> | null;
        }>;
        metadata: {
          __typename?: "Metadata";
          limit: number;
          offset: number;
          orderBy: string;
          orderDirection: OrderDirection;
          numElements: number;
          page: number;
          pages: number;
        };
      };
};

export type GetSubthreadQueryVariables = Exact<{
  subthreadId: Scalars["String"]["input"];
}>;

export type GetSubthreadQuery = {
  __typename?: "Query";
  getSubthread:
    | { __typename?: "HandledError"; code: string; message: string }
    | {
        __typename?: "Subthread";
        _id: string;
        address: string;
        createdAt: any;
        updatedAt: any;
        threadId: string;
        prompt: string;
        style: SubthreadStyle;
        imageRequests?: Array<{
          __typename?: "GenRequest";
          _id: string;
          status: GenRequestStatusEnum;
          metadata: any;
          type: string;
          images?: Array<{
            __typename?: "GenRequestFile";
            content_type: string;
            file_name?: string | null;
            file_size?: number | null;
            url: string;
          }> | null;
          model_mesh?: {
            __typename?: "GenRequestFile";
            content_type: string;
            file_name?: string | null;
            file_size?: number | null;
            url: string;
          } | null;
          timings?: { __typename?: "Timings"; inference: number } | null;
        }> | null;
        modelRequests?: Array<{
          __typename?: "GenRequest";
          _id: string;
          status: GenRequestStatusEnum;
          metadata: any;
          type: string;
          images?: Array<{
            __typename?: "GenRequestFile";
            content_type: string;
            file_name?: string | null;
            file_size?: number | null;
            url: string;
          }> | null;
          model_mesh?: {
            __typename?: "GenRequestFile";
            content_type: string;
            file_name?: string | null;
            file_size?: number | null;
            url: string;
          } | null;
          timings?: { __typename?: "Timings"; inference: number } | null;
        }> | null;
      };
};

export const LoginChallengeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "LoginChallenge" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "account" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "loginChallenge" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "account" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "account" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "LoginChallenge" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "input" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nonce" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Error" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LoginChallengeMutation,
  LoginChallengeMutationVariables
>;
export const LoginAuthDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "LoginAuth" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "output" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SolanaSignInOutput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SolanaSignInInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "loginAuth" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "output" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "output" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "LoginAuth" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "token" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenExpiry" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Error" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginAuthMutation, LoginAuthMutationVariables>;
export const LoginRefreshDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "LoginRefresh" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "LoginRefreshInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "loginRefresh" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "LoginAuth" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "token" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenExpiry" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Error" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LoginRefreshMutation,
  LoginRefreshMutationVariables
>;
export const MeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Me" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Account" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterUsername" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterAvatar" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramUsername" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramAvatar" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "solanaPubKey" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Error" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const DisconnectTwitterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DisconnectTwitter" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "disconnectTwitter" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Account" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterUsername" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterAvatar" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramUsername" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramAvatar" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "solanaPubKey" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Error" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DisconnectTwitterMutation,
  DisconnectTwitterMutationVariables
>;
export const DisconnectTelegramDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DisconnectTelegram" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "disconnectTelegram" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Account" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterUsername" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "twitterAvatar" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramName" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramUsername" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "telegramAvatar" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "solanaPubKey" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Error" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DisconnectTelegramMutation,
  DisconnectTelegramMutationVariables
>;
export const GenerateSubthreadDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "GenerateSubthread" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "prompt" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "style" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "SubthreadStyle" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "threadId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "generateSubthread" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "prompt" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "prompt" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "style" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "style" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "threadId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "threadId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Subthread" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "threadId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "prompt" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "style" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "imageRequests" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "metadata" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "type" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "images" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "content_type",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "model_mesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "content_type",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "timings" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "inference" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "modelRequests" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "metadata" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "type" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "images" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "content_type",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "model_mesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "content_type",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "timings" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "inference" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GenerateSubthreadMutation,
  GenerateSubthreadMutationVariables
>;
export const GenerateImageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "GenerateImage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "subthreadId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "generateImage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "subthreadId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "subthreadId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Subthread" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "threadId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "prompt" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "style" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "imageRequests" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "metadata" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "type" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "images" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "content_type",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "model_mesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "content_type",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "timings" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "inference" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "modelRequests" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "metadata" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "type" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "images" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "content_type",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "model_mesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "content_type",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "timings" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "inference" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GenerateImageMutation,
  GenerateImageMutationVariables
>;
export const GenerateModelDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "GenerateModel" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "imageRequestId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "subthreadId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "generateModel" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "imageRequestId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "imageRequestId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "subthreadId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "subthreadId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Subthread" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "threadId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "prompt" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "style" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "imageRequests" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "metadata" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "type" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "images" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "content_type",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "model_mesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "content_type",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "timings" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "inference" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "modelRequests" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "metadata" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "type" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "images" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "content_type",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "model_mesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "content_type",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "timings" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "inference" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GenerateModelMutation,
  GenerateModelMutationVariables
>;
export const GetThreadsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetThreads" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Pagination" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ThreadFilter" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getThreads" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pagination" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filters" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "ThreadsPage" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "items" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "metadata" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "limit" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "offset" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orderBy" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orderDirection" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "numElements" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "page" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pages" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetThreadsQuery, GetThreadsQueryVariables>;
export const GetSubthreadsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetSubthreads" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "pagination" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Pagination" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filters" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "SubthreadFilter" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getSubthreads" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pagination" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "pagination" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filters" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filters" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "SubthreadsPage" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "items" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "threadId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "prompt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "style" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "imageRequests" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "metadata" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "images" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "content_type",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "file_name",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "file_size",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "model_mesh" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "content_type",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "file_name",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "file_size",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "timings" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "inference",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "modelRequests" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "metadata" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "images" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "content_type",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "file_name",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "file_size",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "model_mesh" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "content_type",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "file_name",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "file_size",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "url" },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "timings" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "inference",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "metadata" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "limit" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "offset" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orderBy" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orderDirection" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "numElements" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "page" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "pages" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSubthreadsQuery, GetSubthreadsQueryVariables>;
export const GetSubthreadDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetSubthread" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "subthreadId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getSubthread" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "subthreadId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "subthreadId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Subthread" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "threadId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "prompt" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "style" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "imageRequests" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "metadata" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "type" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "images" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "content_type",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "model_mesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "content_type",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "timings" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "inference" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "modelRequests" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "metadata" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "type" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "images" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "content_type",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "model_mesh" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "content_type",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "file_size" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "timings" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "inference" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "HandledError" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "code" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "message" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSubthreadQuery, GetSubthreadQueryVariables>;
