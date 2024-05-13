import apis from "@/apis";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Category {
    id: number;
    name: string;
    productId: number;
}

interface CategoryState {
    data: Category[] | null;
    loading: boolean;
}


let initialState: CategoryState = {
    data: null,
    loading: false,
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            state.data.push(action.payload);
        },
        deleteCategory: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload);
        },
        updateCategory: (state, action) => {
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
    'categoy/fetchData',
    async () => {
        let res = await apis.category.findAll()
        return res.data.data;
    }
)

export const categoryReducer = categorySlice.reducer;
export const categoryAction = {
    ...categorySlice.actions,
    fetchData
}

