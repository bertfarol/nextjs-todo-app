import { useState } from "react";
import ButtonClear from "@/components/ButtonClear";
import InputTask from "@/components/InputTask";
import TaskRow from "@/components/TaskRow";
import { currentDate } from "../utils/date";

const APITASK = [
  {
    id: 1,
    details: "Sample Task: create todo app using next js",
    date: "18 May 2023",
    completed: false,
  },
];

export default function TaskTable() {
  const [task, setTask] = useState(APITASK);
  const [inputValue, setInputValue] = useState("");
  const dateToday = new Date();

  /* Input task field  */
  const inputTask = (e) => {
    setInputValue(e.target.value);
  };

  /* Create */
  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 100 + 1),
      details: inputValue,
      date: currentDate(dateToday),
      completed: false,
    };
    setTask([...task, newTask]);
    setInputValue("");
  };

  /* Update */
  // update if that is completed or pending
  const handleCompletedTask = (taskId, isCompleted) => {
    const updateCompletedTask = task.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !isCompleted };
      }
      return task;
    });
    setTask(updateCompletedTask);
  };

  // update task details
  const handleUpdateTask = (taskId, updatedDetails) => {
    const updateTask = task.map((task) => {
      if (task.id === taskId) return { ...task, details: updatedDetails };
      return task;
    });
    setTask(updateTask);
  };

  /* Delete */
  const handleRemoveTask = (taskId) => {
    setTask((task) => task.filter((task) => task.id !== taskId));
  };

  /* Reset all task */
  const handleClearTask = () => {
    setTask([]);
  };

  /* Pending task counter */
  const pendingTaskCtr = task.filter((task) => task.completed === false).length;

  return (
    <div id="task-card" className="relative max-w-2xl p-3 bg-white shadow-2xl lg:p-6 rounded-xl">
      <InputTask
        onSubmit={handleAddTask}
        onChange={inputTask}
        taskValue={inputValue}
        pendingTask={pendingTaskCtr}
      />
      {task.length > 0 && (
        <TaskRow
          task={task}
          onUpdate={handleCompletedTask}
          onRemove={handleRemoveTask}
          onEdit={handleUpdateTask}
        />
      )}
      {task.length > 0 && <ButtonClear onClick={handleClearTask} />}
    </div>
  );
}
