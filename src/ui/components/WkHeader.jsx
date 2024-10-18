import { useEffect, useState } from "react";
import { WkHeaderPC } from "./WkHeaderPc";
import { WkHeaderPhone } from "./WkHeaderPhone";

export const WkHeader = () => {
    const [isPhone,setIsPhone] = useState(window.innerWidth > 1600);
    const checkIfPhone = () => {
      setIsPhone(window.innerWidth > 1600);
    }
  
    useEffect(() => {
      window.addEventListener('resize', checkIfPhone);
    }, [window.innerWidth]);

  return (
    <>
      {
        isPhone ? <WkHeaderPC/> : <WkHeaderPhone/>
      }
    </>
  )
}


