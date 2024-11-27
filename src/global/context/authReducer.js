export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'update_user':
            return {
                ...state,
                ...action.payload
            }
    
        case 'reset_user':
            return {
                ...state,
                ...action.payload
            }
        default:
            console.error('BBBBBBBB');
        break;
    }
}