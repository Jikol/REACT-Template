import React from "react";
import * as s from "./Card.module.scss";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

function Card({ data }) {
    return (
        <div className={s.card}>
            <div className={s.card__img}>
                <img src={data.image[0].path} alt="" />
            </div>
            <div className={s.card__footer}>
                <div className={s.card__footer__text}>
                    <span>diagnosis</span>
                    <span>{data.diagnosis[0].name}</span>
                </div>
                <NavLink
                    to={`/detail/${data.id}`}
                    state={{ data: data }}
                    href=""
                    className="btn-static btn--white-blank">
                    <span>detail</span>
                </NavLink>
            </div>
        </div>
    );
}

Card.propTypes = {
    data: PropTypes.object,
};

export default Card;
