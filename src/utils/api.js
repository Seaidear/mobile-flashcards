const LOCALSTOARGE_KEY = 'cards_data';

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

export const getDecks = () => {};

export const getDeck = (id) => {};

export const saveDeckTitle = (title) => {};

export const addCardToDeck = (title, card) => {};
