import { dataMuseApi } from "@/lib/fetcher/query/query-suggestion-api";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useState } from "react";
const FIVE_MIN = 1000 * 60 * 5;
const MIN_LENGTH = 1
// Types
type TDataMuseWord= {
  word: string;
  score: number;
  tags?: string[];
}

// Custom hook for word suggestions
export function useWordSuggestions(
  searchTerm: string,
  options?: Omit<
    UseQueryOptions<TDataMuseWord[], Error>,
    "queryKey" | "queryFn"
  > & { maxResults?: number }
) {
  return useQuery({
    queryKey: ["wordSuggestions", searchTerm],
    queryFn: () => dataMuseApi.spellSuggest(searchTerm, options?.maxResults),
    enabled: searchTerm.length >= MIN_LENGTH,
    staleTime: FIVE_MIN,
    ...options,
  });
}

export function useDataMuse() {
  // Suggestions query hook
  const useSuggestions = (text: string) =>
    useQuery({
      queryKey: ["suggestions", text],
      queryFn: () => dataMuseApi.spellSuggest(text),
      enabled: text.length >= MIN_LENGTH,
    });

  // Similar words query hook
  const useSimilarWords = (word: string) =>
    useQuery({
      queryKey: ["similarWords", word],
      queryFn: () => dataMuseApi.ml(word),
      enabled: word.length >= MIN_LENGTH,
    });

  // Rhyming words query hook
  const useRhymingWords = (word: string) =>
    useQuery({
      queryKey: ["rhymes", word],
      queryFn: () => dataMuseApi.rhymesWith(word),
      enabled: word.length >= MIN_LENGTH,
    });

  return {
    useSuggestions,
    useSimilarWords,
    useRhymingWords,
  };
}
