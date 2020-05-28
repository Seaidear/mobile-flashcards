import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Main from './src/components/Main';
import store from './src/store';
import { setLocalNotification } from './src/utils/helpers';

const App = () => {
  useEffect(() => {
    setLocalNotification();
  });

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
