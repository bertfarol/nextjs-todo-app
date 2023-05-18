import {
  TrashIcon,
  PencilSquareIcon,
  CheckCircleIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect, useRef } from "react";

export default function TaskMenu({ onUpdate, onRemove }) {
  const [openMenu, setOpenMenu] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef?.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const onComplete = () => {
    onUpdate();
    setOpenMenu(false);
  };
  const onDelete = () => {
    onRemove();
    setOpenMenu(false);
  };

  return (
    <div ref={menuRef}>
      <EllipsisHorizontalIcon
        onClick={() => setOpenMenu(!openMenu)}
        className="text-black/40 w-5 h-5 cursor-pointer mx-2 my-1.5"
      />
      {openMenu && (
        <ul className="absolute z-10 bg-white border rounded-lg shadow top-2 right-2 border-grey-100">
          <li className="px-3 py-2 duration-300 cursor-pointer hover:bg-gray-100">
            <span onClick={onComplete} className="flex items-center text-base">
              <CheckCircleIcon className="w-5 h-5 mr-2 text-green-600" />
              Done
            </span>
          </li>
          <li className="px-3.5 py-2 duration-300 cursor-pointer hover:bg-gray-100">
            <span className="flex items-center text-base">
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
