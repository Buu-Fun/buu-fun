import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const isPlural = (num: number) => Math.abs(num) !== 1;
const simplePlural = (word: string) => `${word}s`;

export function pluralize(
  num: number,
  word: string,
  plural: (value: string) => string = simplePlural,
) {
  return isPlural(num) ? plural(word) : word;
}
