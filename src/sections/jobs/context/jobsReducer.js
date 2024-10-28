export const jobsReducer = (state = [], action) => {
    switch(action.type){
        case 'update_page':
            return {
                ...state,
                ...action.payload
            };
        default: throw new Error("AAAAAA");
        
    }
}