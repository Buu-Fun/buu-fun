'use client';
import React, { createContext, useCallback, useContext, useMemo } from 'react';
// import { serverRequest } from '../gql/client';
// import {
//   DisconnectTelegram,
//   DisconnectTwitter,
//   LoginAuthMutation,
//   LoginChallengeMutation,
//   LoginRefreshMutation,
//   Me,
// } from '../gql/documents/account';
// import {
//   Account,
//   LoginAuth,
//   LoginChallenge,
//   SolanaSignInOutput,
// } from '../gql/types/graphql';
import { useWallet } from './wallet.context';
import { SolanaSignInInput } from '@solana/wallet-standard-features';
import { PublicKey } from '@solana/web3.js';
import { Account, LoginAuth, LoginChallenge, SolanaSignInOutput } from '@/gql/types/graphql';
import { serverRequest } from '@/gql/client';
import { DisconnectTelegram, DisconnectTwitter, LoginAuthMutation, LoginChallengeMutation, LoginRefreshMutation, Me } from '@/gql/documents/account';
import { createSignInMessageText } from './privy';
const SERVER_URL =  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:4000';
const TELEGRAM_AUTH_BOT_HANDLE = 'leonardo_cash_auth_bot';


interface Props {
  children: React.ReactNode;
}

interface AuthenticationContextType {
  loading: boolean;
  account?: Account;
  fetchAccount: () => Promise<void>;
  getAccessToken: (account: string) => string | null;
  connectTwitterAccount: (account: string) => Promise<void>;
  disconnectTwitterAccount: (account: string) => Promise<void>;
  connectTelegramAccount: (account: string) => Promise<void>;
  disconnectTelegramAccount: (account: string) => Promise<void>;
}

const AuthenticationContext = createContext<
  AuthenticationContextType | undefined
>(undefined);

