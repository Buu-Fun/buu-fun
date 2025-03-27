import { isLocalMode } from "@/lib/utils";

export const MAXIMUM_REQUEST_LIMIT = 4;
export const MAXIMUM_RETRY_ALLOWED = 4;
export const SHARE_LINK_CONFIG = isLocalMode()
  ? `http://localhost:3000/app/boards/share`
  : `https://buu.fun/app/boards/share`;
