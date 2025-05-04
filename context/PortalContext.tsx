"use client"

import { createContext, PropsWithChildren, useState } from "react";


export const PortalContext = createContext({
    portal: "",
    setPortal: (portal: string) => {}
});




const PortalProvider = ({children}:PropsWithChildren)=>{

    const [portal, setPortal] = useState("")

    const contextValue = {
        portal,
        setPortal
    }
    return(
        <PortalContext.Provider value={contextValue}>
            {children}
        </PortalContext.Provider>
    )
}

export default PortalProvider;