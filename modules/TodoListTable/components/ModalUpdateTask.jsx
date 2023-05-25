import { useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Button from "@/common/components/Button";
import TextInput from "@/common/components/TextInput";


export default function ModalUpdateTask({ task, taskId, onEdit, onCancel }) {
  const [updatedTask, setUpdatedTask] = useState(task);

  const onSubmit = (e) => {
    e.preventDefault();
    onEdit(taskId, updatedTask);
  };

  return (
    <div className="w-11/12 lg:w-1/3 absolute top-[100px] left-[50%] translate-x-[-50%] shadow-md z-10 bg-white rounded-md">
      <div className="px-4 pt-2.5 pb-2 border-b flex items-center">
        <PencilSquareIcon className="w-5 h-5 mr-1 mb-0.5 text-blue-500" />
        <h2 className="text-lg font-bold text-gray-500 uppercase">Edit</h2>
      </div>
      <form onSubmit={onSubmit} className="p-4">
        <div className="mb-4">
          <p className="text-sm text-gray-400 pl-0.5">Details</p>
          <TextInput
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
            placeholder={task}
          />
        </div>
        <div className="flex justify-end">
          <Button
            type="button"
            style="secondary"
            onClick={onCancel}
            btnName="Cancel"
            className="mr-3"
          />
          <Button type="submit" btnName="Update" />
        </div>
      </form>
    </div>
  );
}
