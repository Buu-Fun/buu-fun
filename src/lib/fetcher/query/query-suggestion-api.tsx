import { DataMuseError } from "@/lib/class/data-muse-error";
import { handleResponse } from "@/lib/utils";

const DATA_MUSE_API_ENDPOINT = "https://api.datamuse.com";

// Types for API responses
export type TDataMuseWord = {
  word: string;
  score: number;
  tags?: string[];
};

// Main fetching function
async function getDatamuse(
  endpoint: string,
  params: Record<string, string>
): Promise<TDataMuseWord[]> {
  try {
    const queryString = new URLSearchParams(params).toString();
    const url = `${DATA_MUSE_API_ENDPOINT}${endpoint}?${queryString}`;

    const response = await fetch(url);
    return handleResponse(response);
  } catch (error) {
    if (error instanceof DataMuseError) {
      throw error;
    }
    throw new DataMuseError(`Failed to fetch suggestion data`);
  }
}

// API wrapper with different endpoints and features
export const dataMuseApi = {
  // Means like - similar meaning words
  ml: async (
    search: string,
    maxResults: number = 10
  ): Promise<TDataMuseWord[]> => {
    return getDatamuse("/words", { ml: search, max: maxResults.toString() });
  },

  // Spell suggestions and completions
  spellSuggest: async (
    search: string,
    maxResults: number = 10
  ): Promise<TDataMuseWord[]> => {
    return getDatamuse("/sug", { s: search, max: maxResults.toString() });
  },

  // Words that start with a prefix
  prefixHints: async (
    prefix: string,
    maxResults: number = 10
  ): Promise<TDataMuseWord[]> => {
    return getDatamuse("/words", {
      sp: `${prefix}*`,
      max: maxResults.toString(),
    });
  },

  // Words that sound like
  soundsLike: async (
    word: string,
    maxResults: number = 10
  ): Promise<TDataMuseWord[]> => {
    return getDatamuse("/words", { sl: word, max: maxResults.toString() });
  },

  // Words that rhyme with
  rhymesWith: async (
    word: string,
    maxResults: number = 10
  ): Promise<TDataMuseWord[]> => {
    return getDatamuse("/words", { rel_rhy: word, max: maxResults.toString() });
  },
};

type AutocompleteOptions = {
  maxResults?: number;
  minLength?: number;
  debounceMs?: number;
};
// test this before using. timeOut would be cleared if the component re-renders.
export function createAutocomplete(options: AutocompleteOptions = {}) {
  const { maxResults = 10, minLength = 2, debounceMs = 300 } = options;

  let timeoutId: NodeJS.Timeout;

  return {
    getSuggestions: async (text: string): Promise<TDataMuseWord[]> => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      if (text.length < minLength) {
        return [];
      }

      return new Promise((resolve) => {
        timeoutId = setTimeout(async () => {
          try {
            const results = await dataMuseApi.spellSuggest(text, maxResults);
            resolve(results);
          } catch (error) {
            console.error("Autocomplete error:", error);
            resolve([]);
          }
        }, debounceMs);
      });
    },
  };
}
