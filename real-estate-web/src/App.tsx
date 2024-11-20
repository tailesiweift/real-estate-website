// src/App.tsx
import React from 'react';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <h1>Hello, Vite + React + Styled Components!</h1>
      </Container>
    </>
  );
};

export default App;