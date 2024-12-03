import { createContext } from "react"

export const ComponenteActivoContext = createContext({});


export const ComponenteActivoProvider = ({children, value}) => {
  return (
    <ComponenteActivoContext.Provider value={value}>
        {children}
    </ComponenteActivoContext.Provider>
  )
}
