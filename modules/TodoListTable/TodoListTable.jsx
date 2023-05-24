import { useState } from "react";
import TaskTable from "./components/TaskTable";
import InputTask from "./components/InputTask";

export default function TodoListTable({ apiData, mutate }) {
  const [userInput, setUserInput] = useState("");

  const handleUpdateData = async () => {
    console.log("Data is updated!");
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTodos`);
    mutate(); // Re-fetch the data
  };

  /* Delete Single Task */
  const handleDeleteTask = async (taskId) => {
    try {
      console.log("deleting on process..."); // TODO: replace this
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/deleteTodo`, {
        method: "post",
        body: JSON.stringify({ id: taskId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      mutate();
    } catch (error) {
      console.error("Error deleting task:", error);
    } finally {
      console.log("successfully deleted!"); // TODO: replace this
      handleUpdateData();
    }
  };

  /* Delete All Task */
  const handleDeleteAll = () => {
    setTodoList([]);
  };

  /* Create */
  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      setUserInput("");
      console.log("Add new task on process..."); // TODO: replace this
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/createTodo`, {
        method: "post",
        body: JSON.stringify({ details: userInput }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      mutate();
    } catch (error) {
      console.error("Error adding task:", error);
    } finally {
      console.log("successfully Added!"); // TODO: replace this
      handleUpdateData();
    }
  };

  /* Update Task Details */
  const handleUpdateTask = async (taskId, updatedDetails) => {
    try {
      console.log("Updating task on process..."); // TODO: replace this
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/updateTodo`, {
        method: "post",
        body: JSON.stringify({ id: taskId, details: updatedDetails }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      mutate();
    } catch (error) {
      console.error("Error updating task:", error);
    } finally {
      console.log("successfully Updated!"); // TODO: replace this
      handleUpdateData();
    }
  };

  /* Update Completed */
  const handleCompletedTask = async (taskId, isCompleted) => {
    console.log(isCompleted);
    try {
      console.log("Updating task on process..."); // TODO: replace this
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/updateTodo`, {
        method: "post",
        body: JSON.stringify({
          id: taskId,
          completed: isCompleted,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      mutate();
    } catch (error) {
      console.error("Error updating task:", error);
    } finally {
      console.log("successfully Updated!"); // TODO: replace this
      handleUpdateData();
    }
  };

  const pendingTaskCtr =
    apiData && apiData.filter((task) => task.completed === false).length;

  return (
    <div
      id="task-card"
      className="relative max-w-2xl p-3 bg-white shadow-2xl lg:p-6 rounded-xl"
    >
      <InputTask
        userInput={userInput}
        onTextInputChange={setUserInput}
        onSubmit={handleAddTask}
        pendingTask={pendingTaskCtr}
      />
      <TaskTable
        tasks={apiData}
        onTaskRemove={handleDeleteTask}
        onTaskComplete={handleCompletedTask}
        onTaskUpdate={handleUpdateTask}
        onClearAll={handleDeleteAll}
      />
    </div>
  );
}
