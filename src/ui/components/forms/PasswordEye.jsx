import { useState } from "react"

import '../../styles/forms/passwordEye.css'

export const PasswordEye = ({ input }) => {

    const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);

    const clickEvent = (event) => {
        event.preventDefault();

        if(isPasswordVisible) {
            input.type = 'password';
            setIsPasswordVisible(false);
            
        }
        else {
            input.type = 'text';
            setIsPasswordVisible(true);
        }
    }

    return (
        <img onClick={clickEvent}
            src={ isPasswordVisible ? 
                "/images/ui/passwordInput/notShow.png"
                :
                "/images/ui/passwordInput/show.png" }
            alt="display-password" 
        className="password-eye"/>
    )
}
