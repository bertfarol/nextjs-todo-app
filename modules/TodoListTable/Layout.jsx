export default function Layout({ children }) {
  return (
    <div
      id="task-card"
      className="mx-auto relative max-w-[880px]"
    >
      {children}
    </div>
  );
}
