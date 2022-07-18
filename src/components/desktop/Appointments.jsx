import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import * as s from "./Appointments.module.scss";
import useAllAppointments from "../../graphql/queries/useAllAppointments.mjs";
import { GridLoader } from "react-spinners";
import Card from "./Card.jsx";

function Appointments(props) {
    const { data, loading, error } = useAllAppointments();
    const [apps, setApps] = useState([]);

    // handle GraphQL Queries
    useEffect(() => {
        setApps(data?.appointment ?? []);
        props.setAppsCount(data?.appointment.length ?? 0);
    }, [data]);

    // return fallback components while data is fetching
    if (loading) return <GridLoader loading={loading} color={"#6e5e5e"} size={20} margin={5} />;
    if (error) return <pre>{error.message}</pre>;

    return (
        <div className={s.grid}>
            {apps.map((app) => (
                <Card key={app.id} data={app} />
            ))}
        </div>
    );
}

Appointments.propTypes = {
    setAppsCount: PropTypes.func,
    counter: PropTypes.number,
};

export default Appointments;
