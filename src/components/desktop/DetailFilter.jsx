import React, { useState } from "react";
import * as s from "./DetailFilter.module.scss";
import AdjustIcon from "jsx:../../../public/svg/adjust_icon_fill.svg";
import { PropTypes } from "prop-types";

function DetailFilter(props) {
    const [selected, setSelected] = useState(null);

    console.log(selected);

    return (
        <div className={s.detail}>
            <div className={s.detail__section}>
                <span>image filters</span>
                <div className={s.detail__section__body}>
                    <button
                        className={`btn btn--filter-select ${
                            selected === "clahe_color" ? "selected-filter" : undefined
                        }`}
                        id="clahe_color"
                        onClick={(e) => {
                            props.setSelectedFilter(e.target.id);
                            setSelected(e.target.id);
                        }}>
                        CLAHE Color
                    </button>
                    <button
                        className={`btn btn--filter-select ${
                            selected === "clahe_gray" ? "selected-filter" : undefined
                        }`}
                        id="clahe_gray"
                        onClick={(e) => {
                            props.setSelectedFilter(e.target.id);
                            setSelected(e.target.id);
                        }}>
                        CLAHE Gray
                    </button>
                    <button
                        className={`btn btn--filter-select ${
                            selected === "clahe_green" ? "selected-filter" : undefined
                        }`}
                        id="clahe_green"
                        onClick={(e) => {
                            props.setSelectedFilter(e.target.id);
                            setSelected(e.target.id);
                        }}>
                        CLAHE Green
                    </button>
                    <button
                        className={`btn btn--filter-select ${
                            selected === "gausian_blur" ? "selected-filter" : undefined
                        }`}
                        id="gausian_blur"
                        onClick={(e) => {
                            props.setSelectedFilter(e.target.id);
                            setSelected(e.target.id);
                        }}>
                        Gausian Blur
                    </button>
                    <button
                        className={`btn btn--filter-select ${
                            selected === "treshold" ? "selected-filter" : ""
                        }`}
                        id="treshold"
                        onClick={(e) => {
                            props.setSelectedFilter(e.target.id);
                            setSelected(e.target.id);
                        }}>
                        Treshold
                    </button>
                </div>
            </div>
            <div className={s.detail__section}>
                <span>adjust</span>
                <div className={s.detail__section__body}>
                    <button className="btn btn--icon-fill">
                        <AdjustIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}

DetailFilter.propTypes = {
    setSelectedFilter: PropTypes.func,
};

export default DetailFilter;
