import Button from "@/common/components/Button";
import TextInput from "@/common/components/TextInput";

export default function InputTask({
  onTextInputChange,
  userInput,
  onSubmit,
  pendingTask,
}) {
  return (
    <>
      <h1 className="mb-1 text-2xl font-bold text-gray-500">TODO</h1>
      <form onSubmit={onSubmit} className="flex">
        <TextInput
          onChange={(e) => onTextInputChange(e.target.value)}
          value={userInput}
          placeholder="Add new task"
        />
        <Button
          className="ml-2"
          disabled={userInput.length > 0 ? false : true}
          btnName="Add"
        />
      </form>
      <p className="pl-1 mt-1 text-xs text-green-700">
        {pendingTask} pending task
      </p>
    </>
  );
}
