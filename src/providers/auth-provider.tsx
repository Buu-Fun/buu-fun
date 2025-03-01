"use client";
import { PrivyProvider } from "@privy-io/react-auth";
import * as React from "react";

import "@/styles/solana-modal.css";
import "@solana/wallet-adapter-react-ui/styles.css";

const NEXT_PUBLIC_PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

import {
  ConnectionProvider,
  WalletProvider as SolanaWalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  CoinbaseWalletAdapter,
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { AuthenticationProvider } from "./account.context";
import { WalletProvider } from "./wallet.context";

export default function Providers({ children }: { children: React.ReactNode }) {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = React.useMemo(() => clusterApiUrl(network), [network]);

  const wallets = React.useMemo(
    () => [
      new CoinbaseWalletAdapter(),
      new SolflareWalletAdapter(),
      new LedgerWalletAdapter(),
      new PhantomWalletAdapter(),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  );

  return (
    <PrivyProvider
      appId={NEXT_PUBLIC_PRIVY_APP_ID as string}
      // clientId={process.env.NEXT_PUBIC_PRIVY_CLIENT_ID}
      config={{
        // loginMethods: ["email", "wallet"],
        // Customize Privy's appearance in your app
        appearance: {
          theme: "dark",

          // walletList: ["phantom", "coinbase_wallet", "solflare"],
          showWalletLoginFirst: true,
          accentColor: "#1c20275c",
          // eslint-disable-next-line @next/next/no-img-element
          logo: <img src="/logo.png" className="w-12" alt="Buu.fun Logo" />,
        },
        
        loginMethodsAndOrder: {
          primary: ["detected_wallets","email", ],
          overflow: ["phantom","wallet_connect"]
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
            ethereum: {
              createOnLogin: "users-without-wallets",
            },
            solana: {
              createOnLogin: "users-without-wallets",
            },
            showWalletUIs: true,
        },
      }}
    >
      <ConnectionProvider endpoint={endpoint}>
        <SolanaWalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <WalletProvider>
              <AuthenticationProvider>{children}</AuthenticationProvider>
            </WalletProvider>
          </WalletModalProvider>
        </SolanaWalletProvider>
      </ConnectionProvider>
    </PrivyProvider>
  );
}
