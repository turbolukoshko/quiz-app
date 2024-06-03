import { useEffect, useRef, useState } from "react";

type Options = {
  headers?: HeadersInit;
  method?: string;
};

export const useQuery = <T>(url: string, options?: Options) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    try {
      const fetchOptions: RequestInit = {
        method: options?.method || "GET",
        headers: options?.headers || {
          "Content-Type": "application/json",
        },
        signal: abortController.signal,
      };
      const response = await fetch(url, fetchOptions);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const responseJSON = await response.json();
      setData(responseJSON);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error("An unknown error occured"));
      }
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};
