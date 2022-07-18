import React, { useEffect, useState } from "react";
import * as s from "./FilterRange.module.scss";
import styled from "styled-components";
import { BsPlusLg } from "react-icons/bs";
import { PropTypes } from "prop-types";
import { getTrackBackground, Range } from "react-range";

function FilterRange(props) {
    const [values, setValues] = useState([parseInt(props.min), parseInt(props.max)]);
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        let data = {};
        data[`${props.type}`] = {
            from: parseInt(values[0].toFixed(0)),
            to: parseInt(values[1].toFixed(0)),
        };
        props.updateOpts({
            ...props.actualOpts,
            ...data,
        });
    }, [values]);

    return (
        <div className={s.filter}>
            <div className={s.filter__header}>
                <span>{props.header}</span>
                <div>
                    <span>{` ${values[0].toFixed(0)} - ${values[1].toFixed(0)} ${
                        props.unit
                    }`}</span>
                    <button className="btn-static btn--filter-toggle">
                        <BodyToggle
                            onClick={() => (opened ? setOpened(false) : setOpened(true))}
                            className={`${opened ? "rotated" : ""}`}
                        />
                    </button>
                </div>
            </div>
            <Body className={`${s.filter__body} ${opened ? "opened" : ""}`}>
                <Range
                    min={props.min}
                    max={props.max}
                    step={1}
                    values={values}
                    onChange={(values) => setValues(values)}
                    renderTrack={({ props, children }) => (
                        <div
                            /* eslint-disable-next-line react/prop-types */
                            onMouseDown={props.onMouseDown}
                            /* eslint-disable-next-line react/prop-types */
                            onTouchStart={props.onTouchStart}
                            style={{
                                /* eslint-disable-next-line react/prop-types */
                                ...props.style,
                                height: "4rem",
                                paddingInline: "0.8em",
                                display: "flex",
                                width: "100%",
                            }}>
                            <div
                                /* eslint-disable-next-line react/prop-types */
                                ref={props.ref}
                                style={{
                                    height: "5px",
                                    width: "100%",
                                    borderRadius: "25px",
                                    background: getTrackBackground({
                                        values,
                                        colors: ["#DEDEE3FF", "#1e2838", "#DEDEE3FF"],
                                        min: props.min,
                                        max: props.max,
                                    }),
                                    alignSelf: "center",
                                }}>
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                /* eslint-disable-next-line react/prop-types */
                                ...props.style,
                                height: "1.5em",
                                width: "1.5em",
                                borderRadius: "50%",
                                backgroundColor: "#1e2838",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.2)",
                            }}
                        />
                    )}
                />
                <output className={s.filter__body__output}>
                    {` ${values[0].toFixed(0)} - ${values[1].toFixed(0)} weeks`}
                </output>
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

FilterRange.propTypes = {
    header: PropTypes.string,
    content: PropTypes.array,
    updateOpts: PropTypes.func,
    defaultFrom: PropTypes.string,
    defaultTo: PropTypes.string,
    actualOpts: PropTypes.object,
    unit: PropTypes.string,
    type: PropTypes.string,
};

export default FilterRange;
