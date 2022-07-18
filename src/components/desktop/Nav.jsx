import React from "react";
import * as s from "./Nav.module.scss";
import styled from "styled-components";
import OverviewIcon from "jsx:../../../public/svg/overview_icon_stroke.svg";
import ImageAnalysisIcon from "jsx:../../../public/svg/image_analysis_icon_fill.svg";
import ReadCenterIcon from "jsx:../../../public/svg/read_center_icon_fill.svg";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className={s.nav}>
            <MyLink to={"/"} className={s.nav__link} href="">
                <div className={s.nav__link__indicator} />
                <div className={`btn btn--icon-stroke ${s.nav__link__icon}`}>
                    <OverviewIcon />
                </div>
                <div className={s.nav__link__text}>
                    <span>main</span>
                    <span>overview</span>
                </div>
            </MyLink>
            <MyLink to={"/analyse"} className={s.nav__link} href="">
                <div className={s.nav__link__indicator} />
                <div className={`btn btn--icon-fill ${s.nav__link__icon}`}>
                    <ImageAnalysisIcon />
                </div>
                <div className={s.nav__link__text}>
                    <span>image</span>
                    <span>analysis</span>
                </div>
            </MyLink>
            <MyLink to={"/datacenter"} className={s.nav__link} href="">
                <div className={s.nav__link__indicator} />
                <div className={`btn btn--icon-fill ${s.nav__link__icon}`}>
                    <ReadCenterIcon />
                </div>
                <div className={s.nav__link__text}>
                    <span>read</span>
                    <span>center</span>
                </div>
            </MyLink>
        </nav>
    );
}

const MyLink = styled(NavLink)`
    &.active {
        & > div {
            visibility: visible;
        }
        opacity: 1;
    }
`;

export default Nav;
