

export const jobsReducer = (state = {}, action) => {
    switch(action.type){
        case 'update':
            console.log('this triggered');
            return {
                ...state, // Keep the existing state
                ...action.value, // Spread the updated values into the top-level state
            };
        default: throw new Error("AAAAAA");
        
    }
}