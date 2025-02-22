import { gql } from "graphql-request";

export const GenerateSubthreadMutation = gql`
  mutation GenerateSubthread(
    $prompt: String!
    $style: SubthreadStyle
    $threadId: String
  ) {
    generateSubthread(prompt: $prompt, style: $style, threadId: $threadId) {
      ... on Subthread {
        _id
        address
        createdAt
        updatedAt
        threadId
        prompt
        style
        imageRequests {
          _id
          status
          metadata
          type
          images {
            content_type
            file_name
            file_size
            url
          }
          model_mesh {
            content_type
            file_name
            file_size
            url
          }
          timings {
            inference
          }
        }
        modelRequests {
          _id
          status
          metadata
          type
          images {
            content_type
            file_name
            file_size
            url
          }
          model_mesh {
            content_type
            file_name
            file_size
            url
          }
          timings {
            inference
          }
        }
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
      ... on Subthread {
        _id
        address
        createdAt
        updatedAt
        threadId
        prompt
        style
        imageRequests {
          _id
          status
          metadata
          type
          images {
            content_type
            file_name
            file_size
            url
          }
          model_mesh {
            content_type
            file_name
            file_size
            url
          }
          timings {
            inference
          }
        }
        modelRequests {
          _id
          status
          metadata
          type
          images {
            content_type
            file_name
            file_size
            url
          }
          model_mesh {
            content_type
            file_name
            file_size
            url
          }
          timings {
            inference
          }
        }
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GenerateModelMutation = gql`
  mutation GenerateModel($imageRequestId: String!, $subthreadId: String!) {
    generateModel(imageRequestId: $imageRequestId, subthreadId: $subthreadId) {
      ... on Subthread {
        _id
        address
        createdAt
        updatedAt
        threadId
        prompt
        style
        imageRequests {
          _id
          status
          metadata
          type
          images {
            content_type
            file_name
            file_size
            url
          }
          model_mesh {
            content_type
            file_name
            file_size
            url
          }
          timings {
            inference
          }
        }
        modelRequests {
          _id
          status
          metadata
          type
          images {
            content_type
            file_name
            file_size
            url
          }
          model_mesh {
            content_type
            file_name
            file_size
            url
          }
          timings {
            inference
          }
        }
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
          imageRequests {
            _id
            status
            metadata
            type
            images {
              content_type
              file_name
              file_size
              url
            }
            model_mesh {
              content_type
              file_name
              file_size
              url
            }
            timings {
              inference
            }
          }
          modelRequests {
            _id
            status
            metadata
            type
            images {
              content_type
              file_name
              file_size
              url
            }
            model_mesh {
              content_type
              file_name
              file_size
              url
            }
            timings {
              inference
            }
          }
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
        imageRequests {
          _id
          status
          metadata
          type
          images {
            content_type
            file_name
            file_size
            url
          }
          model_mesh {
            content_type
            file_name
            file_size
            url
          }
          timings {
            inference
          }
        }
        modelRequests {
          _id
          status
          metadata
          type
          images {
            content_type
            file_name
            file_size
            url
          }
          model_mesh {
            content_type
            file_name
            file_size
            url
          }
          timings {
            inference
          }
        }
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;
