import { createSlice } from "@reduxjs/toolkit";

enum ChatType {
    TEXT = "TEXT",
    VIDEO = "VIDEO",
    IMG = "IMG",
    LINK = "LINK"
}

interface Chat {
    id: number;
    content: string | null;
    videoUrl: string | null;
    link: string | null;
    img: string | null;
    type: ChatType;
    userId: number;
    employeeId: number | null;
    createAt: string;
    update: string;
}

interface ChatState {
    data: null | Chat[];
    loading: boolean;
}

let initialState: ChatState = {
    data: null,
    loading: false
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        }
    }
})



export const chatReducer = chatSlice.reducer;
export const chatAction = chatSlice.actions;


