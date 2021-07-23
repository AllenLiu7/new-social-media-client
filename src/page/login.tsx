import styled from 'styled-components';
import LoginSignUpForm from '../components/login/login';

import React from 'react';

export default function Login() {
  return (
    <div>
      <FormWrap>
        <LoginSignUpForm />
      </FormWrap>
    </div>
  );
}

const FormWrap = styled.div``;
