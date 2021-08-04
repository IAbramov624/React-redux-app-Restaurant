const initialState = {
    menu: [],
    loading: true,
    items: [],
    finalPrice: 0
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "MENU_LOADED":
            return {
                ...state,
                menu: action.payload,
                loading: false
            };
        case "MENU_REQUESTED":
            return {
                ...state,
                menu: state.menu,
                loading: true
            };
        case "ITEM_ADD_TO_CARD":
            const id = action.payload;
            const existItem = state.items.find(item => item.id === id);

            if (!existItem) {

                const item = state.menu.find(item => item.id === id);
                
                const newItem = {
                   ...item,
                    quantity: 1
                };
                console.log(state)

                return {
                    ...state,
                    items: [
                        ...state.items,
                        newItem
                    ],
                    finalPrice: state.finalPrice + item.price
                }
            }

            else {
                const itemIndexAdd = state.items.findIndex(item => item.id === id);

                const newExistItem = {
                    ...existItem,
                    quantity: existItem.quantity + 1
                };

                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemIndexAdd),
                        newExistItem,
                        ...state.items.slice(itemIndexAdd + 1),
                    ],
                    finalPrice: state.finalPrice + existItem.price
                }
            }

        case "ITEM_REMOVE_FROM_CARD":
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            const removeItem = state.items.find(item => item.id === idx);

            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1),                  
                ],
                finalPrice: state.finalPrice - removeItem.price * removeItem.quantity
            }
        default:
            return state;
    }
}

export default reducer;