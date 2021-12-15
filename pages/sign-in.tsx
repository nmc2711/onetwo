/**
 * @title : 로그인 페이지
 */
import { useRouter } from 'next/router';
import React, { FormEventHandler, useState } from 'react';
import { useSignIn } from '../hooks/user';

import Button from '../components/common/Button';
import Field from '../components/common/Field';
import Input from '../components/common/Input';
import Page from '../components/common/Page';

function SigInPage() {
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, signInLoading, signInError } = useSignIn();
  
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const valid = await signIn(email, password);
    if (valid) {
      router.push('/');
    }
  };
  return (
    <Page title="헛둘 로그인">
      <form onSubmit={handleSubmit}>
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
    </Page>
 );
}
export default SigInPage;
