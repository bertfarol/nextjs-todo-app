import TaskRow from "@/components/TaskRow";
import Button from "../Button";

export default function TaskTable({ tasks, onTaskRemove, onTaskComplete, onTaskUpdate, onClearAll }) {
  const rows = [];

  tasks.map((task) => {
    rows.push(
      <TaskRow
        task={task}
        key={task.id}
        onTaskComplete={() => onTaskComplete(task.id, task.completed)}
        onTaskRemove={() => onTaskRemove(task.id)}
        onTaskUpdate={onTaskUpdate}
      />
    );
  });

  return (
    <>
      {rows}
      {tasks.length > 0 && (
        <Button
          onClick={onClearAll}
          disabled={false}
          className="mt-6"
          children="Clear all"
        />
      )}
    </>
  );
}
