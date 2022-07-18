import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import * as s from "./FilteredAppointments.module.scss";
import Card from "./Card.jsx";

function FilteredAppointments(props) {
    const [apps, setApps] = useState([]);

    // handle GraphQL Queries
    useEffect(() => {
        let test = props.data.map((i) => i.appointment);
        test = test.flat();
        // filter local data
        // if (props.localFilters.diagnosis) {
        //     test.forEach((item) => {
        //         console.log(props.localFilters.diagnocsis);
        //         console.log(i.name);
        //         item?.diagnosis?.filter((i) => {
        //             if (props.localFilters.diagnosis.includes(i.name)) {
        //                 return props.localFilters.diagnosis;
        //             }
        //         });
        //     });
        // }
        console.log(test);
        setApps(test ?? []);
        console.log(props.localFilters);
    }, [props.data, props.localFilters]);

    console.log(apps);

    return (
        <div className={s.grid}>
            {apps.map((app) => (
                <Card key={app.id} data={app} />
            ))}
        </div>
    );
}

FilteredAppointments.propTypes = {
    data: PropTypes.array,
    localFilters: PropTypes.object,
};

export default FilteredAppointments;
