import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { Container } from 'native-base';
import Stack from './StackNav';
import * as Constants from 'expo-constants';
import { connect } from 'react-redux';
import { handleGetAllDecks } from '../actions/decks';

const Main = () => {
  useEffect(() => {
    handleGetAllDecks();
  });

  return (
    <Container>
      <View style={{ height: Constants.statusBarHeight }}>
        <StatusBar />
      </View>
      <Stack />
    </Container>
  );
};

export default connect(null)(Main);
