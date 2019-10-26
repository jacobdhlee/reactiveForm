import React from 'react';
import * as Styled from './styles';

import ControlForm from './pages/controlForm/ControlForm';

function App() {
  return (
    <Styled.Wrapper>
      <Styled.SubWrapper>
        <ControlForm />
      </Styled.SubWrapper>
      <Styled.SubWrapper>Show the real form here</Styled.SubWrapper>
    </Styled.Wrapper>
  );
}

export default App;
