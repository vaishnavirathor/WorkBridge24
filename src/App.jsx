import React, { useEffect } from 'react';
import Login from './components/Auth/Login.jsx'; // ✅ Correct import
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx';

const App = () => {

  useEffect(()=>{
    // setLocalStorage()
    getLocalStorage()
  },)

  return (
    <div>
      <Login />
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  );
};

export default App;
