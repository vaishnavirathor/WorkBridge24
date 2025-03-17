localStorage.clear();

const employees =
  [
    {
      "id": 1,
      "email": "emp1@gmail.com",
      "password": "123",
      "tasks": [
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
        }
      ]
    },
    {
      "id": 2,
      "email": "emp2@gmail.com",
      "password": "456",
      "tasks": [
        {
          "name": "John Doe",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "API Integration",
          "taskDescription": "Integrate third-party payment gateway for the checkout flow.",
          "taskDate": "2024-12-28",
          "category": "Backend Development"
        }
      ]
    },
    {
      "id": 3,
      "email": "emp3@gmail.com",
      "password": "789",
      "tasks": [
        {
          "name": "Emma Williams",
          "active": false,
          "newTask": true,
          "completed": true,
          "failed": false,
          "taskTitle": "Create Product Listings",
          "taskDescription": "Develop dynamic product listing pages using React.",
          "taskDate": "2024-12-20",
          "category": "Frontend Development"
        }
      ]
    },
    {
      "id": 4,
      "email": "emp4@gmail.com",
      "password": "abc",
      "tasks": [
        {
          "name": "Michael Brown",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Database Migration",
          "taskDescription": "Migrate data from MySQL to MongoDB for better scalability.",
          "taskDate": "2024-12-15",
          "category": "Database Management"
        }
      ]
    },
    {
      "id": 5,
      "email": "emp5@gmail.com",
      "password": "xyz",
      "tasks": [
        {
          "name": "Sophia Lee",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Implement Authentication",
          "taskDescription": "Add JWT-based authentication with role-based access control.",
          "taskDate": "2024-12-22",
          "category": "Security"
        }
      ]
    }
  ]
  
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
 