import { useState, useEffect } from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import TaskMenu from "./TaskMenu";
import { currentDate } from "@/common/utils/date";

export default function TaskRow({
  task,
  onTaskComplete,
  onTaskRemove,
  onTaskUpdate,
  onOpenModal,
}) {
  // const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(currentDate(task._createdAt));
  }, []);

  // const handleModalOpen = (task, taskId) => {
  //   document.getElementById("task-card").classList.toggle("modal-open");
  //   setOpenModal(!openModal);
  // };

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
              <p className="pt-0.5">{date}</p>
              <p className="pt-0.5">{task.completed}</p>
            </div>
          </div>
          <TaskMenu
            onRemove={onTaskRemove}
            onUpdate={onTaskComplete}
            onEdit={() => onOpenModal(task._id, task.details)}
          />
        </div>
        {/* {openModal && (
          <ModalUpdateTask
            taskId={task._id}
            task={task.details}
            onEdit={onTaskUpdate}
            onCancel={handleModalOpen}
          />
        )} */}
      </div>
    </>
  );
}
