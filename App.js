import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import Main from './src/components/Main';
import store from './src/store';
import { setLocalNotification } from './src/utils/helpers';

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const loadFontAsync = async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });

      setIsAppReady(true);
    };

    loadFontAsync();
    setLocalNotification();
  });

  if (!isAppReady)
    return (
      <Container>
        <Spinner color="purple" />
      </Container>
    );

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
