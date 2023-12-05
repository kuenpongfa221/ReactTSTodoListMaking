import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function TodoList() {
  const [listOfTodos, setListOfTodos] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/getTodoList").then((res: any) => {
      setListOfTodos(res.data);
    });
  }, []);

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
            <tbody>
              <tr>
                <td>{todo.taskDesc}</td>
                <td>{todo.priority}</td>
                <td>{todo.owener}</td>
                <td>{todo.department}</td>
                <td>{todo.complete}</td>
                <td>{todo.taskDeadline}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
