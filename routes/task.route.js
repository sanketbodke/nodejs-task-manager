import { Router} from "express";

import {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask,
    taskMarkAsComplete,
    getCategoriesData
} from "../controller/task.controller.js"

const router = Router()

router.route("/").get(getAllTasks)
router.route("/").post(createTask)
router.route("/:id").delete(deleteTask)
router.route("/:id").put(updateTask)
router.route("/complete/:id").post(taskMarkAsComplete)
router.route("/category/:category").get(getCategoriesData)

export default router;