export const AuthenticationProvider = ({ children }: Props) => {
  const [loading, setLoading] = React.useState(true);
  const { address, adapter, disconnect } = useWallet();

  const getAccessTokenKeys = () => {
    const value = localStorage.getItem('x-accessToken-keys');
    if (value) {
      return JSON.parse(value) as string[];
    }
    return [];
  };

  const getAccessTokenKey = (account: string) => `x-accessToken-${account}`;

  const getAccessToken = (account: string) => {
    const value = localStorage.getItem(getAccessTokenKey(account));
    if (value) {
      return JSON.parse(value) as string;
    }
    return null;
  };

  const fetchAccount = useCallback(async () => {
    if (!address) return;
    const accessToken = getAccessToken(address);
    if (!accessToken) return;
    try {
      const response = await serverRequest(
        Me,
        {},
        {
          Authorization: `Bearer ${accessToken}`,
        },
      );
      return response.me;
    } catch (error) {
      console.error('Error fetching account:', error);
    }
  }, [getAccessToken, address]);

  const authenticate = useCallback(async () => {
    try {
      if (!address || !adapter) return;
      setLoading(true);
      const accessToken = getAccessToken(address);
      if (accessToken) {
        try {
          const { loginRefresh } = (await serverRequest(
            LoginRefreshMutation,
            {
              input: {
                account: address,
              },
            },
            {
              Authorization: `Bearer ${getAccessToken(address)}`,
            },
          )) as { loginRefresh: LoginAuth | null };

          if (loginRefresh && loginRefresh.token) {
            localStorage.setItem(
              getAccessTokenKey(address),
              JSON.stringify(loginRefresh.token),
            );
            const accessTokenKeys = getAccessTokenKeys();
            const accessTokenKey = getAccessTokenKey(address);
            if (!accessTokenKeys.includes(accessTokenKey)) {
              localStorage.setItem(
                'x-accessToken-keys',
                JSON.stringify([...accessTokenKeys, accessTokenKey]),
              );
            }
            return;
          }
        } catch (error) {
          console.log('Authentication error:', error);
        }
      }

      const { loginChallenge } = (await serverRequest(LoginChallengeMutation, {
        account: address,
      })) as {
        loginChallenge: LoginChallenge | null;
      };

      if (!loginChallenge?.input) return;

      const challengeInput = loginChallenge.input;
      const input = challengeInput as SolanaSignInInput;

      // Send the signInInput to the wallet and trigger a sign-in request
      let output;
      if ('signIn' in adapter) {
        output = await adapter.signIn(input);
      } else if ('signMessage' in adapter) {
        const signedMessage = createSignInMessageText(input);
        const signature = await adapter.signMessage(Buffer.from(signedMessage));
        const account = {
          address: address,
          publicKey: new PublicKey(address).toBuffer(),
          chains: [],
          features: [],
        };
        output = {
          account,
          signature,
          signedMessage,
          signatureType: 'ed25519',
        };
      }
      if (!output) {
        disconnect();
        return;
      }

      const formattedOutput = {
        account: {
          address: output.account.address,
          publicKey: Buffer.from(output.account.publicKey).toString('base64'),
          chains: output.account.chains.map((chain) => chain.toString()),
          features: output.account.features.map((feature) =>
            feature.toString(),
          ),
        },
        signature: Buffer.from(output.signature).toString('base64'),
        signedMessage: Buffer.from(output.signedMessage).toString('base64'),
        signatureType: output.signatureType || 'ed25519',
      } as SolanaSignInOutput;
      const { loginAuth } = (await serverRequest(LoginAuthMutation, {
        input: challengeInput,
        output: formattedOutput,
      })) as { loginAuth: LoginAuth | null };

      if (loginAuth && loginAuth.token) {
        localStorage.setItem(
          getAccessTokenKey(address),
          JSON.stringify(loginAuth.token),
        );
        const accessTokenKeys = getAccessTokenKeys();
        const accessTokenKey = getAccessTokenKey(address);
        if (!accessTokenKeys.includes(accessTokenKey)) {
          localStorage.setItem(
            'x-accessToken-keys',
            JSON.stringify([...accessTokenKeys, accessTokenKey]),
          );
        }
      } else {
        disconnect();
      }
    } catch (error: unknown) {
      console.error('Authentication error:', error);
      disconnect();
    } finally {
      setLoading(false);
      fetchAccount();
    }
  }, [address, adapter, fetchAccount]);

  const connectTwitterAccount = useCallback(async (account: string) => {
    const accessToken = getAccessToken(account);
    if (!accessToken) return;
    const token = encodeURIComponent(accessToken);
    const url = `${SERVER_URL}/accounts/auth/twitter?token=${token}`;
    window.location.href = url; // Redirige al backend
  }, []);

  const disconnectTwitterAccount = useCallback(
    async (account: string) => {
      await serverRequest(
        DisconnectTwitter,
        {},
        {
          Authorization: `Bearer ${getAccessToken(account)}`,
        },
      );
      await fetchAccount();
    },
    [fetchAccount],
  );

  const connectTelegramAccount = useCallback(async (account: string) => {
    const text = `Hey!\n\nPlease link my wallet ${account} to my Telegram account.\n\nMy verification code is:\n\n$${getAccessToken(account)}$\n\nThanks!`;
    const url = `https://t.me/${TELEGRAM_AUTH_BOT_HANDLE}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }, []);

  const disconnectTelegramAccount = useCallback(
    async (account: string) => {
      await serverRequest(
        DisconnectTelegram,
        {},
        {
          Authorization: `Bearer ${getAccessToken(account)}`,
        },
      );
      await fetchAccount();
    },
    [fetchAccount],
  );

  React.useEffect(() => {
    authenticate();
    const interval = setInterval(async () => authenticate(), 1000 * 60 * 5);
    return () => clearInterval(interval);
  }, [address]);

  React.useEffect(() => {
    fetchAccount();
  }, [fetchAccount]);

  const value = useMemo(
    () => ({
      loading,
      account: undefined,
      fetchAccount,
      getAccessToken,
      connectTwitterAccount,
      disconnectTwitterAccount,
      connectTelegramAccount,
      disconnectTelegramAccount,
    }),
    [
      loading,
      fetchAccount,
      fetchAccount,
      getAccessToken,
      connectTwitterAccount,
      disconnectTwitterAccount,
      connectTelegramAccount,
      disconnectTelegramAccount,
    ],
  );

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export function useAuthentication() {
  const context = useContext(AuthenticationContext);
  if (context === undefined) {
    throw new Error(
      `useAuthentication must be used within a AuthenticationProvider`,
    );
  }
  return context;
}
