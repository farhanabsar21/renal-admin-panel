import React, { useContext, useEffect, useState }  from 'react';
import Sidebar from './Shared/Sidebar';
import doctorData from "../fakeData/doctors.json";
import "../App.css";
import { UserCommonData } from '../App';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=> {
        setDoctors(doctorData)
    }, [])
    const [userData, setUserData] = useContext(UserCommonData);
    return (
        <div className="Doctor">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <div className="p-3 text-center">
                        <h1>Our Doctors</h1>
                        {userData.role === "admin" && <form className="p-3 mb-3">
                            <input type="text" placeholder="name.." />
                            <input type="text" placeholder="age.." />
                            <input type="text" placeholder="email.." />
                            <input type="text" placeholder="address.." />
                            <button><i class="fas fa-plus"></i></button>
                        </form>}
                    </div>
                    <div className="row">
                        <div>
                            {doctors.map(doctor =>
                                <div className="doctor-container" key={doctor.name}>
                                    <div className="d-flex">
                                        <div>
                                            <img src={doctor.photo} alt={doctor.name} />
                                        </div>
                                        <div className="px-2">
                                            <h5>{doctor.name}</h5>
                                            <h6><strong>Age:</strong> {doctor.age}</h6>
                                            <p><strong>Email:</strong> {doctor.email}</p>
                                            <p><strong>Address:</strong> {doctor.address}</p>
                                        </div>
                                    </div>
                                    <div>
                                        {userData.role === "admin" && <button className="delete"><i class="fas fa-trash-alt"></i></button>}
                                        {userData.role === "admin" && <button className="edit"><i class="fas fa-edit"></i></button>}
                                    </div>
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;