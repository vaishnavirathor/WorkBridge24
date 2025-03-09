import React from 'react'
import Header from '../other/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen p-10' >
      <Header/>
    <div>
        <form className='flex items-start justify-between ' >
            <div>
            <h3>Task Title</h3>
            <input type="text" name="title" placeholder="Enter task task"/>
            </div>
            <div>
            <h3>Task Description</h3>
            <textarea name="description" placeholder="Enter task description"/>
           
            </div>
            <div>
            <h3>Date</h3>
            <input type='date'/>
            </div>
            <div>
            <h3>Assign to</h3>
            <input type='text' placeholder='employe name'/>
            </div>
            <div>
            <h3>Category</h3>
            <input type='text' placeholder='design, dev, etc'/>
            </div>
          
            <button>Create Task</button>
        </form>
    </div>

    </div>
  )
}

export default AdminDashboard
