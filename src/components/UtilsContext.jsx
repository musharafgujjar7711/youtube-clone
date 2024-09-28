import { createContext, useContext, useState } from "react";

const UtilsContext = createContext();

export const UtilsContextProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [mobilescreen, setMobilescreen] = useState(false);
    
    return (
        <UtilsContext.Provider value={{ sidebar, setSidebar, setMobilescreen, mobilescreen }}>
            {children}
        </UtilsContext.Provider>
    );
};

export const useUtils = () => {
    const utilsContext = useContext(UtilsContext);
    if (!utilsContext) return null;
    return utilsContext;
};
