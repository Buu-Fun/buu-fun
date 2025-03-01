import { NetworkNames } from "./addresses";

const NEXT_PUBLIC_CHAINS = process.env.NEXT_PUBLIC_CHAINS || "local,sepolia";
const NEXT_PUBLIC_ASSET_METADATA_NAME =
  process.env.NEXT_PUBLIC_ASSET_METADATA_NAME || "LEONARDO by Virtuals";
const NEXT_PUBLIC_ASSET_METADATA_SYMBOL =
  process.env.NEXT_PUBLIC_ASSET_METADATA_SYMBOL || "LEONAI";
const NEXT_PUBLIC_ASSET_METADATA_DECIMALS =
  process.env.NEXT_PUBLIC_ASSET_METADATA_DECIMALS || "18";
const NEXT_PUBLIC_PONDER_URL =
  process.env.NEXT_PUBLIC_PONDER_URL || "http://localhost:42069";
const NEXT_PUBLIC_SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:4000";
const NEXT_PUBLIC_TELEGRAM_AUTH_BOT_HANDLE = "leonardo_cash_auth_bot";

const NEXT_PUBLIC_ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
const NEXT_PUBLIC_WALLETCONNECT_API_KEY =
  process.env.NEXT_PUBLIC_WALLETCONNECT_API_KEY;
const NEXT_PUBLIC_BIRDEYE_API_KEY = process.env.NEXT_PUBLIC_BIRDEYE_API_KEY;
const NEXT_PUBLIC_PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

const CHAINS = NEXT_PUBLIC_CHAINS.split(",") as NetworkNames[];
const ASSET_METADATA_NAME = NEXT_PUBLIC_ASSET_METADATA_NAME;
const ASSET_METADATA_SYMBOL = NEXT_PUBLIC_ASSET_METADATA_SYMBOL;
const ASSET_METADATA_DECIMALS = NEXT_PUBLIC_ASSET_METADATA_DECIMALS;
const PONDER_URL = NEXT_PUBLIC_PONDER_URL;
const SERVER_URL = NEXT_PUBLIC_SERVER_URL;
const ALCHEMY_API_KEY = NEXT_PUBLIC_ALCHEMY_API_KEY;
const WALLETCONNECT_API_KEY = NEXT_PUBLIC_WALLETCONNECT_API_KEY;
const BIRDEYE_API_KEY = NEXT_PUBLIC_BIRDEYE_API_KEY;
const TELEGRAM_AUTH_BOT_HANDLE = NEXT_PUBLIC_TELEGRAM_AUTH_BOT_HANDLE;
const PRIVY_APP_ID = NEXT_PUBLIC_PRIVY_APP_ID;

export {
  CHAINS,
  ASSET_METADATA_NAME,
  ASSET_METADATA_SYMBOL,
  ASSET_METADATA_DECIMALS,
  PONDER_URL,
  SERVER_URL,
  ALCHEMY_API_KEY,
  WALLETCONNECT_API_KEY,
  BIRDEYE_API_KEY,
  TELEGRAM_AUTH_BOT_HANDLE,
  PRIVY_APP_ID,
};
