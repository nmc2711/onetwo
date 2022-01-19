import { useMutation, useQueryClient } from 'react-query';
import { fetchJson } from '../lib/api';

const USER_QUERY_KEY = 'user';
const { Kakao }: any = typeof window !== "undefined" &&  window;

export function kakaoLogin() {
  const mutation = useMutation(({ accessToken }: any) => fetchJson('http://ec2-54-180-30-10.ap-northeast-2.compute.amazonaws.com:5510/api/v1/users/kakao-login', {
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
            console.log(authObj);
            
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