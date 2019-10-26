import React from 'react';
import * as Styled from './styles';

import ControlForm from './controlForm/ControlForm';
import ReadForm from './readForm/ReadForm';

function App() {
  return (
    <Styled.Wrapper>
      <Styled.SubWrapper>
        <ControlForm />
      </Styled.SubWrapper>
      <Styled.SubWrapper>
        <ReadForm />
      </Styled.SubWrapper>
    </Styled.Wrapper>
  );
}

export default App;
