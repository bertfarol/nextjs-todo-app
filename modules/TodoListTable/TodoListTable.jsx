import { useEffect, useState } from "react";
import TaskTable from "./components/TaskTable";
import InputTask from "./components/InputTask";

export default function TodoListTable({ apiData, mutate }) {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState(null);

  useEffect(() => {
    setTodoList(apiData);
    console.log("updated api data");
  }, [apiData]);

  const handleUpdateData = async () => {
    console.log("Data is updated!");
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTodos`);
    mutate(); // Re-fetch the data
  };

  const pendingTaskCtr =
    apiData && apiData.filter((task) => task.completed === false).length;

  /* Delete Single Task */
  // const handleDeleteTask = async (taskId) => {
  //   try {
  //     console.log("deleting on process...");
  //     const response = await deleteItem(taskId);

  //     console.log(response);
  //     if (response.status === 200) {
  //     } else {
  //       console.error("Error deleting item:", response);
  //     }

  //   } catch (error) {
  //     console.error("Error deleting task:", error);
  //   } finally {
  //     console.log("successfully deleted!");
  //     handleUpdateData();
  //   }
  // };

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
        tasks={todoList}
        onTaskRemove={handleDeleteTask}
        onTaskComplete={handleCompletedTask}
        onTaskUpdate={handleUpdateTask}
        onClearAll={handleDeleteAll}
      />
    </div>
  );
}
