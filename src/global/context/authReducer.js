export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'update_user':
            return {
                ...action.payload
            }
    
        case 'reset_user':
            return {
                ...action.payload
            }
        default:
            console.error('BBBBBBBB');
        break;
    }
}