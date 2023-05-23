import { useEffect, useState } from "react";
import TaskTable from "./components/TaskTable";
import InputTask from "./components/InputTask";
import { deleteItem, getAllData } from "@/sanity/lib/api";

export default function TodoListTable({ apiData, onRefresh }) {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState(apiData);

  const fetchData = async () => {
    try {
      const itemsData = await getAllData();
      setTodoList(itemsData);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const pendingTaskCtr = todoList.filter(
    (task) => task.completed === false
  ).length;

  /* Create */
  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 100 + 1),
      details: userInput,
      date: "sample date",
      completed: false,
    };
    setTodoList([...todoList, newTask]);
    setUserInput("");
  };

  /* Update Completed */
  const handleCompletedTask = (taskId, isCompleted) => {
    const updateCompletedTask = todoList.map((task) => {
      if (task._id === taskId) return { ...task, completed: !isCompleted };
      return task;
    });
    setTodoList(updateCompletedTask);
  };

  /* Update Task Details */
  const handleUpdateTask = (taskId, updatedDetails) => {
    const updateTask = todoList.map((task) => {
      if (task._id === taskId) return { ...task, details: updatedDetails };
      return task;
    });
    setTodoList(updateTask);
  };

  /* Delete Single Task */
  const handleDeleteTask = async (taskId) => {
    try {
      console.log("deleting on process...");
      const response = await deleteItem(taskId);

      if (response.status === 200) {
        fetchData();
        console.log("re-fetch data");
      } else {
        console.error("Error deleting item:", response);
      }

      console.log("I think its refetching...");
    } catch (error) {
      console.error("Error deleting task:", error);
    } finally {
      console.log("successfully deleted!");
    }
  };

  /* Delete All Task */
  const handleDeleteAll = () => {
    setTodoList([]);
  };

  return (
    <div
      id="task-card"
      className="relative max-w-2xl p-3 bg-white shadow-2xl lg:p-6 rounded-xl"
    >
      <button className="p-2 text-white bg-black" onClick={fetchData}>
        Refresh
      </button>
      <InputTask
        userInput={userInput}
        onTextInputChange={setUserInput}
        onSubmit={handleAddTask}
        pendingTask={pendingTaskCtr}
      />
      <TaskTable
        tasks={todoList}
        onTaskRemove={handleDeleteTask}
        onTaskComplete={handleCompletedTask}
        onTaskUpdate={handleUpdateTask}
        onClearAll={handleDeleteAll}
      />
    </div>
  );
}
