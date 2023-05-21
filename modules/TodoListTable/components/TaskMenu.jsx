import {
  TrashIcon,
  PencilSquareIcon,
  CheckCircleIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect, useRef } from "react";

export default function TaskMenu({ onUpdate, onRemove, onEdit }) {
  const [openMenu, setOpenMenu] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef?.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  });

  const onComplete = () => {
    onUpdate();
    setOpenMenu(false);
  };
  const onDelete = () => {
    onRemove();
    setOpenMenu(false);
  };
  const onEditTask = () => {
    onEdit();
    setOpenMenu(false);
  };

  return (
    <div ref={menuRef} className="relative">
      <EllipsisHorizontalIcon
        onClick={() => setOpenMenu(!openMenu)}
        className="text-gray-400 duration-300 hover:text-green-700 w-8 h-8 cursor-pointer mx-2 my-1.5 hover:bg-green-500/10 rounded-full p-1"
      />
      {openMenu && (
        <ul className="absolute z-10 bg-white border rounded-lg shadow select-none top-6 right-10 border-grey-100">
          <li className="px-3 py-2 duration-300 cursor-pointer hover:bg-gray-100">
            <span onClick={onComplete} className="flex items-center text-base">
              <CheckCircleIcon className="w-5 h-5 mr-2 text-green-600" />
              Done
            </span>
          </li>
          <li className="px-3.5 py-2 duration-300 cursor-pointer hover:bg-gray-100">
            <span onClick={onEditTask} className="flex items-center text-base">
              <PencilSquareIcon className="w-5 h-5 mr-2 text-blue-500" />
              Edit
            </span>
          </li>
          <li className="px-3.5 py-2 duration-300 cursor-pointer hover:bg-gray-100">
            <span onClick={onDelete} className="flex items-center text-base">
              <TrashIcon className="w-5 h-5 mr-2 text-red-600" />
              Delete
            </span>
          </li>
        </ul>
      )}
    </div>
  );
}
