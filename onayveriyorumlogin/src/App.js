import LoginForm from "./login.component";
import "./App.css";
import Dashboard from "./admin_dashboard_component";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import UserOrAdmin from "./loginSec.component";
import UserDashboard from "./userDashboard.component";
import UserLogin from './userlogin.component';
import Onayal from './DashboardContentComponents/onayal.component'

// const PrivateRoute = ({ path, element }) => {
//   const [loggedIn, setLoggedIn] = useState(false);

//   if (!loggedIn) {
//     return <Navigate to="/" />;
//   }

//   return <Route path={path} element={element} />;
// };

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const [userloggedIn,setUserLoggedIn] = useState(false);
  const handleUserLogin = () => {
    setUserLoggedIn(true);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* {/* <Route path="/userlogin" element={<LoginForm onLogin={handleLogin} />} />

          {/* <Route path="/adminlogin" element={<LoginForm onLogin={handleLogin} />} /> */}

          <Route
            path="/dashboard"
            element={loggedIn ? <Dashboard /> : <Navigate to="/admin" />}
          />

    <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<UserOrAdmin />} />
          <Route path="/admin" element= {<LoginForm onLogin={handleLogin} /> } />
          <Route path="/user" element={<UserLogin onUserLogin={handleUserLogin} />} />
          <Route path="/userdashboard" element={userloggedIn ?   <UserDashboard />:<Navigate to="/user" />} />
          <Route exact  path='/onayal/:id' component={()=> <Onayal/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
