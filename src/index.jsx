import {useNavigate} from "react-router-dom";
import {createContext, useCallback, useContext, useLayoutEffect, useMemo, useRef, useState} from "react";


export class ScrollNavigatePathError extends Error {
    constructor(...params) {
        super(params);
        this.name = "ScrollNavigatePathError" ;
    }
}
export class ScrollNavigateLeftError extends Error {
    constructor(...parameters) {
        super(parameters)
        this.name = "ScrollNavigateLeftError"
    }
}

export class ScrollNavigateTopError extends Error {
    constructor(...parameters) {
        super(parameters)
        this.name = "ScrollNavigateTopError"
    }
}

/**
 *
 *  React hook to redirect to a new page and scroll to somewhere on the page
 *  It scrolls to the top by default
 *
 * @param {number} top - The y position to scroll to from top - default = 0 - must be between 0 and 100
 * @param {number} left - The x position to scroll to from left - default = 0 - must be between 0 and 100
 * @param {string} path - The path to navigate to - default = /
 */
export function useScrollNavigate(path = "/", top = 0 , left = 0  ) {

    const navigate = useNavigate();
    const [scrollNavigateError, setScrollNavigateError] = useState(null) ;
    const scrollNavigate = useCallback( (path, top, left) => {
       if (typeof path != "string") {
           setScrollNavigateError(new ScrollNavigatePathError("Path is not a string")) ;
           return
       }
       if (typeof top !== "number") {
           setScrollNavigateError(new ScrollNavigateTopError("Top is not a number"))
           return
       }
       if (top > 100 || top < 0) {
           setScrollNavigateError(new ScrollNavigateLeftError("Top isn't between 0 and 100"))
       }
       if(typeof left !== "number") {
           setScrollNavigateError(new ScrollNavigateTopError("Left is not a number"))
           return
       }
        if (left > 100 || left < 0) {
            setScrollNavigateError(new ScrollNavigateLeftError("Left isn't between 0 and 100"))
        }
        setScrollNavigateError(false);
        navigate(path);

        window.scroll({left,top,behavior: 'smooth'}) ;

    },[navigate, setScrollNavigateError]);

    return {
        scrollNavigate,
        scrollNavigateError
    }
}

/** Scroll to a html ref */
export const NavigateContext = createContext();
export const NavigateContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [navigationBeacon, setNavigationBeacon] = useState(null) ;
    const navigationRef = useRef() ;

    const navigateToRef = useCallback((path) => {
        navigate(path) ;
        setNavigationBeacon(Symbol());

    },[navigate, setNavigationBeacon]);

    const value = useMemo(() => {navigationRef, navigateToRef},
        [navigationRef,navigateToRef]);

    useLayoutEffect(() => {
       if (navigationBeacon === false || navigationBeacon === null )return
       if(navigationRef.current instanceof HTMLElement) {
           const {left,top} = navigationRef.current.getBoundingClientRect();
           window.scroll({left,top,behavior:'smooth'});
       }
       setNavigationBeacon(false) ;
    },[navigationBeacon,navigationRef,setNavigationBeacon]);

    return (
        <NavigateContext.Provider value={value}>
            {children}
        </NavigateContext.Provider>
    )
}

export const useNavigationContext = () => useContext(NavigateContext) ;



