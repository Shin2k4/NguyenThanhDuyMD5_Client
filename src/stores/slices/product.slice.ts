import apis from "@/apis";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    quantity: number;
    createdAt: string;
    updatedAt: string;
    images: string;
}
interface ProductState {
    data: Product[] | null;
    loading: boolean;
}
let initialState: ProductState = {
    data: null,
    loading: false,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.data.push(action.payload);
        },
        deleteProduct: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload);
        },
        updateProduct: (state, action) => {
            if (state.data) {
                state.data = state.data.map(item =>
                    item.id === action.payload.id ? action.payload : item
                )
            }
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchData.fulfilled, (state, actions) => {
            state.data = actions.payload;
            state.loading = false;
        })
        builder.addCase(fetchData.rejected, (state) => {
            state.loading = false;
        })
    }
})

export const fetchData = createAsyncThunk(
    'product/fetchData',
    async () => {
        let res = await apis.product.findAll()
        return res.data.data;
    }
)

export const productReducer = productSlice.reducer;
export const productAction = {
    ...productSlice.actions,
    fetchData
}