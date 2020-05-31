import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home';
import Deck from './src/components/Deck';
import NewQuestion from './src/components/NewQuestion';
import {
  getDecks,
  saveDeckTitle,
  removeDeck,
  addCardToDeck,
} from './src/utils/api';
import Quiz from './src/components/Quiz';
import { setLocalNotification } from './src/utils/helpers';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: '#694fad',
    text: '#f5f5f5',
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [decks, setDecks] = useState({});

  useEffect(() => {
    setLocalNotification();
    getDecks().then((results) => setDecks(results));
  }, []);

  const addQuestion = (deckId, question) => {
    addCardToDeck({
      title: deckId,
      card: question,
    }).then(() => {
      setDecks((prevDecks) => ({
        ...prevDecks,
        [deckId]: {
          ...prevDecks[deckId],
          questions: [...prevDecks[deckId].questions, question],
        },
      }));
    });
  };

  const deleteDeck = (deckId) => {
    removeDeck(deckId).then(() => {
      setDecks(({ [deckId]: toRemove, ...rest }) => rest);
    });
  };

  const addDeck = (deckId) => {
    saveDeckTitle(deckId).then(() =>
      setDecks((prevDecks) => ({
        ...prevDecks,
        [deckId]: {
          title: deckId,
          questions: [],
        },
      })),
    );
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {() => <Home decks={decks} addDeck={addDeck} />}
        </Stack.Screen>
        <Stack.Screen name="Deck">
          {({ route: { params }, navigation }) => (
            <Deck
              navigate={navigation.navigate}
              deleteDeck={() => {
                deleteDeck(params.deckId);
                navigation.navigate('Home');
              }}
              {...decks[params.deckId]}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="New Question">
          {({ route: { params }, navigation }) => (
            <NewQuestion
              navigate={navigation.navigate}
              deckId={params.deckId}
              handleSubmit={(question) => addQuestion(params.deckId, question)}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Quiz">
          {({
            route: {
              params: { deckId },
            },
            navigation,
          }) => (
            <Quiz
              questions={decks[deckId].questions}
              goBack={() => navigation.navigate('Deck', { deckId })}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
