import Button from "../Button";
import TextInput from "../TextInput";
import Form from "../Form";

export default function InputTask({ onTextInputChange, inputValue, onSubmit, pendingTask }) {
  return (
    <>
      <h1 className="mb-1 text-2xl font-bold text-gray-500">TODO</h1>
      <Form onSubmit={onSubmit} className="flex">
        <TextInput
          onChange={(e) => onTextInputChange(e.target.value)}
          value={inputValue}
          placeholder="Add new task"
        />
        <Button
          className="ml-2"
          disabled={inputValue.length > 0 ? false : true}
          children="Add"
        />
      </Form>
      <p className="pl-1 mt-1 text-xs text-green-700">{pendingTask} pending task</p>
    </>
  );
}
