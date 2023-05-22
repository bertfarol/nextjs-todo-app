import { useState} from "react";
import TaskTable from "./components/TaskTable";
import InputTask from "./components/InputTask";

export default function TodoListTable({ tasks:tasksProp }) {
  const [inputValue, setInputValue] = useState("");
  const [updatedTask, setUpdatedTask] = useState(tasksProp);

  const pendingTaskCtr = updatedTask.filter(
    (task) => task.completed === false
  ).length;

  /* Create */
  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 100 + 1),
      details: inputValue,
      date: "sample date",
      completed: false,
    };
    setUpdatedTask([...updatedTask, newTask]);
    setInputValue("");
  };

  /* Update Completed */
  const handleCompletedTask = (taskId, isCompleted) => {
    const updateCompletedTask = updatedTask.map((task) => {
      if (task._id === taskId) return { ...task, completed: !isCompleted };
      return task;
    });
    setUpdatedTask(updateCompletedTask);
  };

  /* Update Task Details */
  const handleUpdateTask = (taskId, updatedDetails) => {
    const updateTask = updatedTask.map((task) => {
      if (task._id === taskId) return { ...task, details: updatedDetails };
      return task;
    });
    setUpdatedTask(updateTask);
  };

  /* Delete Single Task */
  const handleDeleteTask = (taskId) => {
    const deletedTask = (task) => task.filter((task) => task._id !== taskId);
    setUpdatedTask(deletedTask);
  };

  /* Delete All Task */
  const handleDeleteAll = () => {
    setUpdatedTask([]);
  };

  return (
    <div
      id="task-card"
      className="relative max-w-2xl p-3 bg-white shadow-2xl lg:p-6 rounded-xl"
    >
      <InputTask
        inputValue={inputValue}
        onTextInputChange={setInputValue}
        onSubmit={handleAddTask}
        pendingTask={pendingTaskCtr}
      />
      <TaskTable
        tasks={updatedTask}
        onTaskRemove={handleDeleteTask}
        onTaskComplete={handleCompletedTask}
        onTaskUpdate={handleUpdateTask}
        onClearAll={handleDeleteAll}
      />
    </div>
  );
}