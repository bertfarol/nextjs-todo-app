import Button from "@/common/components/Button";
import TextInput from "@/common/components/TextInput";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function InputTask({
  onTextInputChange,
  userInput,
  onSubmit,
  pendingTask,
}) {
  return (
    <>
      <form onSubmit={onSubmit} className="relative flex">
        <TextInput
          onChange={(e) => onTextInputChange(e.target.value)}
          value={userInput}
          placeholder="Add new task"
          className="lg:px-8 lg:py-6"
        />
        {userInput.length > 0 && (
          <button
            disabled={userInput.length > 0 ? false : true}
            className="bg-[#3E78AD] absolute right-[15px] top-2/4 translate-y-[-50%] lg:p-[14px] p-[10px] rounded-full"
          >
            <PlusIcon className="w-[22px] text-white" />
          </button>
        )}
      </form>
    </>
  );
}
