import { useEffect, useState } from "react";
import { WkHeaderPC } from "./WkHeaderPc";
import { WkHeaderPhone } from "./WkHeaderPhone";

export const WkHeaderWrapper = () => {

    const [ isPc, setIsPc ] = useState(window.innerWidth > 1400);
    
    const checkIfPc = () => {
      setIsPc(window.innerWidth > 1400);
    }
  
    useEffect(() => {
      window.addEventListener('resize', checkIfPc);
    }, [window.innerWidth]);

  return (
    <>
      {
        isPc ? <WkHeaderPC/> : <WkHeaderPhone/>
      }
    </>
  )
}


