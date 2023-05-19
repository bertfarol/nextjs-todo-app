import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import TextInput from "../TextInput";
import Button from "../Button";
import Form from "../Form";

export default function ModalUpdateTask({ task, taskId, onEdit, onCancel }) {
  const [updatedTask, setUpdatedTask] = useState(task);

  const onSubmit = (e) => {
    e.preventDefault();
    onEdit(taskId, updatedTask);
    onCancel();
  };

  return (
    <div className="w-full lg:w-10/12 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md z-10 bg-white rounded-md">
      <div className="px-4 pt-2.5 pb-2 border-b flex items-center">
        <PencilSquareIcon className="w-5 h-5 mr-1 mb-0.5 text-blue-500" />
        <h2 className="text-lg font-bold text-gray-500 uppercase">Edit</h2>
      </div>
      <Form onSubmit={onSubmit} className="p-4">
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
            children="Cancel"
            className="mr-3"
          />
          <Button type="submit" children="Update" />
        </div>
      </Form>
    </div>
  );
}
