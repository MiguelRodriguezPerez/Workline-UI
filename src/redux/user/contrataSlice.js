import { createSlice } from "@reduxjs/toolkit";

const defState = {
    
        nombre : '', // String
        email : '', // String
        ciudad : '', // String
        telefono : '', // String
        password : '', // String
        rol : '', // Constante que representa el rol
        apiKey : '', // String (nullable)
        listaOfertas : [], // Lista de objetos Oferta 
    
}

export const contrataSlice = createSlice({
    name: 'user',
    initialState: defState,
    reducers: {
        setUser: (state, action) => {
            state.nombre = action.payload.nombre;
            state.email = action.payload.email;
            state.ciudad = action.payload.ciudad;
            state.telefono = action.payload.telefono;
            state.password = action.payload.password;
            state.rol = action.payload.rol;
            state.apiKey = action.payload.apiKey;
            state.listaOfertas = action.payload.listaOfertas
        },
        resetUser: () => defState
    }
})

export const { setUser, resetUser} = contrataSlice.actions;