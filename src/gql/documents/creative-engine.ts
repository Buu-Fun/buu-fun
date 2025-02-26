import { gql } from "graphql-request";

export const GenerateSubthreadMutation = gql`
  mutation GenerateSubthread(
    $prompt: String!
    $style: SubthreadStyle
    $threadId: String
    $imageUrl: String
    $numImages: Float
    $strength: Float
  ) {
    generateSubthread(
      prompt: $prompt
      style: $style
      threadId: $threadId
      imageUrl: $imageUrl
      numImages: $numImages
      strength: $strength
    ) {
      ... on Subthread {
        _id
        address
        createdAt
        updatedAt
        threadId
        prompt
        style
        imageUrl
        strength
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GenerateImageMutation = gql`
  mutation GenerateImage($subthreadId: String!) {
    generateImage(subthreadId: $subthreadId) {
      ... on GenRequest {
        _id
        subthreadId
        address
        status
        metadata
        type
        images {
          content_type
          file_name
          file_size
          width
          height
          url
        }
        model_mesh {
          content_type
          file_name
          file_size
          width
          height
          url
        }
        timings {
          inference
        }
        credits
        createdAt
        updatedAt
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GenerateModelMutation = gql`
  mutation GenerateModel(
    $subthreadId: String!
    $imageRequestId: String
    $imageUrl: String!
  ) {
    generateModel(
      subthreadId: $subthreadId
      imageRequestId: $imageRequestId
      imageUrl: $imageUrl
    ) {
      ... on GenRequest {
        _id
        subthreadId
        address
        status
        metadata
        type
        images {
          content_type
          file_name
          file_size
          width
          height
          url
        }
        model_mesh {
          content_type
          file_name
          file_size
          width
          height
          url
        }
        timings {
          inference
        }
        credits
        createdAt
        updatedAt
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GetThreadsQuery = gql`
  query GetThreads($pagination: Pagination, $filters: ThreadFilter) {
    getThreads(pagination: $pagination, filters: $filters) {
      ... on ThreadsPage {
        items {
          _id
          createdAt
          updatedAt
          address
          title
        }
        metadata {
          limit
          offset
          orderBy
          orderDirection
          numElements
          page
          pages
        }
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GetSubthreadsQuery = gql`
  query GetSubthreads($pagination: Pagination, $filters: SubthreadFilter) {
    getSubthreads(pagination: $pagination, filters: $filters) {
      ... on HandledError {
        code
        message
      }
      ... on SubthreadsPage {
        items {
          _id
          address
          createdAt
          updatedAt
          address
          threadId
          prompt
          style
          imageUrl
          strength
        }
        metadata {
          limit
          offset
          orderBy
          orderDirection
          numElements
          page
          pages
        }
      }
    }
  }
`;

export const GetSubthreadQuery = gql`
  query GetSubthread($subthreadId: String!) {
    getSubthread(subthreadId: $subthreadId) {
      ... on Subthread {
        _id
        address
        createdAt
        updatedAt
        threadId
        prompt
        style
        imageUrl
        strength
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GetSubthreadGenRequestsQuery = gql`
  query GetSubthreadGenRequests($subthreadId: String!) {
    getSubthreadGenRequests(subthreadId: $subthreadId) {
      ... on GenRequestsPage {
        items {
          _id
          subthreadId
          address
          status
          metadata
          type
          images {
            content_type
            file_name
            file_size
            width
            height
            url
          }
          model_mesh {
            content_type
            file_name
            file_size
            width
            height
            url
          }
          timings {
            inference
          }
          credits
          createdAt
          updatedAt
        }
        metadata {
          limit
          offset
          orderBy
          orderDirection
          numElements
          total
          page
          pages
        }
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GetMyCreditsQuery = gql`
  query GetMyCredits {
    getMyCredits {
      ... on Credit {
        _id
        available
        pending
        confirmed
        updatedAt
        createdAt
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const RedeemVoucherMutation = gql`
  mutation RedeemVoucher($code: String!) {
    redeemVoucher(code: $code) {
      ... on Credit {
        _id
        available
        pending
        confirmed
        updatedAt
        createdAt
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;
