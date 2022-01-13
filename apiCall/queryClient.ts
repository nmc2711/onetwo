/**
 * @title : react-query 공통 apiCall custom hooks
 */

import { createStandaloneToast } from '@chakra-ui/react';
import { QueryClient } from 'react-query';

const toast = createStandaloneToast();

function queryErrorHandler(error: unknown): void {
  const title =
    error instanceof Error ? error.message : '죄송합니다. 일시적인 서버 에러입니다.';
  
  toast.closeAll();
  toast({ title, status: 'error', variant: 'subtle', isClosable: true });
}

export const defaultQueryClienOptions = {
  queris: {
    onError: queryErrorHandler,
    staleTime: 30_000,
    cacheTime: Infinity, // 기본 캐시 시간은 5분. staleTime이 cacheTime을 초과하는 것은 의미가 없다.
    // refetchOnMount: false,
    // refetchWindowFocus: false,
    // refetchOnReconnect: false,
  },
  mutations: {
    onError: queryErrorHandler,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryClienOptions,
});