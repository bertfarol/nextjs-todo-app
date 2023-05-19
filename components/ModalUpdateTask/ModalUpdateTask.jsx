import { useState } from "react";

export default function ModalUpdateTask({ task, taskId, onEdit, onCancel }) {
  const [updatedTask, setUpdatedTask] = useState(task);

  const onUpdate = (e) => {
    e.preventDefault();
    onEdit(taskId, updatedTask);
    onCancel();
  }

  return (
    <div className="w-full lg:w-10/12 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md z-10 bg-white rounded-md">
      <div className="px-4 pt-2 border-b">
        <h2 className="mb-1 text-lg font-bold text-gray-500 uppercase">
          Update Task
        </h2>
      </div>
      <form onSubmit={onUpdate} className="p-4">
        <div className="mb-4">
          <p className="text-sm text-gray-400 pl-0.5">Details</p>
          <input
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
            placeholder={task}
            type="text"
            className="w-full px-2.5 py-1.5 bg-gray-100/80 border rounded-md outline-none grow focus:bg-transparent"
          />
        </div>
        <div className="flex justify-end">
          <div
            onClick={onCancel}
            className="px-3 py-1 mr-3 text-base text-gray-500 bg-transparent border border-gray-200 rounded-md cursor-pointer"
          >
            Cancel
          </div>
          <button
            type="submit"
            className="px-3 py-1 text-base text-white duration-300 bg-green-700 border border-green-700 rounded-md hover:shadow-md hover:bg-green-700/90 hover:border-green-700/90"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
