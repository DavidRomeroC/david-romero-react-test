import { login, logout } from "./authSlice"
import { AppDispatch } from '../store';

export const loginAuth = () => {
    return async(dispatch: AppDispatch) => {
        dispatch(login())
    }
}

export const logoutAuth = () => {
    return async(dispatch: AppDispatch) => {
        dispatch(logout())
    }
}