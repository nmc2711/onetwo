import { useMutation, useQueryClient } from 'react-query';
import { fetchJson } from 'lib/api';

const USER_QUERY_KEY = 'user';

const { Kakao }: any = typeof window !== "undefined" &&  window;

export function kakaoLogin() {
  const mutation = useMutation(({ accessToken }: any) => fetchJson('/api/kakaoLogin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ accessToken }),
  }, '정확한 계정 정보를 입력해 주세요.'));

  const queryClient = useQueryClient();
  
  return {
    signInKakao: async () => {
      Kakao.Auth.login({
        success: async (authObj: any) => {
          try {
            const user = await mutation.mutateAsync({ accessToken: authObj.access_token });
            queryClient.setQueryData(USER_QUERY_KEY, user);
            return true;
          } catch (err) {
            return false;
          }
        },
        fail: (err: string) => {
          console.log('kakao auth fail', err);
        },
      })
    },
    signInErrorKakao: mutation.isError,
    signInLoadingKakao: mutation.isLoading,
  }
}