import React from "react";

import DoctorCard from '../components/Card.jsx';

const OtherComponent = () => {
    const doctorData = {
        name : "John Doe",
        title : "Cardiologist"
    }

    const doctorCard = <DoctorCard doctor={doctorData} />

    return (
        <div>
            <DoctorCard doctor={doctorData}></DoctorCard>
        </div>
    );
};

export default OtherComponent;