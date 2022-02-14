/**
 * @title : Strap연동 기존의 레거시 로그인 페이지
 * @purpose : 기본 로그인 연동에 관하여 참고할 수도 있어 남겨둠
 */
import { useRouter } from 'next/router';
import React, { FormEventHandler, useState, useLayoutEffect } from 'react';
import { kakaoLogin } from 'apiCall/feature/login';

import Button from 'components/Button';
import Field from 'components/Field';
import Input from 'components/Input';
import Page from 'components/Page';

function SigInPage() {
  // const router = useRouter();
  
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const { signIn, signInLoading, signInError } = useSignIn();
  // const { signInKakao  } = kakaoLogin();

  // const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
  //   event.preventDefault();
  //   const valid = await signIn(email, password);
  //   if (valid) {
  //     router.push('/');
  //   }
  // };

  // const handleSubmitKako = async () => {
  //   await signInKakao();
  // };

  return (
    <Page title="헛둘 로그인">
      {/* <form onSubmit={handleSubmit}>
        <Field label="이메일">
          <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </Field>
        <Field label="비밀번호">
          <Input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </Field>
        {signInError &&
        <p className="text-red-700">
          잘못된 이메일 또는 비밀번호 입니다.
        </p>}
        {signInLoading ? 
        <p className="text-blue-700">헛둘 회원님! 로그인중입니다..</p>
        : <Button type="submit">로그인</Button>}
      </form>
       */}
      {/* <button onClick={handleSubmitKako}>카카오 로그인</button> */}
    </Page>
 );
}
export default SigInPage;
