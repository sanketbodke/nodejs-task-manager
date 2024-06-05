import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    category: {
        type: String,
        enum: ['Work', 'Personal' ,'Study'],
    },

    dueDate: {
      type: Date,
    },

}, {timestamps: true})

export const Task = mongoose.model("Task", TaskSchema)