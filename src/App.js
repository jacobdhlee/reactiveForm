import React from 'react';
import { Provider } from 'react-redux';
import store from './stores';
import Page from './pages/index';
function App() {
  return (
    <Provider store={store()}>
      <div>
        <Page />
      </div>
    </Provider>
  );
}

export default App;
