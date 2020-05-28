import {
  getDecks,
  saveDeckTitle,
  addCardToDeck,
  deleteDeck,
} from '../utils/api';
import * as Types from './index';

export const handleGetAllDecks = () => {
  return (dispatch) => {
    return getDecks().then((decks) => {
      dispatch({
        type: Types.GET_ALL_DECKS,
        decks,
      });
    });
  };
};

export const handleAddDecks = (deckTitle) => {
  return (dispatch) => {
    return saveDeckTitle(deckTitle).then((deck) => {
      dispatch({
        type: Types.ADD_DECK,
        deck,
      });
    });
  };
};

export const handleAddCardToDeck = (deckId, card) => {
  return (dispatch) => {
    return addCardToDeck(deckId, card).then(() => {
      dispatch({
        type: Types.ADD_CARD_TO_DECK,
        deckId,
        card,
      });
    });
  };
};

export const handleDeleteDeck = (deckId) => {
  return (dispatch) => {
    return deleteDeck(deckId).then(() => {
      dispatch({
        type: Types.DELETE_DECK,
        deckId,
      });
    });
  };
};

export function resetNewDeckId() {
  return {
    type: Types.RESET_NEW_DECK_ID,
  };
}
