/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  address: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  telegramAvatar?: Maybe<Scalars['String']['output']>;
  telegramId?: Maybe<Scalars['Float']['output']>;
  telegramName?: Maybe<Scalars['String']['output']>;
  telegramUsername?: Maybe<Scalars['String']['output']>;
  twitterAvatar?: Maybe<Scalars['String']['output']>;
  twitterEmail?: Maybe<Scalars['String']['output']>;
  twitterId?: Maybe<Scalars['String']['output']>;
  twitterName?: Maybe<Scalars['String']['output']>;
  twitterUsername?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type AccountResult = Account | HandledError;

export type Credit = {
  __typename?: 'Credit';
  _id: Scalars['String']['output'];
  available: Scalars['Float']['output'];
  confirmed: Scalars['Float']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  pending: Scalars['Float']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type CreditResult = Credit | HandledError;

export type GenRequest = {
  __typename?: 'GenRequest';
  _id: Scalars['String']['output'];
  address: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  credits: Scalars['Float']['output'];
  images?: Maybe<Array<Media>>;
  metadata: Scalars['JSON']['output'];
  model_mesh?: Maybe<Media>;
  status: GenRequestStatusEnum;
  subthreadId: Scalars['String']['output'];
  timings?: Maybe<Timings>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type GenRequestResult = GenRequest | HandledError;

/** The status of a request */
export enum GenRequestStatusEnum {
  Error = 'Error',
  InProgress = 'InProgress',
  Success = 'Success'
}

export type GenRequestsPage = {
  __typename?: 'GenRequestsPage';
  items: Array<GenRequest>;
  metadata: Metadata;
};

export type GenRequestsPageResult = GenRequestsPage | HandledError;

export type GeneratePresignedPostResult = HandledError | PresignedPost;

export type GeneratePresignedUrl = {
  __typename?: 'GeneratePresignedUrl';
  expiresIn: Scalars['Float']['output'];
  key: Scalars['String']['output'];
  presignedUrl: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type GeneratePresignedUrlInput = {
  contentType: SupportedUploadContentTypesEnum;
};

export type GeneratePresignedUrlResult = GeneratePresignedUrl | HandledError;

export type HandledError = {
  __typename?: 'HandledError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Media = {
  __typename?: 'Media';
  alt: Scalars['String']['output'];
  keyS3?: Maybe<Scalars['String']['output']>;
  size: Scalars['Float']['output'];
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Metadata = {
  __typename?: 'Metadata';
  limit?: Maybe<Scalars['Int']['output']>;
  numElements?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  orderBy?: Maybe<Scalars['String']['output']>;
  orderDirection?: Maybe<OrderDirection>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  disconnectTelegram: AccountResult;
  disconnectTwitter: AccountResult;
  generateImage: GenRequestResult;
  generateModel: GenRequestResult;
  generatePresignedPost: GeneratePresignedPostResult;
  generatePresignedUrl: GeneratePresignedUrlResult;
  generateSubthread: SubthreadResult;
  redeemVoucher: CreditResult;
};


export type MutationGenerateImageArgs = {
  subthreadId: Scalars['String']['input'];
};


export type MutationGenerateModelArgs = {
  imageRequestId?: InputMaybe<Scalars['String']['input']>;
  imageUrl: Scalars['String']['input'];
  subthreadId: Scalars['String']['input'];
};


export type MutationGeneratePresignedPostArgs = {
  fileName: Scalars['String']['input'];
};


export type MutationGeneratePresignedUrlArgs = {
  input: GeneratePresignedUrlInput;
};


export type MutationGenerateSubthreadArgs = {
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  numImages?: InputMaybe<Scalars['Float']['input']>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  strength?: InputMaybe<Scalars['Float']['input']>;
  style?: InputMaybe<SubthreadStyle>;
  threadId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRedeemVoucherArgs = {
  code: Scalars['String']['input'];
};

/** Order direction */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Pagination = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<OrderDirection>;
};

export type PresignedPost = {
  __typename?: 'PresignedPost';
  fields: Scalars['JSON']['output'];
  url: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getMyCredits: CreditResult;
  getSubthread: SubthreadResult;
  getSubthreadGenRequests: GenRequestsPageResult;
  getSubthreads: SubthreadPageResult;
  getThreads: ThreadPageResult;
  me: AccountResult;
};


export type QueryGetSubthreadArgs = {
  subthreadId: Scalars['String']['input'];
};


export type QueryGetSubthreadGenRequestsArgs = {
  subthreadId: Scalars['String']['input'];
};


export type QueryGetSubthreadsArgs = {
  filters?: InputMaybe<SubthreadFilter>;
  pagination?: InputMaybe<Pagination>;
};


export type QueryGetThreadsArgs = {
  filters?: InputMaybe<ThreadFilter>;
  pagination?: InputMaybe<Pagination>;
};

export type Subthread = {
  __typename?: 'Subthread';
  _id: Scalars['String']['output'];
  address: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  prompt?: Maybe<Scalars['String']['output']>;
  strength?: Maybe<Scalars['Float']['output']>;
  style?: Maybe<SubthreadStyle>;
  threadId: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type SubthreadFilter = {
  _id_eq?: InputMaybe<Scalars['String']['input']>;
  _id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  _id_ne?: InputMaybe<Scalars['String']['input']>;
  _id_nin?: InputMaybe<Array<Scalars['String']['input']>>;
  address_eq?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_ne?: InputMaybe<Scalars['String']['input']>;
  address_nin?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt_eq?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_ne?: InputMaybe<Scalars['DateTimeISO']['input']>;
  threadId_eq?: InputMaybe<Scalars['String']['input']>;
  threadId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  threadId_ne?: InputMaybe<Scalars['String']['input']>;
  threadId_nin?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_ne?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type SubthreadPageResult = HandledError | SubthreadsPage;

export type SubthreadResult = HandledError | Subthread;

/** The style of the subthread */
export enum SubthreadStyle {
  Clay = 'Clay',
  Cute = 'Cute',
  Environment = 'Environment',
  Fantasy = 'Fantasy',
  Isometric = 'Isometric',
  LowPoly = 'LowPoly',
  Metallic = 'Metallic',
  Realistic = 'Realistic',
  SciFi = 'SciFi',
  Stylized = 'Stylized',
  Toon = 'Toon',
  Voxel = 'Voxel',
  Weapons = 'Weapons',
  Wireframe = 'Wireframe'
}

export type SubthreadsPage = {
  __typename?: 'SubthreadsPage';
  items: Array<Subthread>;
  metadata: Metadata;
};

/** The supported content types for upload */
export enum SupportedUploadContentTypesEnum {
  ImageJpeg = 'ImageJpeg',
  ImagePng = 'ImagePng'
}

export type Thread = {
  __typename?: 'Thread';
  _id: Scalars['String']['output'];
  address: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type ThreadFilter = {
  _id_eq?: InputMaybe<Scalars['String']['input']>;
  _id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  _id_ne?: InputMaybe<Scalars['String']['input']>;
  _id_nin?: InputMaybe<Array<Scalars['String']['input']>>;
  address_eq?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_ne?: InputMaybe<Scalars['String']['input']>;
  address_nin?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt_eq?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  createdAt_ne?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt_ne?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type ThreadPageResult = HandledError | ThreadsPage;

export type ThreadsPage = {
  __typename?: 'ThreadsPage';
  items: Array<Thread>;
  metadata: Metadata;
};

export type Timings = {
  __typename?: 'Timings';
  inference?: Maybe<Scalars['Float']['output']>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'Account', address: string, twitterId?: string | null, twitterName?: string | null, twitterUsername?: string | null, twitterAvatar?: string | null, telegramId?: number | null, telegramName?: string | null, telegramUsername?: string | null, telegramAvatar?: string | null, createdAt: any, updatedAt: any } | { __typename?: 'HandledError', code: string, message: string } };

export type DisconnectTwitterMutationVariables = Exact<{ [key: string]: never; }>;


export type DisconnectTwitterMutation = { __typename?: 'Mutation', disconnectTwitter: { __typename?: 'Account', address: string, twitterId?: string | null, twitterName?: string | null, twitterUsername?: string | null, twitterAvatar?: string | null, telegramId?: number | null, telegramName?: string | null, telegramUsername?: string | null, telegramAvatar?: string | null, createdAt: any, updatedAt: any } | { __typename?: 'HandledError', code: string, message: string } };

export type DisconnectTelegramMutationVariables = Exact<{ [key: string]: never; }>;


export type DisconnectTelegramMutation = { __typename?: 'Mutation', disconnectTelegram: { __typename?: 'Account', address: string, twitterId?: string | null, twitterName?: string | null, twitterUsername?: string | null, twitterAvatar?: string | null, telegramId?: number | null, telegramName?: string | null, telegramUsername?: string | null, telegramAvatar?: string | null, createdAt: any, updatedAt: any } | { __typename?: 'HandledError', code: string, message: string } };

export type GenerateSubthreadMutationVariables = Exact<{
  prompt: Scalars['String']['input'];
  style?: InputMaybe<SubthreadStyle>;
  threadId?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  numImages?: InputMaybe<Scalars['Float']['input']>;
  strength?: InputMaybe<Scalars['Float']['input']>;
}>;


export type GenerateSubthreadMutation = { __typename?: 'Mutation', generateSubthread: { __typename?: 'HandledError', code: string, message: string } | { __typename?: 'Subthread', _id: string, address: string, createdAt: any, updatedAt: any, threadId: string, prompt?: string | null, style?: SubthreadStyle | null, imageUrl?: string | null, strength?: number | null } };

export type GenerateImageMutationVariables = Exact<{
  subthreadId: Scalars['String']['input'];
}>;


export type GenerateImageMutation = { __typename?: 'Mutation', generateImage: { __typename?: 'GenRequest', _id: string, subthreadId: string, address: string, status: GenRequestStatusEnum, metadata: any, type: string, credits: number, createdAt: any, updatedAt: any, images?: Array<{ __typename?: 'Media', alt: string, keyS3?: string | null, size: number, type: string, url: string }> | null, model_mesh?: { __typename?: 'Media', alt: string, keyS3?: string | null, size: number, type: string, url: string } | null, timings?: { __typename?: 'Timings', inference?: number | null } | null } | { __typename?: 'HandledError', code: string, message: string } };

export type GenerateModelMutationVariables = Exact<{
  subthreadId: Scalars['String']['input'];
  imageRequestId?: InputMaybe<Scalars['String']['input']>;
  imageUrl: Scalars['String']['input'];
}>;


export type GenerateModelMutation = { __typename?: 'Mutation', generateModel: { __typename?: 'GenRequest', _id: string, subthreadId: string, address: string, status: GenRequestStatusEnum, metadata: any, type: string, credits: number, createdAt: any, updatedAt: any, images?: Array<{ __typename?: 'Media', alt: string, keyS3?: string | null, size: number, type: string, url: string }> | null, model_mesh?: { __typename?: 'Media', alt: string, keyS3?: string | null, size: number, type: string, url: string } | null, timings?: { __typename?: 'Timings', inference?: number | null } | null } | { __typename?: 'HandledError', code: string, message: string } };

export type GetThreadsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
  filters?: InputMaybe<ThreadFilter>;
}>;


export type GetThreadsQuery = { __typename?: 'Query', getThreads: { __typename?: 'HandledError', code: string, message: string } | { __typename?: 'ThreadsPage', items: Array<{ __typename?: 'Thread', _id: string, createdAt: any, updatedAt: any, address: string, title: string }>, metadata: { __typename?: 'Metadata', limit?: number | null, offset?: number | null, orderBy?: string | null, orderDirection?: OrderDirection | null, numElements?: number | null, page?: number | null, pages?: number | null } } };

export type GetSubthreadsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
  filters?: InputMaybe<SubthreadFilter>;
}>;


export type GetSubthreadsQuery = { __typename?: 'Query', getSubthreads: { __typename?: 'HandledError', code: string, message: string } | { __typename?: 'SubthreadsPage', items: Array<{ __typename?: 'Subthread', _id: string, address: string, createdAt: any, updatedAt: any, threadId: string, prompt?: string | null, style?: SubthreadStyle | null, imageUrl?: string | null, strength?: number | null }>, metadata: { __typename?: 'Metadata', limit?: number | null, offset?: number | null, orderBy?: string | null, orderDirection?: OrderDirection | null, numElements?: number | null, page?: number | null, pages?: number | null } } };

export type GetSubthreadQueryVariables = Exact<{
  subthreadId: Scalars['String']['input'];
}>;


export type GetSubthreadQuery = { __typename?: 'Query', getSubthread: { __typename?: 'HandledError', code: string, message: string } | { __typename?: 'Subthread', _id: string, address: string, createdAt: any, updatedAt: any, threadId: string, prompt?: string | null, style?: SubthreadStyle | null, imageUrl?: string | null, strength?: number | null } };

export type GetSubthreadGenRequestsQueryVariables = Exact<{
  subthreadId: Scalars['String']['input'];
}>;


export type GetSubthreadGenRequestsQuery = { __typename?: 'Query', getSubthreadGenRequests: { __typename?: 'GenRequestsPage', items: Array<{ __typename?: 'GenRequest', _id: string, subthreadId: string, address: string, status: GenRequestStatusEnum, metadata: any, type: string, credits: number, createdAt: any, updatedAt: any, images?: Array<{ __typename?: 'Media', alt: string, keyS3?: string | null, size: number, type: string, url: string }> | null, model_mesh?: { __typename?: 'Media', alt: string, keyS3?: string | null, size: number, type: string, url: string } | null, timings?: { __typename?: 'Timings', inference?: number | null } | null }>, metadata: { __typename?: 'Metadata', limit?: number | null, offset?: number | null, orderBy?: string | null, orderDirection?: OrderDirection | null, numElements?: number | null, total?: number | null, page?: number | null, pages?: number | null } } | { __typename?: 'HandledError', code: string, message: string } };

export type GetMyCreditsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyCreditsQuery = { __typename?: 'Query', getMyCredits: { __typename?: 'Credit', _id: string, available: number, pending: number, confirmed: number, updatedAt: any, createdAt: any } | { __typename?: 'HandledError', code: string, message: string } };

export type RedeemVoucherMutationVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type RedeemVoucherMutation = { __typename?: 'Mutation', redeemVoucher: { __typename?: 'Credit', _id: string, available: number, pending: number, confirmed: number, updatedAt: any, createdAt: any } | { __typename?: 'HandledError', code: string, message: string } };

export type GeneratePresignedUrlMutationVariables = Exact<{
  input: GeneratePresignedUrlInput;
}>;


export type GeneratePresignedUrlMutation = { __typename?: 'Mutation', generatePresignedUrl: { __typename?: 'GeneratePresignedUrl', presignedUrl: string, url: string, key: string, expiresIn: number } | { __typename?: 'HandledError', code: string, message: string } };


export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"twitterId"}},{"kind":"Field","name":{"kind":"Name","value":"twitterName"}},{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}},{"kind":"Field","name":{"kind":"Name","value":"twitterAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"telegramId"}},{"kind":"Field","name":{"kind":"Name","value":"telegramName"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"telegramAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HandledError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const DisconnectTwitterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DisconnectTwitter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disconnectTwitter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"twitterId"}},{"kind":"Field","name":{"kind":"Name","value":"twitterName"}},{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}},{"kind":"Field","name":{"kind":"Name","value":"twitterAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"telegramId"}},{"kind":"Field","name":{"kind":"Name","value":"telegramName"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"telegramAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HandledError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<DisconnectTwitterMutation, DisconnectTwitterMutationVariables>;
export const DisconnectTelegramDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DisconnectTelegram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"disconnectTelegram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"twitterId"}},{"kind":"Field","name":{"kind":"Name","value":"twitterName"}},{"kind":"Field","name":{"kind":"Name","value":"twitterUsername"}},{"kind":"Field","name":{"kind":"Name","value":"twitterAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"telegramId"}},{"kind":"Field","name":{"kind":"Name","value":"telegramName"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"telegramAvatar"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HandledError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<DisconnectTelegramMutation, DisconnectTelegramMutationVariables>;
export const GenerateSubthreadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateSubthread"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"prompt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"style"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SubthreadStyle"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageUrl"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numImages"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"strength"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateSubthread"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"prompt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"prompt"}}},{"kind":"Argument","name":{"kind":"Name","value":"style"},"value":{"kind":"Variable","name":{"kind":"Name","value":"style"}}},{"kind":"Argument","name":{"kind":"Name","value":"threadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}}},{"kind":"Argument","name":{"kind":"Name","value":"imageUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageUrl"}}},{"kind":"Argument","name":{"kind":"Name","value":"numImages"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numImages"}}},{"kind":"Argument","name":{"kind":"Name","value":"strength"},"value":{"kind":"Variable","name":{"kind":"Name","value":"strength"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Subthread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"strength"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HandledError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<GenerateSubthreadMutation, GenerateSubthreadMutationVariables>;
export const GenerateImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subthreadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subthreadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subthreadId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GenRequest"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"subthreadId"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"keyS3"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"model_mesh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"keyS3"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inference"}}]}},{"kind":"Field","name":{"kind":"Name","value":"credits"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HandledError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<GenerateImageMutation, GenerateImageMutationVariables>;
export const GenerateModelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateModel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subthreadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageRequestId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageUrl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateModel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subthreadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subthreadId"}}},{"kind":"Argument","name":{"kind":"Name","value":"imageRequestId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageRequestId"}}},{"kind":"Argument","name":{"kind":"Name","value":"imageUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageUrl"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GenRequest"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"subthreadId"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"keyS3"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"model_mesh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"keyS3"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inference"}}]}},{"kind":"Field","name":{"kind":"Name","value":"credits"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HandledError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<GenerateModelMutation, GenerateModelMutationVariables>;
export const GetThreadsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetThreads"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getThreads"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadsPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"orderBy"}},{"kind":"Field","name":{"kind":"Name","value":"orderDirection"}},{"kind":"Field","name":{"kind":"Name","value":"numElements"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HandledError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<GetThreadsQuery, GetThreadsQueryVariables>;
export const GetSubthreadsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubthreads"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SubthreadFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSubthreads"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HandledError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SubthreadsPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"strength"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"orderBy"}},{"kind":"Field","name":{"kind":"Name","value":"orderDirection"}},{"kind":"Field","name":{"kind":"Name","value":"numElements"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSubthreadsQuery, GetSubthreadsQueryVariables>;
export const GetSubthreadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubthread"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subthreadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSubthread"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subthreadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subthreadId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Subthread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"strength"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HandledError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<GetSubthreadQuery, GetSubthreadQueryVariables>;
export const GetSubthreadGenRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubthreadGenRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subthreadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSubthreadGenRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subthreadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subthreadId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GenRequestsPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"subthreadId"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"keyS3"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"model_mesh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"keyS3"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inference"}}]}},{"kind":"Field","name":{"kind":"Name","value":"credits"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"orderBy"}},{"kind":"Field","name":{"kind":"Name","value":"orderDirection"}},{"kind":"Field","name":{"kind":"Name","value":"numElements"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HandledError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<GetSubthreadGenRequestsQuery, GetSubthreadGenRequestsQueryVariables>;
export const GetMyCreditsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyCredits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyCredits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Credit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"available"}},{"kind":"Field","name":{"kind":"Name","value":"pending"}},{"kind":"Field","name":{"kind":"Name","value":"confirmed"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HandledError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<GetMyCreditsQuery, GetMyCreditsQueryVariables>;
export const RedeemVoucherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RedeemVoucher"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"redeemVoucher"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Credit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"available"}},{"kind":"Field","name":{"kind":"Name","value":"pending"}},{"kind":"Field","name":{"kind":"Name","value":"confirmed"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HandledError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<RedeemVoucherMutation, RedeemVoucherMutationVariables>;
export const GeneratePresignedUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GeneratePresignedUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratePresignedUrlInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generatePresignedUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GeneratePresignedUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"presignedUrl"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"expiresIn"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HandledError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<GeneratePresignedUrlMutation, GeneratePresignedUrlMutationVariables>;