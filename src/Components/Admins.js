import React from 'react';
import Sidebar from './Shared/Sidebar';
import adminData from "../fakeData/admins.json";
const Admins = () => {
    return (
        <div className="Admin">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                <div className="p-3 text-center">
                        <h1>Admins Panel</h1>
                        <form className="p-3 mb-3">
                            <input type="text" placeholder="name.." />
                            <input type="text" placeholder="email.." />
                            <input type="text" placeholder="address.." />
                            <button><i class="fas fa-plus"></i></button>
                        </form>
                    </div>
                    <div className="row">
                        <div>
                            {adminData.map(admin => 
                            <div className="staff-container" key={admin.name}>
                                    <div className="d-flex">
                                        <div>
                                            <img src={admin.photo} alt={admin.name} />
                                        </div>
                                        <div className="px-2">
                                            <h5>{admin.name}</h5>
                                            <p><strong>Email:</strong> {admin.email}</p>
                                            <p><strong>Address:</strong> {admin.address}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="delete"><i class="fas fa-trash-alt"></i></button>
                                        <button className="edit"><i class="fas fa-edit"></i></button>
                                    </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admins;