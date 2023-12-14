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

  const [isUpdating, setIsUpdating] = useState("");
  const [updateTaskDesc, setUpdateTaskDesc] = useState("");
  const [updatePriority, setUpdatePriority] = useState("");
  const [updateOwner, setUpdateOwner] = useState("");
  const [updateDepartment, setUpdateDepartment] = useState("");
  const [updateComplete, setUpdateComplete] = useState("");
  const [updateTaskDeadline, setUpdateTaskDeadline] = useState("");

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

  const deleteTodoList = async (id: any) => {
    try {
      console.log("Try correnct!!");
      const res = await Axios.delete(
        `http://localhost:3000/deleteTodoList/${id}`
      );
      const newListItems = listOfTodos.filter((todos: any) => todos._id !== id);
      setListOfTodos(newListItems);
    } catch (err) {
      console.log(err);
    }
  };

  //Update item
  const updateItem = async (e: any) => {
    e.preventDefault();
    try {
      const res = await Axios.put(
        `http://localhost:3000/updateTodoList/${isUpdating}`,
        {
          taskDesc: updateTaskDesc,
          priority: updatePriority,
          owner: updateOwner,
          department: updateDepartment,
          complete: updateComplete,
          taskDeadline: updateTaskDeadline,
        }
      );
      console.log(res.data);
      const updatedItemIndex = listOfTodos.findIndex(
        (todo: any) => todo._id === isUpdating
      );
      const updatedTodo = (listOfTodos[updatedItemIndex] = {
        taskDesc: updateTaskDesc,
        priority: updatePriority,
        owner: updateOwner,
        department: updateDepartment,
        complete: updateComplete,
        taskDeadline: updateTaskDeadline,
      });
      setUpdateTaskDesc("");
      setUpdatePriority("");
      setUpdateOwner("");
      setUpdateDepartment("");
      setUpdateComplete("");
      setUpdateTaskDeadline("");

      setIsUpdating("");
    } catch (err) {
      console.log(err);
    }
  };

  //before updating item we need to show input field where we will create our updated item
  const renderUpdateForm = (todo: any) => (
    <tbody>
      <tr>
        <td colSpan={7}>
          <form
            className="update-form"
            onSubmit={(e: any) => {
              updateItem(e);
            }}
          >
            <td>
              <input
                className="update-new-input"
                type="text"
                placeholder="task description..."
                onChange={(e: any) => {
                  setUpdateTaskDesc(e.target.value);
                }}
                value={updateTaskDesc}
              />
            </td>
            <td>
              {" "}
              <input
                className="update-new-input"
                type="text"
                placeholder="priority..."
                onChange={(e: any) => {
                  setUpdatePriority(e.target.value);
                }}
                value={updatePriority}
              />
            </td>
            <td>
              {" "}
              <input
                className="update-new-input"
                type="text"
                placeholder="owner..."
                onChange={(e: any) => {
                  setUpdateOwner(e.target.value);
                }}
                value={updateOwner}
              />
            </td>
            <td>
              {" "}
              <input
                className="update-new-input"
                type="text"
                placeholder="department..."
                onChange={(e: any) => {
                  setUpdateDepartment(e.target.value);
                }}
                value={updateDepartment}
              />
            </td>
            <td>
              {" "}
              <input
                className="update-new-input"
                type="text"
                placeholder="complete..."
                onChange={(e: any) => {
                  setUpdateComplete(e.target.value);
                }}
                value={updateComplete}
              />
            </td>
            <td>
              {" "}
              <input
                className="update-new-input"
                type="text"
                placeholder="taskDeadline..."
                onChange={(e: any) => {
                  setUpdateTaskDeadline(e.target.value);
                }}
                value={updateTaskDeadline}
              />
            </td>
            <td>
              {" "}
              <button className="update-new-btn" type="submit">
                Update
              </button>
            </td>
          </form>
        </td>
      </tr>
    </tbody>
  );

  return (
    <div className="TodoList">
      <div>
        {" "}
        <h1 className="todoListText">TodoList</h1>
      </div>

      <table border={1} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Task Description</th>
            <th>Priority</th>
            <th>Owner</th>
            <th>Department</th>
            <th>Complete</th>
            <th>Task Deadline</th>
            <th className="noBorder"></th>
            <th className="noBorder"></th>
          </tr>
        </thead>
        {listOfTodos.map((todo: any) => {
          return isUpdating === todo._id ? (
            renderUpdateForm(todo)
          ) : (
            <tbody>
              <tr>
                <td>{todo.taskDesc}</td>
                <td>{todo.priority}</td>
                <td>{todo.owner}</td>
                <td>{todo.department}</td>
                <td>{todo.complete}</td>
                <td>{todo.taskDeadline}</td>
                <td className="noBorder">
                  <button
                    className="update-item"
                    onClick={() => {
                      setIsUpdating(todo._id);
                      setUpdateTaskDesc(todo.taskDesc);
                      setUpdatePriority(todo.priority);
                      setUpdateOwner(todo.owner);
                      setUpdateDepartment(todo.department);
                      setUpdateComplete(todo.complete);
                      setUpdateTaskDeadline(todo.taskDeadline);
                    }}
                  >
                    Update
                  </button>
                </td>
                <td className="noBorder">
                  <button
                    className="delete-item"
                    onClick={() => {
                      deleteTodoList(todo._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>

      <div className="addBox">
        <input
          type="text"
          className="addInput"
          placeholder="task description..."
          onChange={(event) => {
            setTaskDesc(event.target.value);
          }}
        ></input>
        <input
          type="text"
          className="addInput"
          placeholder="priority..."
          onChange={(event) => {
            setPriority(event.target.value);
          }}
        ></input>
        <input
          type="text"
          className="addInput"
          placeholder="owner..."
          onChange={(event) => {
            setOwner(event.target.value);
          }}
        ></input>
        <input
          type="text"
          className="addInput"
          placeholder="department..."
          onChange={(event) => {
            setDepartment(event.target.value);
          }}
        ></input>
        <input
          type="text"
          className="addInput"
          placeholder="complete..."
          onChange={(event) => {
            setComplete(event.target.value);
          }}
        ></input>
        <input
          type="text"
          className="addInput"
          placeholder="task deadline..."
          onChange={(event) => {
            setTaskDeadline(event.target.value);
          }}
        ></input>
        <button className="addButton" onClick={createTodoList}>
          Add
        </button>
      </div>
    </div>
  );
}
