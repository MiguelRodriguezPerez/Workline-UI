import React, { useEffect, useState } from 'react'
import { BarraLateral } from './BarraLateral';
import { BarraLateralPhone } from './BarraLateralPhone';

export const BarraLateralWrapper = ({ setComponenteActivo }) => {

    const [isPc, setIsPc] = useState(window.innerWidth > 1600);

    const checkIfPc = () => {
        setIsPc(window.innerWidth > 1600);
    }

    useEffect(() => {
        window.addEventListener('resize', checkIfPc);
    },[window.innerWidth])

  return (
    <>
        {
            isPc ? <BarraLateral cambiarComponenteActivo={setComponenteActivo}/> 
            : 
            <BarraLateralPhone cambiarComponenteActivo={setComponenteActivo}/>
        }
    </>
  )
}
