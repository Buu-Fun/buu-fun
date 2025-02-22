import { gql } from 'graphql-request';

export const LoginChallengeMutation = gql`
  mutation LoginChallenge($account: String!) {
    loginChallenge(account: $account) {
      ... on LoginChallenge {
        input {
          address
          nonce
        }
      }
      ... on Error {
        code
        message
      }
    }
  }
`;

export const LoginAuthMutation = gql`
  mutation LoginAuth($output: SolanaSignInOutput!, $input: SolanaSignInInput!) {
    loginAuth(output: $output, input: $input) {
      ... on LoginAuth {
        token
        tokenExpiry
      }
      ... on Error {
        code
        message
      }
    }
  }
`;

export const LoginRefreshMutation = gql`
  mutation LoginRefresh($input: LoginRefreshInput!) {
    loginRefresh(input: $input) {
      ... on LoginAuth {
        token
        tokenExpiry
      }
      ... on Error {
        code
        message
      }
    }
  }
`;

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
        solanaPubKey
        createdAt
        updatedAt
      }
      ... on Error {
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
        solanaPubKey
        createdAt
        updatedAt
      }
      ... on Error {
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
        solanaPubKey
        createdAt
        updatedAt
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
