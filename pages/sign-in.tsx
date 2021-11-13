/**
 * @title : 회원가입 페이지
 */
import { useRouter } from 'next/router';
import React, { FormEventHandler, useState } from 'react';

import Button from '../components/common/Button';
import Field from '../components/common/Field';
import Input from '../components/common/Input';
import Page from '../components/common/Page';
import { fetchJson } from '../lib/api';

function SigInPage() {
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const response = await fetchJson('http://localhost:1337/auth/local', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier: email, password }),
    });
      console.log('로그인 테스트', response);
  };
  return (
    <Page title="헛둘 회원가입">
      <form onSubmit={handleSubmit}>
        <Field label="이메일">
          <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </Field>
        <Field label="비밀번호">
          <Input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </Field>
        <Button type="submit">
          회원가입
        </Button>   
      </form>
    </Page>
 );
}
export default SigInPage;
