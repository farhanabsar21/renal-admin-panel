import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { UserCommonData } from '../App';

const Login = () => {
    const [userData, setUserData] = useContext(UserCommonData);
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    // setting up the redirect location 
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } }

    const onSubmit = data => {
        setUserData(data);
        history.replace(from);
    };
    
    console.log(userData)
    return (
        <div className="Login d-flex justify-content-center align-items-center">
            <div className="login-form">
                <div className="p-2 my-2 text-center">
                    <h2>User Login</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="p-2 my-2 text-center">
                        <input {...register("username", { required: true })} type="text" placeholder="username"/>
                        {errors.username?.type === 'required' && "your name is required"}
                    </div>
                    <div className="p-2 my-2 text-center">
                        <input {...register("email", { required: true })} type="email" placeholder="email"/>
                        {errors.email && "email is required"}
                    </div>
                    <div className="p-2 my-2 text-center">
                        <select {...register("role")}>
                            <option value="staff">staff</option>
                            <option value="doctor">doctor</option>
                            <option value="admin">admin</option>
                        </select>
                    </div>
                    <div className="text-center p-2 my-2">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
