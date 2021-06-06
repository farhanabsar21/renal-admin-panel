import React, { useContext, useEffect, useState } from 'react';
import EachPatient from './EachPatient';
import Sidebar from './Shared/Sidebar';
import "../App.css";
import { UserCommonData } from '../App';

const Patients = () => {
    const [patient, setPatient] = useState([]);
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setPatient(data))
    }, [])
    const [userData, setUserData] = useContext(UserCommonData);
    return (
        <div className="Patients">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 text-center">
                {!userData.role === "doctor" || userData.role === "staff" ? <div>
                    <h1 className="p-2">Patient List</h1>
                    <form className="p-3 mb-3">
                        <input type="text" placeholder="patient name.."/>
                        <input type="text" placeholder="patient email.."/>
                        <input type="text" placeholder="patient address.."/>
                        <button><i class="fas fa-plus"></i></button>
                    </form>
                </div> : null}
                <div className="row mt-3">
                    <div className="col-md-2 col-1"></div>
                    <div className="col-md-8 col-10">
                        {patient.map(eachP => <EachPatient eachP={eachP} key={eachP.id}></EachPatient>)}
                    </div>
                    <div className="col-md-2 col-1"></div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Patients;