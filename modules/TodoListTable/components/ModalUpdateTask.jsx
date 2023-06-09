import { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/outline";
import Button from "@/common/components/Button";
import TextInput from "@/common/components/TextInput";


export default function ModalUpdateTask({ task, taskId, onEdit, onCancel }) {
  const [updatedTask, setUpdatedTask] = useState(task);

  const onSubmit = (e) => {
    e.preventDefault();
    onEdit(taskId, updatedTask);
  };

  return (
    <div className="w-11/12 lg:w-1/3 absolute top-[100px] left-[50%] translate-x-[-50%] shadow-lg z-10 bg-white rounded-md">
      <div className="px-4 pt-2.5 pb-2 border-b flex items-center">
        <PencilIcon className="w-5 h-5 mr-2 mb-0.5 text-[#464D52]" />
        <h2 className="text-lg font-medium text-[#464D52]">Edit task</h2>
      </div>
      <form onSubmit={onSubmit} className="p-4">
        <div className="mb-4">
          <p className="text-sm text-gray-400 pl-0.5 mb-2">Details</p>
          <TextInput
            className="text-lg bg-[#ECF1F5] lg:px-4 lg:py-2"
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
