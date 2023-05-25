import { useState } from "react";
import TaskTable from "./components/TaskTable";
import InputTask from "./components/InputTask";
import ModalUpdateTask from "./components/ModalUpdateTask";
import { addTodo, completedTask, deleteTask, updateTask } from "./lib/todoFunction";

export default function TodoListTable({ apiData, mutate }) {
  const [userInput, setUserInput] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const handleUpdateData = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTodos`);
    mutate(); // Re-fetch the data
  };

  /* Delete Single Task */
  const handleDeleteTask = async (taskId) => {
    deleteTask(taskId, handleUpdateData);
  };

  /* Delete All Task */
  const handleDeleteAll = () => {
    setTodoList([]);
  };

  /* Create */
  const handleAddTask = async (e) => {
    e.preventDefault();
    setUserInput("");
    addTodo(userInput, handleUpdateData);
  };

  /* Update Task */
  const handleUpdateTask = async (taskId, updatedDetails) => {
    const task = { id: taskId, details: updatedDetails };
    updateTask(task, mutate, handleUpdateData, handleModal);
  };

  /* Completed Task */
  const handleCompletedTask = async (taskId, isCompleted) => {
    const task = { id: taskId, completed: isCompleted };
    completedTask(task, mutate, handleUpdateData);
  };

  /* Modal Update */
  const handleModal = (taskId, taskDetails) => {
    document.body.classList.toggle("modal-open");
    setOpenModal(!openModal);
    setModalProps({
      id: taskId,
      details: taskDetails,
    });
  };

  const pendingTaskCtr = apiData.filter((task) => task.completed === false).length;

  return (
    <>
      {openModal && (
        <ModalUpdateTask
          taskId={modalProps.id}
          task={modalProps.details}
          onEdit={handleUpdateTask}
          onCancel={handleModal}
        />
      )}
      <div
        id="task-card"
        className="mx-auto relative max-w-2xl p-3 lg:pb-8 bg-white shadow-2xl lg:p-6 rounded-xl"
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
          onOpenModal={handleModal}
        />
      </div>
    </>
  );
}
