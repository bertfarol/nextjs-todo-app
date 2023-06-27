import { useState } from "react";
import TaskTable from "./components/TaskTable";
import InputTask from "./components/InputTask";
import ModalUpdateTask from "./components/ModalUpdateTask";
import {
  addTodo,
  completedTask,
  deleteTask,
  updateTask,
} from "./lib/todoUtils";
import Layout from "./Layout";
import { toast } from "react-hot-toast";
import Button from "@/common/components/Button";

export default function TodoListTable({ apiData, mutate }) {
  const [userInput, setUserInput] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const handleUpdateData = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTodos`);
    mutate(); // Re-fetch the data
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

  /* Delete Single Task */
  const handleDeleteTask = async (taskId) => {
    toast(
      (t) => (
        <span>
          Are you sure?
          <Button
            btnName="Yes"
            onClick={() => {
              toast.dismiss(t.id);
              deleteTask(taskId, handleUpdateData);
            }}
            className="ml-2"
          />
        </span>
      ),
      {
        duration: 10000,
      }
    );
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

  const pendingTaskCtr = apiData.filter(
    (task) => task.completed === false
  ).length;

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
      <Layout>
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
          onOpenModal={handleModal}
        />
      </Layout>
    </>
  );
}
