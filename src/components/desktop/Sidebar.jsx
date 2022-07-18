import React from "react";
import * as s from "./Sidebar.module.scss";
import ThemeIcon from "jsx:../../../public/svg/theme_icon_fill.svg";
import HamburgerIcon from "jsx:../../../public/svg/hamburger_icon_fill.svg";
import Nav from "./Nav.jsx";

function Sidebar() {
    return (
        <aside className={s.sidebar}>
            <Nav />
            <footer>
                <button className="btn btn--icon-fill">
                    <ThemeIcon />
                </button>
                <button className={`btn-static ${s.sidebar__footer__toggle}`}>
                    <HamburgerIcon />
                </button>
            </footer>
        </aside>
    );
}

export default Sidebar;
