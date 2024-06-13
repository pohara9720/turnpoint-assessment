import { useState } from "react";
import { request } from "../api";
import { HttpMethod } from "src/types";

type UseApiReturnType<T> = {
  loading: boolean;
  error: Error | null;
  makeRequest: (
    endpoint: string,
    method?: HttpMethod,
    body?: any
  ) => Promise<T | null>;
};

export function useApi<T>(): UseApiReturnType<T> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const makeRequest = async (
    endpoint: string,
    method: HttpMethod = HttpMethod.GET,
    body?: any
  ): Promise<T | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await request<T>(endpoint, method, body);
      return response;
    } catch (err) {
      setError(err as Error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, makeRequest };
}
