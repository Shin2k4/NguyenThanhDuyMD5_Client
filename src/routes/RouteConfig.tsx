import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazyFnReal, lazyFn } from "./lazy";

export default function RouteConfig() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="register" element={lazyFn(() => import('@/pages/athen/register/Register'), localStorage.getItem("token") == null ? true : false)} />
                <Route path="login" element={lazyFn(() => import('@/pages/athen/login/Login'), localStorage.getItem("token") == null ? true : false)} />

                <Route path="*" element={lazyFnReal(() => import('@/pages/home/Home'))} >
                    <Route path="*" element={lazyFn(() => import('@/pages/home/pages/HomeContent'))} />
                    <Route path="chat" element={lazyFn(() => import('@/pages/home/components/chat'))} />
                    <Route path="cart" element={lazyFn(() => import('@/pages/home/components/cart/Cart'), localStorage.getItem("token") == null ? false : true)} />
                </Route>
                <Route path="admin" element={lazyFn(() => import('@/pages/home/admin/Admin'))} >
                    <Route path="category" element={lazyFn(() => import('@/pages/home/admin/category/category'))} />
                    <Route path="product" element={lazyFn(() => import('@/pages/home/admin/product/Product'))} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
