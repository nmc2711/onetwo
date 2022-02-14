import { useMutation, useQuery, useQueryClient } from 'react-query';

import { fetchJson } from 'lib/api';

import { User } from 'types/user';

const USER_QUERY_KEY = 'user';

export function useSignOut(): () => Promise<void> {
  const queryClient = useQueryClient();

  const mutation = useMutation(() => fetchJson('/api/logout'));

  return async () => {
    await mutation.mutateAsync();
    queryClient.setQueryData(USER_QUERY_KEY, undefined);
  };
}

export function useUser(): User | undefined {
  const query = useQuery<User>(USER_QUERY_KEY, async () => {
    try {
      return await fetchJson('/api/user');
    } catch (err) {
      return undefined;
    }
  }, {
    cacheTime: Infinity,
    staleTime: 30_000,
  });
  return query.data;
}