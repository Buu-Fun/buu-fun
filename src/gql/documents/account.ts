import { gql } from "graphql-request";

export const Me = gql`
  query Me {
    me {
      ... on Account {
        address
        twitterId
        twitterName
        twitterUsername
        twitterAvatar
        telegramId
        telegramName
        telegramUsername
        telegramAvatar
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

export const DisconnectTwitter = gql`
  mutation DisconnectTwitter {
    disconnectTwitter {
      ... on Account {
        address
        twitterId
        twitterName
        twitterUsername
        twitterAvatar
        telegramId
        telegramName
        telegramUsername
        telegramAvatar
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

export const DisconnectTelegram = gql`
  mutation DisconnectTelegram {
    disconnectTelegram {
      ... on Account {
        address
        twitterId
        twitterName
        twitterUsername
        twitterAvatar
        telegramId
        telegramName
        telegramUsername
        telegramAvatar
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
