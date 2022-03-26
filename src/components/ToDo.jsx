import React, { useState, useEffect } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import axios from "axios";

const ToDo = () => {
  const [task, setTask] = useState("");
  var [taskList, setTaskList] = useState([]);
  const [styleObject, setStyleObject] = useState({ textDecoration: "none" });
  var username = window.localStorage.getItem("username");

  useEffect(() => {
    if (username) {
      async function fetchData() {
        var tasks = await axios.post(
          "   https://dry-stream-49562.herokuapp.com/taskList",
          {
            username,
          }
        );
        console.log(tasks.data);
        setTaskList(tasks.data.tasks);
      }
      fetchData();
    }
  }, []);

  const handleClick = async () => {
    setTaskList([...taskList, task]);

    var task_update = await axios.post(
      "   https://dry-stream-49562.herokuapp.com/tasks",
      {
        task,
        username,
      }
    );
    console.log("task", task_update.data);

    setTask("");
  };
  const handleDelete = async (index) => {
    const filtered_list = taskList.filter((i, index_arr) => {
      return index_arr !== index;
    });
    console.log("filtered_list", filtered_list);
    var task_update = await axios.post(
      "   https://dry-stream-49562.herokuapp.com/tasksDelete",
      {
        filtered_list,
        username,
      }
    );
    setTaskList(filtered_list);
  };
  const handleEdit = async (index) => {
    let task_demo = taskList.splice(index, 1)[0];
    setTask(task_demo);
    const filtered_list = taskList.filter((i, index_arr) => {
      return i !== task_demo;
    });
    var task_update = await axios.post(
      "   https://dry-stream-49562.herokuapp.com/tasksDelete",
      {
        filtered_list,
        username,
      }
    );
    setTaskList(filtered_list);
  };
  return (
    <div className="container-to" id="container-to">
      <div className="to-do-container ">
        <h1 className="todo-title">To-Do List {username && `(${username})`}</h1>
        <p className="warning">
          *Please Log in if you have not! Otherwise to-do tasks will not appear
        </p>
        {username && (
          <div className="toDo-input-container">
            <input
              type="text"
              className="input-todo"
              placeholder="Task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              className="btn btn-primary"
              style={{ marginTop: "7px" }}
              onClick={(e) => handleClick()}
            >
              Submit
            </button>
          </div>
        )}
        <div className="task-container">
          <ul>
            {taskList &&
              taskList.map((i, index) => (
                <li
                  className="task"
                  onClick={() =>
                    setStyleObject({ TextDecoration: "line-through" })
                  }
                  key={index}
                  style={styleObject}
                >
                  <span className="todo-text">{i}</span>

                  <span className="icon-container">
                    <RiDeleteBin5Fill
                      className="delete-icon"
                      onClick={() => handleDelete(index)}
                    ></RiDeleteBin5Fill>
                    <button
                      className="btn-danger"
                      onClick={() => handleEdit(index)}
                    >
                      edit
                    </button>
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
