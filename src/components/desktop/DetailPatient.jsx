import React from "react";
import * as s from "./DetailPatient.module.scss";
import BabyIcon from "jsx:../../../public/svg/baby_icon_fill.svg";
import WeightIcon from "jsx:../../../public/svg/weight_icon_fill.svg";

function DetailPatient() {
    return (
        <div className={s.detail}>
            <div className={s.detail__header}>
                <span>appointment informations</span>
            </div>
            <div className={s.detail__body}>
                <div className={s.detail__body__section}>
                    <BabyIcon />
                    <div className={s.detail__body__section__content}>
                        <span>gender</span>
                        <span>Female</span>
                    </div>
                </div>
                <div className={s.detail__body__section}>
                    <WeightIcon />
                    <div className={s.detail__body__section__content}>
                        <span>gestational age</span>
                        <span>35 weeks</span>
                    </div>
                </div>
                <div className={s.detail__body__section}>
                    <WeightIcon />
                    <div className={s.detail__body__section__content}>
                        <span>birth weight</span>
                        <span>3500 g</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPatient;
