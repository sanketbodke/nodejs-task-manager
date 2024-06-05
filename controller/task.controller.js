import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Task } from "../models/task.model.js";

// Get all tasks
const getAllTasks = asyncHandler(async (_, resp) => {
    const tasks = await Task.find();

    if (tasks.length === 0) {
        throw new ApiError(404, "No tasks found");
    }

    return resp.status(200).json(
        new ApiResponse(200, tasks, "All tasks fetched successfully")
    );
});

// Create task
const createTask = asyncHandler(async (req, resp) => {
    const { title } = req.body;

    if (!title || title.trim() === "") {
        throw new ApiError(400, "Task title cannot be empty");
    }

    const task = new Task(req.body);
    const newTask = await task.save();

    return resp.status(201).json(
        new ApiResponse(201, newTask, "Task created successfully")
    );
});

// Delete task
const deleteTask = asyncHandler(async (req, resp) => {
    const taskId = req.params.id;
    const task = await Task.findByIdAndDelete(taskId);

    if (!task) {
        throw new ApiError(404, "Task not found");
    }

    return resp.status(200).json(
        new ApiResponse(200, task, "Task deleted successfully")
    );
});

// Update task
const updateTask = asyncHandler(async (req, resp) => {
    const taskId = req.params.id;
    const updatedFields = req.body;

    const updatedTask = await Task.findByIdAndUpdate(taskId, updatedFields, { new: true });

    if (!updatedTask) {
        throw new ApiError(404, "Task not found or error in updating task");
    }

    return resp.status(200).json(
        new ApiResponse(200, updatedTask, "Task updated successfully")
    );
});

// Mark task as complete
const taskMarkAsComplete = asyncHandler(async (req, resp) => {
    const taskId = req.params.id;

    const task = await Task.findById(taskId);

    if (!task) {
        throw new ApiError(404, "Task not found");
    }

    if (task.completed) {
        throw new ApiError(400, "Task already marked as completed");
    }

    task.completed = true;
    await task.save();

    return resp.status(200).json(
        new ApiResponse(200, task, "Task marked as completed")
    );
});

// get categories data

const getCategoriesData = asyncHandler(async (req, resp) => {
    const category = req.params.category

    const categoryTasks = await Task.find({category})

    if (categoryTasks.length === 0) {
        throw new ApiError(404, "No tasks found");
    }

    return resp.status(200).json(
        new ApiResponse(200, categoryTasks, `${category} category tasks`)
    )
})

export {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask,
    taskMarkAsComplete,
    getCategoriesData
};
