import React from 'react';
import Sidebar from './Shared/Sidebar';
import "../App.css";
import BarData from './BarData';
import PieData from './PieData';

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <div className="p-3 text-center">
                        <h1>Welcome To The Hospital</h1>
                    </div>
                    {/* appointment summary  */}
                    <div className="row container">
                        {/* Pending Appointment  */}
                        <div className="col-md-3 pending">
                            <div className="d-flex align-items-center justify-content-around">
                                <div>
                                    <h2>09</h2>
                                </div>
                                <div>
                                    <h4>Pending</h4>
                                    <p>Appointment</p>
                                </div>
                            </div>
                        </div>
                        {/* todays Appointment  */}
                        <div className="col-md-3 today">
                            <div className="d-flex align-items-center justify-content-around">
                                <div>
                                    <h2>19</h2>
                                </div>
                                <div>
                                    <h4>Today's</h4>
                                    <p>Appointment</p>
                                </div>
                            </div>
                        </div>
                        {/* Total Appointment  */}
                        <div className="col-md-3 total">
                            <div className="d-flex align-items-center justify-content-around">
                                <div>
                                    <h2>34</h2>
                                </div>
                                <div>
                                    <h4>Total</h4>
                                    <p>Appointment</p>
                                </div>
                            </div>
                        </div>
                        {/* Total Appointment  */}
                        <div className="col-md-3 patient">
                            <div className="d-flex align-items-center justify-content-around">
                                <div>
                                    <h2>74</h2>
                                </div>
                                <div>
                                    <h4>Total</h4>
                                    <p>Patients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* charts to show data */}
                    <div className="row container my-4">
                        <div className="col-md-6 bar-data p-2">
                            <BarData></BarData>
                        </div>
                        <div className="col-md-5 pie-data p-2">
                            <PieData></PieData>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;