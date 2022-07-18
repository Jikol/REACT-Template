import React, { useState } from "react";
import * as s from "./DetailAppointment.module.scss";
import DiagnosisIcon from "jsx:../../../public/svg/diagnosis_icon_static.svg";
import DeviceIcon from "jsx:../../../public/svg/device_icon_fill.svg";
import BirthdayIcon from "jsx:../../../public/svg/birthday_icon_fill.svg";
import PlusIcon from "jsx:../../../public/svg/plus_icon_fill.svg";
import { useLocation } from "react-router-dom";

function DetailAppointment() {
    const location = useLocation();
    const [data, setData] = useState(location?.state?.data);

    console.log(data);
    return (
        <div className={s.detail}>
            <div className={s.detail__header}>
                <span>appointment informations</span>
                <div className={s.detail__header__pills}>
                    {data.treatment === true && <span>treatment</span>}
                    {data.laser === true && <span>laser</span>}
                </div>
            </div>
            <div className={s.detail__body}>
                <div className={s.detail__body__section}>
                    <div className={s.section__row}>
                        <DiagnosisIcon />
                        <div className={s.section__row__content}>
                            <span>diagnosis</span>
                            <span>{data.diagnosis[0].fullName}</span>
                        </div>
                    </div>
                    <div className={s.section__row}>
                        <DeviceIcon />
                        <div className={s.section__row__content}>
                            <span>device</span>
                            <span>{data.device[0].name}</span>
                        </div>
                    </div>
                    <div className={s.section__row}>
                        <BirthdayIcon />
                        <div className={s.section__row__content}>
                            <span>injection</span>
                            <span>
                                {data.injection[0].name === null && <>not given</>}
                                {data.injection[0].name !== null && data.injection[0].name}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={s.detail__body__section}>
                    <button className="btn btn--white-blank" disabled>
                        report feedback
                    </button>
                    <div className={s.section__row}>
                        <BirthdayIcon />
                        <div className={s.section__row__content}>
                            <span>postconceptual age</span>
                            <span>{data.postconceptualAge}</span>
                        </div>
                    </div>
                    <div className={s.section__row}>
                        <PlusIcon />
                        <div className={s.section__row__content}>
                            <span>plus form</span>
                            <span>{data.plusform[0].name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailAppointment;
