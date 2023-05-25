import Button from "@/common/components/Button";
import TaskRow from "./TaskRow";
import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef } from "react";

export default function TaskTable({
  tasks,
  onTaskRemove,
  onTaskComplete,
  onTaskUpdate,
  onClearAll,
  onOpenModal,
}) {
  const rows = [];
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  tasks &&
    tasks.map((task) => {
      rows.push(
        <TaskRow
          task={task}
          key={task._id}
          onTaskComplete={() => onTaskComplete(task._id, !task.completed)}
          onTaskRemove={() => onTaskRemove(task._id)}
          onTaskUpdate={onTaskUpdate}
          onOpenModal={onOpenModal}
        />
      );
    });

  return (
    <div ref={parent} className="mt-3">
      {tasks && rows}
    </div>
  );
}
