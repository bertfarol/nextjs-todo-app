export default function InputTask({ onSubmit, onChange, taskValue, pendingTask }) {
    return (
      <>
        <form onSubmit={onSubmit} className="flex">
          <input
            onChange={onChange}
            value={taskValue}
            type="text"
            placeholder="Add new task"
            className="px-2.5 py-1.5 bg-gray-100 border rounded-sm outline-none grow"
          />
          <button
            type="submit"
            disabled={taskValue.length > 0 ? false : true}
            className="px-2 ml-1 text-2xl font-bold leading-4 text-white bg-green-700 border border-green-700 rounded-sm shadow-md disabled:border-green-700/20 disabled:bg-green-700/50"
          >
            +
          </button>
        </form>
        <p className="mt-1 text-xs text-green-700">{pendingTask} pending task</p>
      </>
    );
}