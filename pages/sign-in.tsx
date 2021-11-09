/**
 * @title : 회원가입 페이지
 */
import React from 'react';
import Button from '../components/common/Button';
import Field from '../components/common/Field';
import Input from '../components/common/Input';
import Page from '../components/common/Page';

function SigInPage() {
  return (
    <Page title="헛둘 회원가입">
      <form>
        <Field label="이메일">
          <Input type="email" />
        </Field>
        <Field label="비밀번호">
          <Input type="password" />
        </Field>
        <Button type="submit">
          회원가입
        </Button>   
      </form>
    </Page>
 );
}
export default SigInPage;
