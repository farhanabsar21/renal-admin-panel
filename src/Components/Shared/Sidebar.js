import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import logo from "../../img/logo.png";
import { UserCommonData } from '../../App';

const Sidebar = () => {
    const [userData, setUserData] = useContext(UserCommonData);
    const handleLogOut = () => {
        setUserData({})
    }
    return (
        <section className="Sidebar">
            <div className="logo-container d-flex justify-content-center align-items-center">
                <img src={logo} alt="medical" />
            </div>
            <div>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    {!userData.email && <li><Link to="/login">Login</Link></li>}
                    { userData.role === "staff" || userData.role === "doctor" || userData.role === "admin" ? <li><Link to="/patients">All Patients</Link></li> : null}
                    { userData.role === "staff" || userData.role === "admin" ? <li><Link to="/staffs">Staffs</Link></li> : null}
                    { userData.role === "doctor" || userData.role === "admin" ? <li><Link to="/doctors">Doctors</Link></li> : null}
                    { userData.role === "admin" ? <li><Link to="/Admins">Admins</Link></li> : null}
                 </ul>
            </div>
            <div className="logout-btn-container text-center">
                {userData.email && <button onClick={()=> handleLogOut()}>Logout <i class="fas fa-sign-out-alt mx-1"></i></button>}
            </div>
        </section>
    );
};

export default Sidebar;


