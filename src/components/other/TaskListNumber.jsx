import React from 'react'

const TaskListNumber = ({data}) => {
  const tasks = data.taskCounts; 
  return (
    <div className='flex mt-10 justify-between gap-5 screen' >
        <div className='rounded-xl w-[45%] py-6 px-9  bg-red-400' >
        <h2 className='text-3xl font-semibold ' >{tasks.newTask}</h2>
        <h3 className='text-xl font-medium' >New Task</h3>
        </div>

        <div className='rounded-xl w-[45%] py-6 px-9  bg-blue-400' >
        <h2 className='text-3xl font-semibold ' >{tasks.completed}</h2>
        <h3 className='text-xl font-medium' >Completed Task</h3>
        </div>

        <div className='rounded-xl w-[45%] py-6 px-9  bg-green-400' >
        <h2 className='text-3xl font-semibold ' >{tasks.accepted}</h2>
        <h3 className='text-xl font-medium' >Accepted Task</h3>
        </div>
        
        <div className='rounded-xl w-[45%] py-6 px-9  bg-yellow-400' >
        <h2 className='text-3xl font-semibold ' >{tasks.failed}</h2>
        <h3 className='text-xl font-medium' >Failed Task</h3>
        </div>
        
    </div>
  )
}

export default TaskListNumber
