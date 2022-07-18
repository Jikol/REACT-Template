import React, { useEffect, useState } from "react";
import * as s from "./FilterCheckbox.module.scss";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { BsPlusLg } from "react-icons/bs";

function FilterCheckbox(props) {
    const [data, setData] = useState([]);
    const [label, setLabel] = useState("none");
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        if (data.length) {
            setLabel(`${data.length} selected`);
            let _data = {};
            _data[`${props.type}`] = data.map((i) => i.name);
            props.updateOpts({
                ...props.actualOpts,
                ..._data,
            });
        } else {
            setLabel("none");
        }
    }, [data]);

    const test = (e, item) => {
        if (e.target.checked) {
            setData([
                ...data,
                {
                    name: item.label,
                    id: item.id,
                },
            ]);
        } else {
            setData(data.filter((i) => i.id !== item.id));
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
                        <input type="checkbox" onChange={(e) => test(e, item)} value={data} />
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

FilterCheckbox.propTypes = {
    header: PropTypes.string,
    content: PropTypes.array,
    updateOpts: PropTypes.func,
    actualOpts: PropTypes.object,
};

export default FilterCheckbox;
