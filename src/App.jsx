import React, { useContext, useState, useEffect } from 'react';
import Login from './components/Auth/Login.jsx';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import { AuthContext } from './context/AuthProvider.jsx';
import { setLocalStorage } from './utils/localStorage';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser');
  console.log(loggedInUser);
 if(loggedInUser){
 const userData = JSON.parse(loggedInUser);
 setUser(userData.role)
 setLoggedInUserData(userData.data)
}
})
  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (authData?.employees) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ 
          role: 'employee',
          email: employee.email 
        }));
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard />}
      {user === 'employee' && loggedInUserData && (
        <EmployeeDashboard data={loggedInUserData} />
      )} 
    </>
  );
};

export default App;
