import React from "react";
import * as s from "./Main.module.scss";
import Sidebar from "./Sidebar.jsx";
import Router from "../../Router.jsx";

function Main() {
    return (
        <main className={s.main}>
            <Sidebar />
            <Router />
        </main>
    );
}

export default Main;
