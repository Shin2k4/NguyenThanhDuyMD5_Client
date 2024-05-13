import { billAPI } from "./module/bill.api";
import { cartAPI } from "./module/cart.api";
import { categoryAPI } from "./module/category";
import { productApi } from "./module/product";
import { userApi } from "./module/user.api";

export default {
    user: userApi,
    category: categoryAPI,
    product: productApi,
    cart: cartAPI,
    bill: billAPI

}