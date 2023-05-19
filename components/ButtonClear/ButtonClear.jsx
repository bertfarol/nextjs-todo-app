export default function ButtonClear({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="px-2 py-1 text-base text-white duration-300 bg-green-700 border border-green-700 rounded-md hover:shadow-md hover:bg-green-700/90 hover:border-green-700/90"
      >
        Clear all
      </button>
    );
}