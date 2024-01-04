import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext()

const NavigationProvider = ({children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate',handler)

        return () => {
            window.removeEventListener('popstate', handler)
        }
    },[])

    const navigate = (to) => {
        window.history.pushState({},'',to)
        setCurrentPath(to)
    }
    
    const valueToShare = {
        navigate,
        currentPath
    }

    return (
        <NavigationContext.Provider value={valueToShare}>
            {children}
        </NavigationContext.Provider>
    )
}

export default NavigationContext;
export {NavigationProvider}

