const API_URL = "https://api.dicebear.com";
const API_VERSION = "/9.x";
const STYLES = "/dylan";
const FORMAT = "/png";

export const profilePicture = (address: string) => {
  return `${API_URL}${API_VERSION}${STYLES}${FORMAT}?seed=${encodeURIComponent(address)}`;
};
