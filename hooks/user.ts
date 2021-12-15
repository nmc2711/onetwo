import { useQuery } from "react-query";
import { fetchJson } from "../lib/api";
import { useMutation, useQueryClient } from 'react-query';

export function useSignIn() {
  const queryClient = useQueryClient();

  const mutation = useMutation(({ email, password }: any) => fetchJson('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  }));

  return {
    signIn: async (email: string, password: any) => {
      try {
        const user = await mutation.mutateAsync({ email, password });
        queryClient.setQueryData('user', user);
        return true;
      } catch (err) {
        return false;
      }
    },
    signInError: mutation.isError,
    signInLoading: mutation.isLoading,
  }
}

export function useUser() {
  const query = useQuery('user', async () => {
    try {
      return await fetchJson('/api/user');
    } catch (error) {
      return undefined;
    }
      }, {
      cacheTime: Infinity,
      staleTime: 30_000,
    });
  return query.data;
}
