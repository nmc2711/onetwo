import { AxiosResponse } from 'axios';
import { useQuery, useQueryClient } from 'react-query';

import { fetchJson } from '../../lib/api'
import type { User } from '../../@types';

import { axiosInstance } from '../axios';

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

// export function useUser() {
//     const query = useQuery(USER_QUERY_KEY, async () => {
//       try {
//         return await fetchJson('/api/user');
//       } catch (error) {
//         return undefined;
//       }
//         }, {
//         cacheTime: Infinity,
//         staleTime: 30_000,
//       });
//     return query.data;
//   }