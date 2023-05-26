const primaryBtn =
  "text-white bg-[#3E78AD] border-[#3E78AD] hover:bg-[#3E78AD]/90 hover:border-[#3E78AD]/90";
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
