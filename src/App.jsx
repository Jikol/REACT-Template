import React from "react";
import * as s from "./App.module.scss";
import useViewport from "./hooks/useViewport.mjs";

function App() {
    const { viewport } = useViewport();
    const smBreakpoint = getComputedStyle(document.body).getPropertyValue("--bp-sm");

    return viewport <= smBreakpoint ? (
        // render mobile layout
        <div className={s.app}/>
    ) : (
        // render desktop layout
        <div className={s.app}/>
    );
}

export default App;
