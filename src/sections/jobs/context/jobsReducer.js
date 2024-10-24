export const jobsReducer = (state = [], action) => {
    switch(action.type){
        case 'update_page':
            console.log('this triggered');
            return [
                { ...action.payload }, // Reemplaza el primer objeto con el payload
                ...state.slice(1) // Mantiene el resto del estado
            ];
        case 'update_search':
            return [
                ...state.slice(0),
                { ...action.payload },
            ]
        default: throw new Error("AAAAAA");
        
    }
}