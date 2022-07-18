import React from "react";
import * as s from "./Header.module.scss";

// import static assets
const logo_vsb = new URL("../../../public/images/logo.png?as=avif&height=90", import.meta.url);
const logo_fno = new URL(
    "../../../public/images/fno_logo_short.png?as=avif&height=70",
    import.meta.url
);

function Header() {
    return (
        <header className={s.header}>
            <div className={s.header__start}>
                <a className={`link--img ${s.header__start__link}`} href="">
                    <img src={logo_vsb.href} alt="" />
                </a>
                <div className={s.header__separator} />
                <a className={`link--img ${s.header__start__link}`} href="">
                    <img src={logo_fno.href} alt="" />
                </a>
            </div>
            <div className={s.header__end}>
                <button className="btn btn--teal-blank">
                    <span>login</span>
                </button>
                <button className="btn btn--teal-fill">
                    <span>sign up</span>
                </button>
            </div>
        </header>
    );
}

export default Header;
