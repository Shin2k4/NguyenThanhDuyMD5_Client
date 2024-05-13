import apis from "@/apis";
import { productApi } from "@/apis/module/product";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface bill {
    id: number,
    productId: string,
    userId: number,
    status: string,
    quantity: number,
    createdAt: string,
    updatedAt: string,
    Total: number,
}

interface billState {
    data: bill[] | null;
    loading: boolean;
}

let initialState: billState = {
    data: null,
    loading: false,
}

export const fetchBill = createAsyncThunk(
    'bill/fetchBill',
    async () => {
        
        try {
            let user = await apis.user.getToken({
                token: localStorage.getItem("token") || "null"
            });
            let res = await apis.bill.getBill(user.data.data.id as number)       
            return res.data.data
        } catch (err) {
        }
    }
)

const billSlice = createSlice({
    name: "bill",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
        create: (state, action) => {
            state.data?.push(action.payload)
        },
    },
    extraReducers: (bill) => {
        bill.addCase(fetchBill.pending, (state) => {
            state.loading = true;
        })
        bill.addCase(fetchBill.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
        bill.addCase(fetchBill.rejected, (state) => {
            state.loading = false;
        })
    }

})

export const billReducer = billSlice.reducer;
export const billAction = {
    ...billSlice.actions,
    fetchBill
}