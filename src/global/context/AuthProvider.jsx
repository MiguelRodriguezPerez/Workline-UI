import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const init = () => { return {} };

export const AuthProvider = ({ children }) => {

    const [userState, dispatch] = useReducer(authReducer, {}, init)

    const updateUser = (user = {}) => {
        const action = {
            type: 'update_user',
            payload: user
        }
        dispatch(action);
    };

    const resetUser = () => {
        const action = {
            type: 'reset_user',
            payload: {}
        }
        dispatch(action);
    };

    return(
        <AuthContext.Provider value={{ user: userState, updateUser, resetUser}}>
            {children}
        </AuthContext.Provider>
    )
}