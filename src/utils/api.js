import { AsyncStorage } from 'react-native';
import { generateUUID } from './helpers';

const CARDS_DATA_ASYNCSTORAGE_KEY = 'cards_data';

const initialData = {
  sxbjgrwdbhf58lxznh9q79: {
    id: 'sxbjgrwdbhf58lxznh9q79',
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  '724mgp7hm68vzvg2amz1hq': {
    id: '724mgp7hm68vzvg2amz1hq',
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
};

const getInitialData = () => initialData;

export const getDecks = async () => {
  try {
    const results = await AsyncStorage.getItem(CARDS_DATA_ASYNCSTORAGE_KEY);
    if (results) {
      const data = JSON.parse(results);
      return data;
    } else {
      await AsyncStorage.setItem(
        CARDS_DATA_ASYNCSTORAGE_KEY,
        JSON.stringify(getInitialData()),
      );
      return getInitialData();
    }
  } catch (error) {
    await AsyncStorage.setItem(
      CARDS_DATA_ASYNCSTORAGE_KEY,
      JSON.stringify(getInitialData()),
    );
    return getInitialData();
  }
};

// export const getDeck = async (id) => {};

export const deleteDeck = async (deckId) => {
  const results = await AsyncStorage.getItem(CARDS_DATA_ASYNCSTORAGE_KEY);
  if (results) {
    const data = JSON.parse(results);
    delete data[deckId];

    await AsyncStorage.setItem(
      CARDS_DATA_ASYNCSTORAGE_KEY,
      JSON.stringify(data),
    );
    return data;
  }
  return {};
};

export const saveDeckTitle = async (title) => {
  const id = generateUUID();
  const deck = {
    id: id,
    title: title,
    questions: [],
  };

  await AsyncStorage.mergeItem(
    CARDS_DATA_ASYNCSTORAGE_KEY,
    JSON.stringify({
      [id]: deck,
    }),
  );
  return deck;
};

export const addCardToDeck = async (deckId, card) => {
  const results = await AsyncStorage.getItem(CARDS_DATA_ASYNCSTORAGE_KEY);
  if (results) {
    const data = JSON.parse(results);
    const deck = data[deckId];
    deck.questions = deck.questions.concat([card]);
    await AsyncStorage.mergeItem(
      CARDS_DATA_ASYNCSTORAGE_KEY,
      JSON.stringify({
        [deckId]: deck,
      }),
    );
    return card;
  }
};
