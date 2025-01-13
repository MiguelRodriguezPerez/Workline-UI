import { createSlice } from "@reduxjs/toolkit"

const initialLoggedUserState = {
    nombre : '',
    email : '',
    rol : ''
}

export const loggedUserSlice = createSlice({
    name : 'loggedUser',
    initialState : initialLoggedUserState,
    reducers : {
        startLoggedUserRequest : (state) => {
            state.isLoading = true;
        },
        updateLoggedUser : (state, action) => {
            state.nombre = action.payload.nombre;
            state.email = action.payload.email;
            state.rol = action.payload.rol;
        },
        logoutLoggedUser : (state) => {
            state = initialLoggedUserState;
        }
    }
});

export const { startLoggedUserRequest, updateLoggedUser } = loggedUserSlice.actions;