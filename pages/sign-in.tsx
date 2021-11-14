/**
 * @title : 로그인 페이지
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
  const [status, setStatus] = useState({
    error: false,
    loading: false,
  });
  
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, error: false });
    try {
      const response = await fetchJson('http://localhost:1337/auth/local', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: email, password }),
      });
      setStatus({ loading: false, error: false }); 
      console.log('로그인 테스트', response);
    } catch (err) {
      setStatus({ loading: false, error: true });
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
        {status.error &&
        <p className="text-red-700">
          잘못된 이메일 또는 비밀번호 입니다.
        </p>}
        {status.loading ? 
        <p className="text-blue-700">헛둘 회원님! 로그인중입니다..</p>
        : <Button type="submit">로그인</Button>}
      </form>
    </Page>
 );
}
export default SigInPage;
