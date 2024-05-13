import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userAction, userReducer } from "./slices/user.slice";
import { chatAction, chatReducer } from "./slices/chat.slice";
import { productAction, productReducer } from "./slices/product.slice";
import { categoryAction, categoryReducer } from "./slices/category.slice";
import { cartAction, cartReducer } from "./slices/cart.slice";
import { billAction, billReducer } from "./slices/bill.slice";


let RootReducer = combineReducers({
    userStore: userReducer,
    chatStore: chatReducer,
    productStore: productReducer,
    categoryStore: categoryReducer,
    cartStore: cartReducer,
    billStore: billReducer,
})

export type StoreType = ReturnType<typeof RootReducer>

export const store = configureStore({
    reducer: RootReducer
})

store.dispatch(userAction.fetchData())
store.dispatch(productAction.fetchData())
store.dispatch(categoryAction.fetchData())
store.dispatch(cartAction.fetchCart())
store.dispatch(billAction.fetchBill())



export const useAppDispatch = {
    dispatchProduct: () => {
        return store.dispatch(productAction.fetchData())
    },
    dispatchCategory: () => {
        return store.dispatch(categoryAction.fetchData())
    },
    dispatchBill: () => {
        return store.dispatch(billAction.fetchBill())
    }
};

