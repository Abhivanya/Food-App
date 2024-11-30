export const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const count = Number(state.count) + 1;
    const itemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedItems;
    const updatedAmount =
      Number(state.totalAmount) +
      Number(action.item.price) * Number(action.item.amount);
    if (itemIndex < 0) {
      updatedItems = [...state.items, action.item];
    } else {
      updatedItems = state.items.map((item, index) =>
        index === itemIndex
          ? {
              ...item,
              amount: Number(item.amount) + Number(action.item.amount),
            }
          : item
      );
    }
    return {
      items: updatedItems,
      count: count,
      totalAmount: updatedAmount,
    };
  }
  if (action.type === "REMOVE") {
    const getIndex = state.items.findIndex((item) => item.id === action.id);
    const newCount = Number(state.count) - 1;

    const existingItem = state.items[getIndex];
    const updatedAmount =
      Number(state.totalAmount) - Number(existingItem.price);
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[getIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      count: newCount,
      totalAmount: updatedAmount,
    };
  }
  return state;
};
