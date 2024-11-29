import { useNavigate } from "react-router"


export const Logo = () => {

    const navigate = useNavigate();
    const onRedirectHome = () =>{
        navigate('/');
    }

  return (
    <img src='/images/ui/Wk.png' onClick={onRedirectHome} className="wk-logo"/>
  )
}


