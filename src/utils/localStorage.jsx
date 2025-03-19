localStorage.clear();

const employees = [
  {
    "id": 1,
    "email": "emp1@gmail.com",
    "password": "123",
    "name": "Alice Johnson",
    "taskCounts": {
      "accepted": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": true,
        "taskTitle": "Design Homepage UI",
        "taskDescription": "Create a responsive homepage design for the web app.",
        "taskDate": "2024-12-30",
        "category": "UI/UX Design"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true,
        "taskTitle": "Make YouTube",
        "taskDescription": "Do Podcast",
        "taskDate": "2024-10-11",
        "category": "Meet new person"
      },
      {
        "active": false,
        "newTask": true,
        "completed": true,
        "failed": true,
        "taskTitle": "Learn React",
        "taskDescription": "Create a responsive UMS.",
        "taskDate": "2024-12-13",
        "category": "Web Design"
      }
    ]
  },
  {
    "id": 2,
    "email": "emp2@gmail.com",
    "password": "456",
    "name": "Bob Smith",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Develop API Endpoints",
        "taskDescription": "Create RESTful endpoints for the app backend.",
        "taskDate": "2024-12-15",
        "category": "Backend Development"
      },
      {
        "active": false,
        "newTask": true,
        "completed": true,
        "failed": false,
        "taskTitle": "Database Optimization",
        "taskDescription": "Optimize database queries for better performance.",
        "taskDate": "2024-11-20",
        "category": "Database Management"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true,
        "taskTitle": "Fix UI Bugs",
        "taskDescription": "Resolve UI bugs reported by QA.",
        "taskDate": "2024-12-05",
        "category": "UI/UX Design"
      }
    ]
  },
  {
    "id": 3,
    "email": "emp3@gmail.com",
    "password": "789",
    "name": "Charlie Brown",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Landing Page",
        "taskDescription": "Design and develop a dynamic landing page.",
        "taskDate": "2024-11-30",
        "category": "Web Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review and approve pull requests.",
        "taskDate": "2024-12-01",
        "category": "Code Review"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Testing Automation",
        "taskDescription": "Write automation scripts for testing.",
        "taskDate": "2024-12-10",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 4,
    "email": "emp4@gmail.com",
    "password": "012",
    "name": "Diana Prince",
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Implement Authentication",
        "taskDescription": "Add OAuth 2.0 authentication to the app.",
        "taskDate": "2024-12-22",
        "category": "Security"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Server Maintenance",
        "taskDescription": "Conduct routine server maintenance.",
        "taskDate": "2024-12-05",
        "category": "IT Support"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create User Guide",
        "taskDescription": "Write a comprehensive user guide for clients.",
        "taskDate": "2024-12-20",
        "category": "Technical Writing"
      }
    ]
  }
];

  
  
const admin = [
        {
            "id": 6,
            "email": "eva.adams@example.com",
            "password": "123"
          }
];


export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees)); // ✅ Corrected `.setItem()` method
  localStorage.setItem('admin', JSON.stringify(admin));         // ✅ Corrected `.setItem()` method
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const admin = JSON.parse(localStorage.getItem('admin')) || [];
  return { employees, admin };
};
 