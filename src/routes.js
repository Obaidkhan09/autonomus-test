import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "./Components/Login";
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard/Dshboard';
import { withAuth } from "./ReUseable/PrivateHoc"

// Define your routes here
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={withAuth(Login)} />
      <Route path="/login" exact element={withAuth(Login)} />
      <Route path="/signUp" exact element={withAuth(SignUp)} />
      <Route path="/dashboard" element={withAuth(Dashboard)} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;