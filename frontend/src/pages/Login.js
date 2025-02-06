import React from 'react';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

function Login() {
  return (
    <Container>
      <h2>Вход в систему</h2>
      <LoginForm />
    </Container>
  );
}

export default Login; 