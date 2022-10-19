import {useNavigate} from "react-router-dom";
import UseScrollNavigatePathError from "./errors/useScrollNavigatePathError";
import UseScrollNavigateCoordinateError from "./errors/useScrollNavigateCoordinateError";


/**
 *
 *  React hook to redirect to a new page and scroll to somewhere on the page
 *  It scrolls to the top by default
 *
 * @param {number} scrollX - The x position to scroll to
 * @param {number} scrollY - The y position to scroll to
 * @param {string} path - The path to navigate to
 */
export default function useScrollNavigate(path, scrollX = 0 , scrollY = 0  ) {

    if (typeof scrollX !== "number" || typeof scrollY !== "number") {
        throw new UseScrollNavigateCoordinateError("scrollX and scrollY must be numbers");
    }
    if (typeof path !== "string") {
        throw new UseScrollNavigatePathError("path must be a string") ;
    }
    if(path === ""){
        throw new UseScrollNavigatePathError("path must not be empty");
    }

    const navigate = useNavigate();
    return () => {
        window.scroll({left: scrollX, top: scrollY, behavior: "smooth" });
        navigate(path);
    }
}



