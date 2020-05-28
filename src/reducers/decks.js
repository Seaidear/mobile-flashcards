import * as Types from '../actions/index';

const decks = (state = {}, action) => {
  switch (action.type) {
    case Types.GET_ALL_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case Types.ADD_DECK:
      const { deck } = action;
      return {
        ...state,
        [deck.id]: deck,
      };
    case Types.ADD_CARD_TO_DECK:
      const { deckId, card } = action;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          questions: state[deckId].questions.concat([card]),
        },
      };
    case Types.DELETE_DECK:
      delete state[action.deckId];
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default decks;
