const employees =[
  {
    "name": "Alice Johnson",
    "active": true,
    "newTask": true,
    "completed": false,
    "failed": false,
    "taskTitle": "Design Homepage UI",
    "taskDescription": "Create a responsive homepage design for the web app.",
    "taskDate": "2024-12-30",
    "category": "UI/UX Design"
  },
  {
    "name": "Bob Smith",
    "active": true,
    "newTask": false,
    "completed": true,
    "failed": false,
    "taskTitle": "Develop Backend API",
    "taskDescription": "Implement user authentication and data management APIs.",
    "taskDate": "2024-12-28",
    "category": "Backend Development"
  },
  {
    "name": "Charlie Brown",
    "active": false,
    "newTask": true,
    "completed": false,
    "failed": true,
    "taskTitle": "Database Optimization",
    "taskDescription": "Improve query performance for faster data retrieval.",
    "taskDate": "2024-12-25",
    "category": "Database Management"
  },
  {
    "name": "Dana White",
    "active": true,
    "newTask": false,
    "completed": false,
    "failed": true,
    "taskTitle": "Email Campaign Analysis",
    "taskDescription": "Analyze email campaign performance for better engagement.",
    "taskDate": "2024-12-22",
    "category": "Marketing"
  },
  {
    "name": "Ethan Hunt",
    "active": false,
    "newTask": false,
    "completed": true,
    "failed": false,
    "taskTitle": "Create Project Documentation",
    "taskDescription": "Prepare comprehensive documentation for the project.",
    "taskDate": "2024-12-20",
    "category": "Documentation"
  }
]; // <-- Closing bracket added here
const admin = [
        {
            "id": 6,
            "email": "eva.adams@example.com",
            "password": "123"
          }
];

export const setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.admin('employees',JSON.stringify(admin))
localStorage
  }
export const getLocalStorage =()=>{
 const employees = JSON.parse(localStorage.getItem('employees'))
 const admin = JSON.parse(localStorage.getItem('admin'))  
 console(employees,admin);
}