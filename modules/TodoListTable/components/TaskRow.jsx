import { useState, useEffect } from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
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
          " duration-300 py-5 pl-4 lg:pl-8 bg-white mb-3 rounded-2xl"
        }
      >
        <div className="flex">
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
          <TaskMenu
            setOpenMenu={setOpenMenu}
            openMenu={openMenu}
            onRemove={onTaskRemove}
            onUpdate={onTaskComplete}
            onEdit={() => onOpenModal(task._id, task.details)}
          />
        </div>
      </div>
    </>
  );
}
