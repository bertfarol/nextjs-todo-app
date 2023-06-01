import {
  TrashIcon,
  PencilIcon,
  CheckIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";

export default function TaskMenu({
  onUpdate,
  onRemove,
  onEdit,
  setOpenMenu,
  openMenu,
}) {
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef?.current.contains(e.target)) {
        setOpenMenu(false);
        document.body.classList.remove("menu-open");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  });

  const handleOpenMenu = () => {
    document.body.classList.add("menu-open");
    setOpenMenu(!openMenu);
  };

  const onComplete = () => {
    onUpdate();
    setOpenMenu(false);
    document.body.classList.remove("menu-open");
  };
  const onDelete = () => {
    onRemove();
    setOpenMenu(false);
    document.body.classList.remove("menu-open");
  };
  const onEditTask = () => {
    onEdit();
    setOpenMenu(false);
    document.body.classList.remove("menu-open");
  };

  return (
    <div ref={menuRef} className="relative">
      <EllipsisHorizontalIcon
        onClick={handleOpenMenu}
        className="text-[#3E78AD] duration-300 w-10 cursor-pointer my-1.5 hover:bg-[#3E78AD]/10 rounded-full p-1"
      />
      {openMenu && (
        <ul className="absolute z-10 p-2.5 bg-white border rounded-lg shadow-lg select-none top-6 right-10 border-grey-100 lg:w-[244px] w-[200px]">
          <li className="group p-2 rounded-md cursor-pointer hover:bg-[#3E78AD] hover:text-white text-[#464D52]">
            <span
              onClick={onComplete}
              className="flex items-center justify-between text-lg "
            >
              Done
              <CheckIcon className="w-5 mr-2 duration-300 group-hover:w-6" />
            </span>
          </li>
          <li className="group p-2 rounded-md cursor-pointer hover:bg-[#3E78AD] hover:text-white text-[#464D52]">
            <span
              onClick={onEditTask}
              className="flex items-center justify-between text-lg "
            >
              Edit task
              <PencilIcon className="w-5 mr-2 duration-300 group-hover:w-6" />
            </span>
          </li>
          <li className="group p-2 rounded-md cursor-pointer hover:bg-[#3E78AD] hover:text-white text-[#464D52]">
            <span
              onClick={onDelete}
              className="flex items-center justify-between text-lg "
            >
              Delete task
              <TrashIcon className="w-5 mr-2 duration-300 group-hover:w-6" />
            </span>
          </li>
        </ul>
      )}
    </div>
  );
}
