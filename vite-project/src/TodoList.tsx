import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function TodoList() {
  const [listOfTodos, setListOfTodos] = useState<any>([]);
  const [taskDesc, setTaskDesc] = useState("");
  const [priority, setPriority] = useState("");
  const [owner, setOwner] = useState("");
  const [department, setDepartment] = useState("");
  const [complete, setComplete] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3000/getTodoList").then((res: any) => {
      setListOfTodos(res.data);
    });
  }, []);

  const createTodoList = () => {
    Axios.post("http://localhost:3000/createTodoList", {
      taskDesc,
      priority,
      owner,
      department,
      complete,
      taskDeadline,
    }).then((res) => {
      // alert("Create User successfully!");
      setListOfTodos([
        ...listOfTodos,
        { taskDesc, priority, owner, department, complete, taskDeadline },
      ]);
    });
  };

  const deleteItem = (id: any) => {};

  return (
    <div>
      <button>Add Record</button>
      <button>Filter</button>
      <button>Sort</button>
      <table border={1} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Task Description</th>
            <th>Priority</th>
            <th>Owner</th>
            <th>Department</th>
            <th>Complete</th>
            <th>Task Deadline</th>
          </tr>
        </thead>
        {listOfTodos.map((todo: any) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>{todo.taskDesc}</td>
                  <td>{todo.priority}</td>
                  <td>{todo.owner}</td>
                  <td>{todo.department}</td>
                  <td>{todo.complete}</td>
                  <td>{todo.taskDeadline}</td>
                </tr>
              </tbody>
              <button
                className="delete-item"
                onClick={() => {
                  deleteItem(todo._id);
                }}
              >
                Delete
              </button>
            </>
          );
        })}
      </table>

      <div>
        <input
          type="text"
          placeholder="task description..."
          onChange={(event) => {
            setTaskDesc(event.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="priority..."
          onChange={(event) => {
            setPriority(event.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="owner..."
          onChange={(event) => {
            setOwner(event.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="department..."
          onChange={(event) => {
            setDepartment(event.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="complete..."
          onChange={(event) => {
            setComplete(event.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="task deadline..."
          onChange={(event) => {
            setTaskDeadline(event.target.value);
          }}
        ></input>
        <button onClick={createTodoList}>Add</button>
      </div>
    </div>
  );
}
