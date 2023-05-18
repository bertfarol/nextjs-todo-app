import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import TaskMenu from "../TaskMenu";

export default function TaskRow({ task, onUpdate, onRemove }) {
  return (
    <div className="mt-4 mb-6">
      {task.map((task) => (
        <div
          key={task.id}
          className={
            (task.completed ? "border-green-600 shadow bg-green-100" : "") +
            " duration-300 border-b rounded-sm hover:bg-gray-100/50 p-0.5 relative"
          }
        >
          <div
            className="flex items-center"
          >
            <input
              readOnly
              disabled
              type="text"
              value={task.details}
              className={
                (task.completed ? "line-through" : "") +
                " grow bg-transparent outline-none focus:bg-gray-200/60 py-2 px-2 cursor-pointer"
              }
            />
            <TaskMenu
              onRemove={() => onRemove(task.id)}
              onUpdate={() => onUpdate(task.id, task.completed)}
            />
            {/* <EllipsisHorizontalIcon
              onClick={(e) => setOpenMenu(!openMenu)}
              className="text-black/40 w-5 h-5 cursor-pointer mx-2 my-1.5"
            /> */}
          </div>
          {/* <TaskMenu
            onUpdate={() => onUpdate(task.id, task.completed)}
            onRemove={() => onRemove(task.id)}
          /> */}
        </div>
      ))}
    </div>
  );
}
