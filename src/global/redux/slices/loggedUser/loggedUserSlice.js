import { createSlice } from "@reduxjs/toolkit"

const initialLoggedUserState = {
    nombre: '',
    email: '',
    rol: ''
}

export const loggedUserSlice = createSlice({
    name: 'loggedUser',
    initialState: initialLoggedUserState,
    reducers: {
        updateLoggedUser: (state, action) => {
            state.nombre = action.payload.nombre;
            state.email = action.payload.email;
            state.rol = action.payload.rol;
        },
        failedLoginAttempt: (state) => {
            state.loginSucess = false;
        },
        resetLoggedUser: (state) => {
            return { ...initialLoggedUserState };
        }
    }
});

export const { startLoggedUserRequest, updateLoggedUser, resetLoggedUser } = loggedUserSlice.actions;