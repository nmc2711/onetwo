import { useQuery } from "react-query";
import { fetchJson } from "../lib/api";
import { useMutation, useQueryClient } from 'react-query';

const USER_QUERY_KEY = 'user';

export function useSignIn() {
  const queryClient = useQueryClient();

  const mutation = useMutation(({ email, password }: any) => fetchJson('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  }, '정확한 계정 정보를 입력해 주세요.'));

  return {
    signIn: async (email: string, password: any) => {
      try {
        const user = await mutation.mutateAsync({ email, password });
        queryClient.setQueryData(USER_QUERY_KEY, user);
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
  const query = useQuery(USER_QUERY_KEY, async () => {
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

export function useSignOut() {
  const queryClient = useQueryClient();

  const mutation = useMutation(() => fetchJson('/api/logout'));
  return async() => {
    await mutation.mutateAsync();
    queryClient.setQueryData(USER_QUERY_KEY, undefined);
  }
}
