const primaryBtn =
  "text-white bg-green-700 border-green-700 hover:bg-green-700/90 hover:border-green-700/90";
const secondaryBtn =
  "text-gray-500 bg-transparent border-gray-200";

export default function Button({
  onClick,
  disabled,
  btnName,
  className,
  style,
  type,
}) {
  let btnStyle = style === "secondary" ? secondaryBtn : primaryBtn;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={
        className +
        " " +
        btnStyle +
        " " +
        "px-3 py-1.5 text-base duration-300 border rounded-md hover:shadow-md disabled:opacity-50"
      }
    >
      {btnName}
    </button>
  );
}
