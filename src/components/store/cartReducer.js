export const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const count = state.count + 1;
    const updatedAmount = state.totalAmount + action.item.price;

    const updatedItems = { ...state, count: count, amount: updatedAmount };
    return;
  }
  return state;
};
