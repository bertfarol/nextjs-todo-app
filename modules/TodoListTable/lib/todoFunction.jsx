import { toast } from "react-hot-toast";

/**Delete Single Task*/
export const deleteTask = async (taskId, handleUpdateData) => {
  const deleteToast = toast.loading("Loading...");
  try {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/deleteTodo`, {
      method: "post",
      body: JSON.stringify({ id: taskId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // mutate();
  } catch (error) {
    console.error("Error deleting task:", error);
  } finally {
    toast.success("successfully deleted!", { id: deleteToast });
    handleUpdateData();
  }
};

/**Add New Task*/
export const addTodo = async (newDetails, handleUpdateData) => {
  const taskToast = toast.loading("Add new task...");
  try {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/createTodo`, {
      method: "post",
      body: JSON.stringify({ details: newDetails }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // mutate();
  } catch (error) {
    console.error("Error adding task:", error);
  } finally {
    toast.success("successfully Added!.", { id: taskToast });
    handleUpdateData();
  }
};

/**Update Task*/
export const updateTask = async (
  task,
  mutate,
  handleUpdateData,
  handleModal
) => {
  const notification = "Task updated successfully!";
  await performTaskUpdate(
    task.id,
    { details: task.details },
    notification,
    mutate,
    handleUpdateData
  );
  handleModal();
};

/**Update Completed Task*/
export const completedTask = async (task, mutate, handleUpdateData) => {
  let notification = task.completed ? "New completed task" : "Undo";
  await performTaskUpdate(
    task.id,
    { completed: task.completed },
    notification,
    mutate,
    handleUpdateData
  );
};

const performTaskUpdate = async (
  taskId,
  updateData,
  notification,
  mutate,
  handleUpdateData
) => {
  const updateToast = toast.loading("Loading...");
  try {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/updateTodo`, {
      method: "post",
      body: JSON.stringify({
        id: taskId,
        ...updateData,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    mutate();
    handleUpdateData();
    toast.success(notification, { id: updateToast });
  } catch (error) {
    console.error("Error updating task:", error);
  }
};
