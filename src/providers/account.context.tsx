"use client";
import {
  LoginModalOptions,
  useIdentityToken,
  usePrivy,
  User,
  useSolanaWallets,
  useWallets,
} from "@privy-io/react-auth";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";

interface Props {
  children: React.ReactNode;
}

interface WalletInfo {
  address?: string;
  id: string;
  name: string;
  icon?: string;
  chainType?: string;
}

interface AuthenticationContextType {
  loading: boolean;
  isAuthenticated: boolean;
  identityToken: string | null;
  user: User | null;
  address?: string;
  wallet?: WalletInfo;
  wallets: WalletInfo[];
  login: (options?: LoginModalOptions | React.MouseEvent<any, any>) => void;
  logout: () => Promise<void>;
}

const AuthenticationContext = createContext<
  AuthenticationContextType | undefined
>(undefined);

// Helper function to get wallet icon
const getWalletIcon = (connector: string): string => {
  const walletIcons: Record<string, string> = {
    metamask: "https://avatars.githubusercontent.com/u/11744586?s=200&v=4",
    walletconnect: "https://avatars.githubusercontent.com/u/37784886?s=200&v=4",
    coinbase: "https://avatars.githubusercontent.com/u/1885080?s=200&v=4",
    phantom: "https://avatars.githubusercontent.com/u/78782331?s=200&v=4",
  };

  return walletIcons[connector.toLowerCase()] || "";
};

export const AuthenticationProvider = ({ children }: Props) => {
  const [activeWallet, setActiveWallet] = useState<WalletInfo | undefined>();
  const [allWallets, setAllWallets] = useState<WalletInfo[]>([]);

  const { ready, authenticated, user, login, logout } = usePrivy();
  const { identityToken } = useIdentityToken();
  const { wallets: solanaWallets, ready: isSolanaReady } = useSolanaWallets();
  const { wallets: evmWallets, ready: isEVMReady } = useWallets();

  // Use refs to track previous values to avoid unnecessary updates
  const prevEvmWalletsRef = useRef(evmWallets);
  const prevSolanaWalletsRef = useRef(solanaWallets);

  const prevUserWalletRef = useRef({
    address: user?.wallet?.address,
    chainType: user?.wallet?.chainType,
  });

  // Process wallets and set them in state
  useEffect(() => {
    if (!ready || (!isSolanaReady && !isEVMReady)) return;

    // Check if wallets or user wallet has actually changed
    const evmWalletsChanged =
      JSON.stringify(prevEvmWalletsRef.current) !== JSON.stringify(evmWallets);
    const solanaWalletsChanged =
      JSON.stringify(prevSolanaWalletsRef.current) !==
      JSON.stringify(solanaWallets);
    const userWalletChanged =
      prevUserWalletRef.current.address !== user?.wallet?.address ||
      prevUserWalletRef.current.chainType !== user?.wallet?.chainType;

    // Only process if something relevant has changed
    if (!evmWalletsChanged && !solanaWalletsChanged && !userWalletChanged) {
      return;
    }

    // Update refs with current values
    prevEvmWalletsRef.current = evmWallets;
    prevSolanaWalletsRef.current = solanaWallets;
    prevUserWalletRef.current = {
      address: user?.wallet?.address,
      chainType: user?.wallet?.chainType,
    };

    const processedWallets: WalletInfo[] = [];

    // Process EVM wallets
    if (isEVMReady && evmWallets.length > 0) {
      evmWallets.forEach((wallet) => {
        if (wallet?.address) {
          processedWallets.push({
            address: wallet.address,
            id: wallet.meta?.id || `evm-${wallet.address.slice(0, 8)}`,
            name: wallet.meta?.name || "EVM Wallet",
            icon:
              wallet.meta?.icon ||
              getWalletIcon(wallet.meta?.name?.toLowerCase() || ""),
            chainType: "ethereum",
          });
        }
      });
    }

    // Process Solana wallets
    if (isSolanaReady && solanaWallets.length > 0) {
      solanaWallets.forEach((wallet) => {
        if (wallet?.address) {
          processedWallets.push({
            address: wallet.address,
            id: wallet.meta?.id || `solana-${wallet.address.slice(0, 8)}`,
            name: wallet.meta?.name || "Solana Wallet",
            icon:
              wallet.meta?.icon ||
              getWalletIcon(wallet.meta?.name?.toLowerCase() || ""),
            chainType: "solana",
          });
        }
      });
    }

    setAllWallets(processedWallets);

    // Set active wallet based on user preference or first available wallet
    if (processedWallets.length > 0) {
      // Try to find the wallet that matches user's primary wallet
      const userPrimaryWallet = processedWallets.find(
        (w) =>
          w.address === user?.wallet?.address &&
          w.chainType === user?.wallet?.chainType
      );

      if (userPrimaryWallet) {
        setActiveWallet(userPrimaryWallet);
      } else {
        // Default to first wallet if no match found
        setActiveWallet(processedWallets[0]);
      }
    } else {
      setActiveWallet(undefined);
    }
  }, [
    ready,
    isEVMReady,
    isSolanaReady,
    evmWallets,
    solanaWallets,
    user?.wallet?.address,
    user?.wallet?.chainType,
  ]);

  // Get the address from the active wallet
  const address = activeWallet?.address || user?.wallet?.address;

  const value = useMemo(
    () => ({
      address,
      loading: !ready || (!isSolanaReady && !isEVMReady),
      isAuthenticated: authenticated,
      identityToken,
      user,
      wallet: activeWallet,
      wallets: allWallets,
      login,
      logout,
    }),
    [
      address,
      ready,
      isSolanaReady,
      isEVMReady,
      authenticated,
      identityToken,
      user,
      activeWallet,
      allWallets,
      login,
      logout,
    ]
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
      `useAuthentication must be used within a AuthenticationProvider`
    );
  }
  return context;
}
