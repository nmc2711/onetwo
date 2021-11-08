/**
 * @title : 회원가입 페이지
 */
import React from 'react';
import Input from '../components/common/Input';
import Page from '../components/common/Page';

function SigInPage() {
  return (
    <Page title="헛둘 회원가입">
      <form>
        <label>
          이메일
          <Input type="email" />
        </label>
        <label>
          비밀번호
          <Input type="password" />
        </label>        
      </form>
    </Page>
 );
}
export default SigInPage;
