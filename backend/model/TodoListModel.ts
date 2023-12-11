import mongoose from "mongoose";

//export default function TodoListModel() {
const todoListSchema = new mongoose.Schema({
  taskDesc: { type: String, required: true },
  priority: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  complete: {
    type: String,
    required: true,
  },
  taskDeadline: {
    type: String,
    required: true,
  },
});

const todoListModel = mongoose.model("todolist", todoListSchema);
//return todoList;
//}

export { todoListModel };
