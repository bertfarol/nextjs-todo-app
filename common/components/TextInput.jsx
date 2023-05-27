export default function TextInput({ onChange, value, placeholder, className }) {
  return (
    <input
      type="text"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={
        className +
        " " +
        "py-4 px-6  focus:outline-none focus:ring focus:ring-[#78A1C6] rounded-[40px] w-full focus:bg-white text-2xl text-[#3E78AD]"
      }
    />
  );
}
