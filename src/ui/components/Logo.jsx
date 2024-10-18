import { useNavigate } from "react-router"


export const Logo = () => {

    const navigate = useNavigate();
    const onRedirectHome = () =>{
        navigate('/');
    }

  return (
    <div>
      <img src='/public/images/ui/Wk.png' onClick={onRedirectHome}/>
    </div>
  )
}


