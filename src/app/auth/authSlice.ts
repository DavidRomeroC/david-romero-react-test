import { createSlice } from "@reduxjs/toolkit";
import { IsLoggedInValues } from '../../interfaces/types';

const initialState: IsLoggedInValues = {
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
        }
        
    }
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;