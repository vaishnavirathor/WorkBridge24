import React, { useContext, useState, useEffect } from 'react';
import Login from './components/Auth/Login.jsx'; // ✅ Correct import
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import { AuthContext } from './context/AuthProvider.jsx';
import { setLocalStorage } from './utils/localStorage'; // ✅ Import added

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData]= useState(null);
  const authData = useContext(AuthContext);

  // ✅ Ensures local storage data is set if not present
  // useEffect(() => {
  //   if (!localStorage.getItem('employees')) {
  //     setLocalStorage(); // Ensures data is populated before fetching
  //   }
  //   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  //   if (loggedInUser) setUser(loggedInUser.role);
  //   else {
  //     setUser(null);  // ✅ Ensures Login page opens by default
  // }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    }
     else if (authData) {
      const employee= authData.employees.find((e) => e.email === email && e.password === password)
      if(employee)
        setUser('employee'); // ✅ Fixed typo from 'employees' to 'employee'
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));
    }
     else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' && <AdminDashboard />}
      {user === 'employee' && <EmployeeDashboard data={loggedInUserData} />} {/* ✅ Fixed role check typo */}
    </>
  );
};

export default App;
