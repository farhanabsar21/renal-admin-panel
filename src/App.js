import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Patients from './Components/Patients';
import Doctors from './Components/Doctors';
import Admins from './Components/Admins';
import Staffs from './Components/Staffs';
import Login from './Components/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute';

export const UserCommonData = createContext();
function App() {
  const [userData, setUserData] = useState({});
  return (
    <div className="App">
      <UserCommonData.Provider value={[userData, setUserData]}>
      <Router>
        <Switch>
          <PrivateRoute path="/patients"><Patients></Patients></PrivateRoute>
          <PrivateRoute path="/staffs"><Staffs></Staffs></PrivateRoute>
          <PrivateRoute path="/doctors"><Doctors></Doctors></PrivateRoute>
          <PrivateRoute path="/admins"><Admins></Admins></PrivateRoute>
          <Route path="/login"><Login></Login></Route>
          <Route path="/"><Dashboard></Dashboard></Route>
        </Switch>
      </Router>
      </UserCommonData.Provider>
    </div>
  );
}

export default App;
