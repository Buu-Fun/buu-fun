import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { DataMuseError } from "./class/data-muse-error";
import { TDataMuseWord } from "./fetcher/query/query-suggestion-api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const isPlural = (num: number) => Math.abs(num) !== 1;
const simplePlural = (word: string) => `${word}s`;

export function pluralize(
  num: number,
  word: string,
  plural: (value: string) => string = simplePlural
) {
  return isPlural(num) ? plural(word) : word;
}

export async function handleResponse(
  response: Response
): Promise<TDataMuseWord[]> {
  if (!response.ok) {
    // add other generic messages later for api backends.
    throw new DataMuseError(
      `API request failed: ${response.statusText}`,
      response.status
    );
  }
  return response.json();
}
