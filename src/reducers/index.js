const initialState = {};

export default function cartReducer(state = initialState, action) {
  const stateCopy = { ...state };

  switch (action.type) {
    case "ADD_ITEM": {
      const quantity = state[action.item.id]
        ? state[action.item.id].quantity + 1
        : 1;

      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: quantity,
        },
      };
    }

    case "REMOVE_ITEM": {
      delete stateCopy[action.item.id];

      return {
        ...stateCopy,
      };
    }

    case "UPDATE_QUANTITY": {
      return {
        ...state,
        [action.item.id]: {
          ...state[action.item.id],
          ...action.item,
        },
      };
    }

    default:
      return state;
  }
}

export const getStoreItems = (state) => Object.values(state);
