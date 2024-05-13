import apis from "@/apis";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Address {
    id: number;
    createdAt: string;
    updatedAt: string;
    provinceId: number;
    provinceName: string;
    districtName: string;
    wartId: number;
    wartName: string;
    title: string;
    des: string;
    userId: number;
}

export interface User {
    id: number;
    email: string;
    userName: string;
    password: string;
    walet: number;
    avatar: string;
    createdAt: string;
    updatedAt: string;
    address: Address[];
}

interface UserState {
    data: User | null;
    loading: boolean;
}

let initialState: UserState = {
    data: null,
    loading: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setData: (state, actions: PayloadAction<User>) => {
            state.data = actions.payload;
        },
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

const fetchData = createAsyncThunk(
    'user/fetchData',
        async () => {
            let res = await apis.user.getToken({
                token: localStorage.getItem("token") || "null"
            }); 
            return res.data.data
        }
    
)

export const userReducer = userSlice.reducer;
export const userAction = {
    ...userSlice.actions,
    fetchData
}