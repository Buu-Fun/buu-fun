"use client";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import {
  ConnectedSolanaWallet,
  usePrivy,
  useSolanaWallets,
} from "@privy-io/react-auth";
import { useWallet as useWeb3Wallet } from "@solana/wallet-adapter-react";
import { Adapter } from "@solana/wallet-adapter-base";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useDisclosure } from "@nextui-org/react";
import { WalletConnectionTypeModal } from "@/components/wallet/WalletConnectionTypeModal";
import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export enum WalletConnectionType {
  Web2 = "web2",
  Web3 = "web3",
}
export const walletType = WalletConnectionType.Web3;
interface WalletContextType {
  loading: boolean;
  address?: string | null;
  adapter?: Adapter | ConnectedSolanaWallet;
  connectionType?: WalletConnectionType;
  openConnectionModal: () => void;
  disconnect: () => Promise<void>;
  switchConnectionType: () => Promise<void>;
  connect: (type: WalletConnectionType) => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);
const connectedWalletConnectionTypeKey = "connected-wallet-connection-type";

export const WalletProvider = ({ children }: Props) => {
  const connectionDisclosure = useDisclosure();
  const router = useRouter();
  const { isModalOpen, user, login, logout } = usePrivy();
  const { wallets } = useSolanaWallets();
  const {
    connecting,
    wallet,
    disconnect: disconnectWeb3Wallet,
  } = useWeb3Wallet();
  const { visible, setVisible } = useWalletModal();
  const [connectionType, setConnectionType] =
    React.useState<WalletConnectionType>(WalletConnectionType.Web2);

  const disconnect = useCallback(async () => {
    // Disconnect wallet
    if (user) {
      logout();
    }
    if (wallet) {
      disconnectWeb3Wallet();
    }
    localStorage.removeItem(connectedWalletConnectionTypeKey);
    router.push("/");
  }, [user, logout, disconnectWeb3Wallet, router, wallet]);

  const connect = useCallback(
    async (type: WalletConnectionType) => {
      // Connect to wallet
      if (type === WalletConnectionType.Web2) {
        if (!user) {
          login();
        }
      } else {
        if (!wallet) {
          // Connect to web3 wallet
          setVisible(true);
        }
      }
      setConnectionType(type);
      localStorage.setItem(connectedWalletConnectionTypeKey, type);
    },
    [user,  login, setVisible, wallet]
  );

  const switchConnectionType = useCallback(async () => {
    if (connectionType === WalletConnectionType.Web2) {
      if (wallet) {
        setConnectionType(WalletConnectionType.Web3);
      } else {
        connect(WalletConnectionType.Web3);
      }
    } else {
      if (wallets.length > 0) {
        setConnectionType(WalletConnectionType.Web2);
      } else {
        connect(WalletConnectionType.Web2);
      }
    }
  }, [connect, connectionType, wallet, wallets]);

  useEffect(() => {
    const savedType = localStorage.getItem(connectedWalletConnectionTypeKey);
    if (savedType) {
      connect(savedType as WalletConnectionType);
    }
  }, [connect]);

  const address =
    connectionType === WalletConnectionType.Web2
      ? wallets[0]?.address
      : wallet?.adapter.publicKey?.toString();

  const adapter =
    connectionType === WalletConnectionType.Web2 ? wallets[0] : wallet?.adapter;

  const loading =
    connecting || connectionDisclosure.isOpen || visible || isModalOpen;

  const value = useMemo(
    () => ({
      loading,
      address,
      adapter,
      connectionType,
      openConnectionModal: () => connectionDisclosure.onOpen(),
      disconnect,
      switchConnectionType,
      connect,
    }),
    [
      loading,
      address,
      adapter,
      connectionType,
      connectionDisclosure,
      disconnect,
      switchConnectionType,
      connect,
    ]
  );

  return (
    <WalletContext.Provider value={value}>
      <WalletConnectionTypeModal
        isOpen={connectionDisclosure.isOpen}
        onOpenChange={connectionDisclosure.onOpenChange}
        connect={connect}
      />
      {children}
    </WalletContext.Provider>
  );
};

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error(`useWallet must be used within a WalletProvider`);
  }
  return context;
}
