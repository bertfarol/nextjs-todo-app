import Button from "@/common/components/Button";
import TaskRow from "./TaskRow";

export default function TaskTable({
  tasks,
  onTaskRemove,
  onTaskComplete,
  onTaskUpdate,
  onClearAll,
}) {
  const rows = [];

  tasks && tasks.map((task) => {
    rows.push(
      <TaskRow
        task={task}
        key={task._id}
        onTaskComplete={() =>
          onTaskComplete(task._id, !task.completed)
        }
        onTaskRemove={() => onTaskRemove(task._id)}
        onTaskUpdate={onTaskUpdate}
      />
    );
  });

  return (
    <>
      {tasks && rows}
      {tasks && (
        <Button
          onClick={onClearAll}
          disabled={false}
          className="mt-6"
          btnName="Clear all"
        />
      )}
    </>
  );
}
