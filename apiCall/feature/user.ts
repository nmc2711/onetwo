import { useQuery } from 'react-query';

import { fetchJson } from '../../lib/api';

const USER_QUERY_KEY = 'user';

export function useUser() {
  const query = useQuery(USER_QUERY_KEY, async() => {
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