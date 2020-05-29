import { AsyncStorage } from 'react-native';
import { StorageKeys } from './helpers';

const initialData = {
  React: {
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
  JavaScript: {
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

export const getDecks = () =>
  AsyncStorage.getItem(StorageKeys.Decks).then((result) => {
    if (!result) {
      return AsyncStorage.setItem(
        StorageKeys.Decks,
        JSON.stringify(initialData),
      ).then(() => initialData);
    }
    return JSON.parse(result);
  });

export const getDeck = (title) =>
  AsyncStorage.getItem(StorageKeys.Decks)
    .then(JSON.parse)
    .then((data) => data[title]);

export const saveDeckTitle = (title) =>
  AsyncStorage.mergeItem(
    StorageKeys.Decks,
    JSON.stringify({
      [title]: {
        title,
        questions: [],
      },
    }),
  );

export const addCardToDeck = ({ title, card }) =>
  AsyncStorage.mergeItem(
    StorageKeys.Decks,
    JSON.stringify({
      [title]: {
        title,
        questions: [card],
      },
    }),
  );

export const removeDeck = (title) =>
  getDecks().then(({ [title]: toRemove, ...rest }) => {
    AsyncStorage.removeItem(StorageKeys.Decks).then(() =>
      AsyncStorage.setItem(StorageKeys.Decks, JSON.stringify(rest)),
    );
  });
