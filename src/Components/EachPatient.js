import React from 'react';
import "../App.css";

const EachPatient = (props) => {
    const { name, email, address } = props.eachP;
    return (
        <div className="row">
            <div className="patient-container d-flex align-items-center justify-content-between">
                <div><h6><strong>Name:</strong> {name}</h6></div>
                <div><p><strong>Email:</strong> {email}</p></div>
                <div><p><strong>Address:</strong> {address.city}</p></div>
            </div>
        </div>
    );
};

export default EachPatient;