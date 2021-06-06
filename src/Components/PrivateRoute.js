import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserCommonData } from '../App';

const PrivateRoute = ({children, ...rest}) => {
    const [userData, setUserData] = useContext(UserCommonData);
    return (
        <div>
           <Route
            {...rest}
            render={({ location }) =>
            userData.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        /> 
        </div>
    );
};

export default PrivateRoute;