import { useState } from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import TaskMenu from "../TaskMenu";
import ModalUpdateTask from "../ModalUpdateTask";

export default function TaskRow({ task, onTaskComplete, onTaskRemove, onTaskUpdate }) {
  const [openModal, setOpenModal] = useState(false);
  
  const handleModalOpen = () => {
    document.getElementById("task-card").classList.toggle("modal-open");
    setOpenModal(!openModal);
  };

  return (
    <>
      <div
        key={task.id}
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
              <p className="pt-0.5">{task.date}</p>
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
            taskId={task.id}
            task={task.details}
            onEdit={onTaskUpdate}
            onCancel={handleModalOpen}
          />
        )}
      </div>

      {/* {task.length > 0 && (
        <div className="mt-4 mb-6">
          {task.map((task) => (
            <div
              key={task.id}
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
                    <p className="pt-0.5">{task.date}</p>
                  </div>
                </div>
                <TaskMenu
                  onRemove={() => onRemove(task.id)}
                  onUpdate={() => onUpdate(task.id, task.completed)}
                  onEdit={handleModalOpen}
                />
              </div>
              {openModal && (
                <ModalUpdateTask
                  taskId={task.id}
                  task={task.details}
                  onEdit={onEdit}
                  onCancel={handleModalOpen}
                />
              )}
            </div>
          ))}
        </div>
      )} */}
    </>
  );
}
