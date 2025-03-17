import React from 'react';
import Header from '../other/Header';
import TaskListNumber from '../other/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({ data }) => {
  if (!data) {
    return <div className='p-10 text-red-500'>❗ Employee data not found.</div>;
  }

  console.log('Employee Data:', data);

  return (
    <div className='p-10 bg-[#1c1c1c] h-screen text-white'>
      <Header data={data} />
      <TaskListNumber data={data}/>
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
