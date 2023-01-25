/* eslint-disable */
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {PublicRoute} from './Routes/Routes'
import Login from './Containers/Login/Login';
import CreatePassword from './Containers/CreatPassword/CreatePassword';
import ForgetPassword from './Containers/ForgetPassword/ForgetPassword';

function App() {
  console.log('Enter router');
  return (
    <Router>
      <Routes>
        
        <Route element={<PublicRoute />}>
          <Route path="/login/:slug?" element={<Login />} />
          <Route path="/create-password/:slug?" element={<CreatePassword />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          {/* <Route path="/login">
            <Route path=":slug" element={<Login />} />
          </Route> */}
          
          <Route path="/" element={<Navigate to="/login" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
