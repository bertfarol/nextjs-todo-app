import { useState, useEffect } from "react";
import {
  CalendarDaysIcon,
  CheckIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import TaskMenu from "./TaskMenu";
import { currentDate } from "@/common/utils/date";

export default function TaskRow({
  task,
  onTaskComplete,
  onTaskRemove,
  onOpenModal,
}) {
  const [date, setDate] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setDate(currentDate(task._createdAt));
  }, []);

  return (
    <>
      <div
        className={
          (task.completed ? "shadow " : "") +
          (openMenu ? "z-10 relative shadow-md" : "") +
          " duration-300 py-4 px-4 lg:px-5 bg-white mb-3 rounded-2xl"
        }
      >
        <div className="flex items-center">
          <div className="grow">
            <div
              className={
                (task.completed ? "line-through" : "") +
                " bg-transparent outline-none focus:bg-gray-200/60 px-2 font-semibold	text-lg lg:text-xl text-[#3C4D5E]"
              }
            >
              {task.details}
            </div>
            <div className="flex items-center px-2 text-base text-[#8995A0]">
              <CalendarDaysIcon className="w-5 mr-1.5" />
              <p className="pt-0.5">{date}</p>
              <p className="pt-0.5">{task.completed}</p>
            </div>
          </div>
          <div className="md:hidden">
            <TaskMenu
              setOpenMenu={setOpenMenu}
              openMenu={openMenu}
              onRemove={onTaskRemove}
              onUpdate={onTaskComplete}
              onEdit={() => onOpenModal(task._id, task.details)}
            />
          </div>
          <div className="hidden grid-cols-3 gap-3 md:grid">
            <span
              onClick={onTaskComplete}
              className={
                (task.completed
                  ? "bg-green-500/10 "
                  : "hover:bg-[#3E78AD]/10") +
                " duration-300 rounded-full p-1.5 cursor-pointer"
              }
            >
              <CheckIcon
                className={
                  (task.completed ? "text-green-600" : "text-[#3E78AD]") +
                  " w-5"
                }
              />
            </span>
            <span
              onClick={() => onOpenModal(task._id, task.details)}
              className="duration-300 hover:bg-[#3E78AD]/10 rounded-full p-1.5 cursor-pointer"
            >
              <PencilIcon className="w-5  text-[#3E78AD]" />
            </span>
            <span
              onClick={onTaskRemove}
              className="duration-300 hover:bg-[#3E78AD]/10 rounded-full p-1.5 cursor-pointer"
            >
              <TrashIcon className="w-5  text-[#3E78AD]" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
