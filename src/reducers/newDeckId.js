import * as Types from '../actions/index';

const newDeckId = (state = {}, action) => {
  switch (action.type) {
    case Types.ADD_DECK:
      const { deck } = action;
      return {
        ...state,
        newDeckId: deck.id,
      };
    case Types.RESET_NEW_DECK_ID:
      return {
        ...state,
        newDeckId: null,
      };
    default:
      return state;
  }
};

export default newDeckId;
