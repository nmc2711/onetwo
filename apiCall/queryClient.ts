import { createStandaloneToast } from '@chakra-ui/react';
import { QueryClient } from 'react-query';

const toast = createStandaloneToast();

function queryErrorHandler(error: unknown): void {
  const title =
    error instanceof Error ? error.message : '죄송합니다. 일시적인 서버 에러입니다.';
  
  toast.closeAll();
  toast({ title, status: 'error', variant: 'subtle', isClosable: true });
}

