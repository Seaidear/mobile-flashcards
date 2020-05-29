import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NewDeck from './NewDeck';

const Stack = createStackNavigator();

class DeckList extends React.Component {
  render() {
    const { navigate, decks } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {Object.values(decks).map((deck) => (
          <Cover
            key={deck.title}
            {...deck}
            onPress={() => navigate('Deck', { deckId: deck.title })}
          />
        ))}
        <Stack.Navigator>
          <Stack.Screen name="Deck" component={NewDeck} />
        </Stack.Navigator>
      </ScrollView>
    );
  }
}

const Cover = (deck) => {
  const {
    title,
    questions: { length },
    onPress,
  } = deck;
  return (
    <View style={styles.link}>
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.counter}>
          {length != 1 ? length + ' cards' : '1 card'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeckList;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  link: {
    height: 80,
    width: 280,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#f5f5f5',
    borderColor: '#694fad',
    textAlign: 'center',
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  counter: {
    flex: 1,
  },
});
