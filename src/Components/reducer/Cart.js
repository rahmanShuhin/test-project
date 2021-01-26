const initialState = {
  products: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [
        ...state,
        {
          id: action.id,
          quantity: 1,
        },
      ];
    case "REMOVE_FROM_CART":
      return (action) => {
        const arr = state.filter((x) => x.id !== action.id);
        return arr;
      };
    case "ADD_QUANTITY":
      return handleQuantityAdd(state, action);
    case "SUB_QUANTITY":
      return handleQuantityRemove(state, action);
    default:
      return [];
  }
};
export default cartReducer;

const handleQuantityAdd = (state, action) => {
  const arr = state.filter((x) => {
    if (x.id === action.id) {
      x.quantity = x.quantity + 1;
      return x;
    } else {
      return x;
    }
  });
  return arr;
};
const handleQuantityRemove = (state, action) => {
  const arr = state.filter((x) => {
    if (x.id === action.id) {
      x.quantity = x.quantity - 1;
      return x;
    } else {
      return x;
    }
  });
  return arr;
};
