const API_URL = "https://api.dicebear.com";
const API_VERSION = "/9.x";
const STYLES = "/dylan";
const FORMAT = "/png";

// https://api.dicebear.com/9.x/dylan/svg?SEED=Andrea

export const profilePicture = (address: string) => {
  return `${API_URL}${API_VERSION}${STYLES}${FORMAT}?seed=${encodeURIComponent(address)}&backgroundColor=${"29e051,619eff,b6e3f4,c0aede,d1d4f9,ffdfbf,ffd5dc,ffa6e6&backgroundType=gradientLinear&mood=happy,hopeful,neutral,superHappy"}`;
};
