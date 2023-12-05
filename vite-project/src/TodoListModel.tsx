import React from "react";
import mongoose from "mongoose";
export default function TodoListModel() {
  const todoListSchema = new mongoose.Schema({
    taskDesc: { type: String, required: true },
    priority: {
      type: String,
      required: true,
    },
    owener: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      required: true,
    },
    taskDeadline: {
      type: Date,
      required: true,
    },
  });

  const todoList = mongoose.model("TodoList", todoListSchema);
  return todoList;
}
