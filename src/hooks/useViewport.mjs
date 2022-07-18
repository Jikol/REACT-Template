import { useEffect, useState } from "react";
import { getVpDimensions } from "../modules/_helper.mjs";

export default () => {
    const [viewport, setViewport] = useState(getVpDimensions().vw);

    useEffect(() => {
        const handleResize = () => setViewport(getVpDimensions().vw);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return { viewport };
};
