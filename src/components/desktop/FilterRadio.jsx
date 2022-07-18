import React, { useState } from "react";
import * as s from "./FilterRadio.module.scss";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { BsPlusLg } from "react-icons/bs";

function FilterRadio(props) {
    const [label, setLabel] = useState(() => {
        return props.content
            .map((i) => {
                if (i.checked) {
                    return i;
                }
            })
            .filter((i) => i)[0].label;
    });
    const [opened, setOpened] = useState(false);

    const handleUpdateProps = (e) => {
        if (e.target.id === "all") {
            let _data = {};
            _data[`${props.type}`] = null;
            props.updateOpts({
                ...props.actualOpts,
                ..._data,
            });
            setLabel("all");
        } else {
            let _data = {};
            _data[`${props.type}`] = e.target.id;
            props.updateOpts({
                ...props.actualOpts,
                ..._data,
            });
            setLabel(e.target.id);
        }
    };

    return (
        <div className={s.filter}>
            <div className={s.filter__header}>
                <span>{props.header}</span>
                <div>
                    <span>{label}</span>
                    <button className="btn-static btn--filter-toggle">
                        <BodyToggle
                            onClick={() => (opened ? setOpened(false) : setOpened(true))}
                            className={`${opened ? "rotated" : ""}`}
                        />
                    </button>
                </div>
            </div>
            <Body className={`${s.filter__body} ${opened ? "opened" : ""}`}>
                {props.content.map((item) => (
                    <div className={s.filter__body__row} key={item.label}>
                        <label htmlFor={item.label}>{item.label}</label>
                        <input
                            type="radio"
                            id={item.label}
                            name={`${props.header}-radio`}
                            onChange={(e) => handleUpdateProps(e)}
                            defaultChecked={item.checked}
                        />
                    </div>
                ))}
            </Body>
        </div>
    );
}

const BodyToggle = styled(BsPlusLg)`
    &.rotated {
        transform: rotate(45deg);
    }
`;

const Body = styled.form`
    &.opened {
        height: unset !important;
    }
`;

FilterRadio.propTypes = {
    header: PropTypes.string,
    content: PropTypes.array,
    updateOpts: PropTypes.func,
    actualOpts: PropTypes.object,
};

export default FilterRadio;
