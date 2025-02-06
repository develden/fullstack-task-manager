import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #3498db;
  padding: 20px;
  color: white;
  text-align: center;
`;

function Header({ title }) {
  return (
    <HeaderContainer>
      <h1>{title}</h1>
    </HeaderContainer>
  );
}

export default Header; 