import { useState } from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import ModalUpdateTask from "./ModalUpdateTask";
import TaskMenu from "./TaskMenu";
import { currentDate } from "@/common/utils/date";

export default function TaskRow({
  task,
  onTaskComplete,
  onTaskRemove,
  onTaskUpdate,
}) {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    document.getElementById("task-card").classList.toggle("modal-open");
    setOpenModal(!openModal);
  };

  return (
    <>
      <div
        className={
          (task.completed ? "border-green-600 shadow bg-green-100" : "") +
          " duration-300 border-b py-3 pl-0.5"
        }
      >
        <div className="flex">
          <div className="grow">
            <div
              className={
                (task.completed ? "line-through" : "") +
                " bg-transparent outline-none focus:bg-gray-200/60 px-2 font-bold	"
              }
            >
              {task.details}
            </div>
            <div className="flex items-center px-2 text-sm text-gray-400">
              <CalendarDaysIcon className="w-4 h-4 mr-1" />
              <p className="pt-0.5">{currentDate(task._createdAt)}</p>
              <p className="pt-0.5">{task.completed}</p>
            </div>
          </div>
          <TaskMenu
            onRemove={onTaskRemove}
            onUpdate={onTaskComplete}
            onEdit={handleModalOpen}
          />
        </div>
        {openModal && (
          <ModalUpdateTask
            taskId={task._id}
            task={task.details}
            onEdit={onTaskUpdate}
            onCancel={handleModalOpen}
          />
        )}
      </div>
    </>
  );
}
