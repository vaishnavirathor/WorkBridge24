import React from 'react';

const TaskList = ({ data }) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap py-5'>
      {data.tasks.map((task, index) => (
        <div key={index} className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{task.category}</h3>
            <h4 className='text-sm'>{task.taskDate}</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>{task.taskTitle}</h2>
          <p className='text-sm mt-2'>{task.taskDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
