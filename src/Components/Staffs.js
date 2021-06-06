import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Shared/Sidebar';
import staffData from "../fakeData/staffs.json";
import "../App.css";
import { UserCommonData } from '../App';

const Staffs = () => {
    const [staffs, setStaffs] = useState([]);
    useEffect(()=> {
        setStaffs(staffData)
    }, [])
    const [userData, setUserData] = useContext(UserCommonData);
    return (
        <div className="Staffs">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <div className="p-3 text-center">
                        <h1>Our Staffs</h1>
                        {userData.role === "admin" && <form className="p-3 mb-3">
                            <input type="text" placeholder="name.." />
                            <input type="text" placeholder="email.." />
                            <input type="text" placeholder="address.." />
                            <button><i class="fas fa-plus"></i></button>
                        </form>}
                    </div>
                    <div className="row">
                        <div>
                            {staffs.map(staff => 
                            <div className="staff-container" key={staff.name}>
                                    <div className="d-flex">
                                        <div>
                                            <img src={staff.photo} alt={staff.name} />
                                        </div>
                                        <div className="px-2">
                                            <h5>{staff.name}</h5>
                                            <h6><strong>Age:</strong> {staff.age}</h6>
                                            <p><strong>Email:</strong> {staff.email}</p>
                                            <p><strong>Address:</strong> {staff.address}</p>
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

export default Staffs;