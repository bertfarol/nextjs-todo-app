import { useState } from "react";
import ButtonClear from "@/components/ButtonClear";
import InputTask from "@/components/InputTask";
import TaskRow from "@/components/TaskRow";

const APITASK = [
  {
    id: 1,
    details: "Do next js todo app",
    completed: false,
  },
  {
    id: 2,
    details: "Count for pending task",
    completed: false,
  },
];

export default function TaskTable() {
  const [task, setTask] = useState(APITASK);
  const [inputValue, setInputValue] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  const handleClearTask = () => {
    setTask([]);
  };

  const inputTask = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 100 + 1),
      details: inputValue,
      completed: false,
    };
    setTask([...task, newTask]);
    setInputValue("");
  };

  const handleRemoveTask = (taskId) => {
    setTask((task) => task.filter((task) => task.id !== taskId));
  };

  const handleUpdateTask = (taskId, isCompleted) => {
    const updateTask = task.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !isCompleted };
      }
      return task;
    });
    setTask(updateTask);
  };

  const pendingTaskCtr = task.filter((task) => task.completed === false).length;

  const openTaskMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <div className="max-w-2xl p-3 m-6 bg-white shadow-2xl lg:p-8 lg:m-24 rounded-xl">
      <h1 className="text-2xl font-bold text-gray-500">TODO</h1>
      <InputTask
        onSubmit={handleAddTask}
        onChange={inputTask}
        taskValue={inputValue}
        pendingTask={pendingTaskCtr}
      />
      {task.length > 0 && (
        <TaskRow
          task={task}
          onUpdate={handleUpdateTask}
          onRemove={handleRemoveTask}
        />
      )}
      {task.length > 0 && <ButtonClear onClick={handleClearTask} />}
    </div>
  );
}
