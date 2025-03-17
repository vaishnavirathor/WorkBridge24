import React from 'react';

const Header = ({ data }) => {
  console.log("🔍 Header Data:", data);

  return (
    <div className='flex items-end justify-between'> 
      <h1 className='text-2xl font-medium'>
        Hello, <br />
        <span className='text-3xl font-semibold'>{data.tasks[0].name} 👋</span>
      </h1>
      <button 
        className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm' 
        onClick={() => {
          localStorage.removeItem('loggedInUser');
          window.location.reload();
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
