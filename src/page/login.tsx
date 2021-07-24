import styled from 'styled-components';
import Login from '../components/login/login';
import SignUp from '../components/login/signUp';

import React from 'react';

export default function LoginPage({ register = true }) {
  return (
    <div>
      <FormWrap>{register ? <SignUp /> : <Login />}</FormWrap>
    </div>
  );
}

const FormWrap = styled.div``;
