export default function TextInput({onChange, value, placeholder, className}) {
    return (
      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={
          className +
          " " +
          "px-2.5 py-1.5 bg-gray-100/80 border rounded-md outline-none w-full focus:bg-transparent"
        }
      />
    );
}