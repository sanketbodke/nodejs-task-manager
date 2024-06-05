# Task Management API

This is a Task Management API built with Node.js, Express, and MongoDB. It allows you to create, read, update, delete, and manage tasks with due dates and categories.

## Features

- Create a new task
- Get all tasks
- Update a task
- Delete a task
- Mark a task as complete
- Get tasks by category

## Live Demo

The application is deployed on Render and can be accessed [here](https://nodejs-task-manager-kyvc.onrender.com).

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance running

### Installation

1. Clone the repository:
   ```bash
   https://github.com/sanketbodke/nodejs-task-manager.git

2. Install dependencies:

   ```bash
   npm install

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
The server will start on http://localhost:3001

### API Endpoints
**Base URL**

   ```bash
   http://localhost:3001/api/v1/task
   ```

**Endpoints**
Get All Tasks
* URL: /
* Method: GET
* Description: Retrieves all tasks.
* Response 

   ```bash
   {
    "status": 200,
    "data": [ ... ],
    "message": "All tasks fetched successfully"
   }
   ```

Create Task
* URL: /
* Method: POST
* Description: Creates a new task.
* Body:
   ```bash
   {
    "title": "Task Title",
    "description": "Task Description",
    "category": "Task Category",
    "dueDate": "2024-12-12"
  }
   ```
* Response:
   ```bash
   {
    "status": 200,
    "data": [ ... ],
    "message": "Task created successfully"
   }
   ```
Update Task
* URL: /:id
* Method: PUT
* Description: Updates a task by ID.
* Body
   ```bash
    {
      "title": "Updated Title",
      "description": "Updated Description", 
      "category": "Updated Category",
      "dueDate": "2024-12-13"
    }
   ```
* Response:
   ```bash
   {
    "status": 200,
    "data": [ ... ],
    "message": "Task updated successfully"
   }
   ```
Delete Task
* URL: /:id
* Method: DELETE
* Description: Deletes a task by ID.
* Response:
   ```bash
   {
    "status": 204,
    "message": "Task deleted successfully"
   }
   ```

Mark Task as Complete
* URL: /complete/:id
* Method: POST
* Description: Marks a task as complete by ID.
* Body
   ```bash
    {
      "complete": true 
    }
* Response:
    ```bash
     {
        "status": 200,
        "data": { ... },
        "message": "Task marked as completed"
     }
    ```
Get Tasks by Category
* URL: /category/:category
* Method: GET
* Description: Retrieves tasks by category.
* Response:
    ```bash
     {
        "status": 200,
        "data": { ... },
        "message": "Task fetched successfully"
     }
    ```

### Project Structure
        task-management/
        ├── controllers/
        │   └── task.controller.js
        ├── db/
        │   └── index.js
        ├── models/
        │   └── task.model.js
        ├── routes/
        │   └── task.routes.js
        ├── utils/
        │   ├── ApiError.js
        │   ├── ApiResponse.js
        │   └── asyncHandler.js
        ├── package.json
        ├── package-lock.json
        └── README.md