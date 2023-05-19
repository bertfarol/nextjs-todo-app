import TodoListTable from "@/components/TodoListTable/";

export default function Home() {
  return (
    <main className="p-4 lg:p-24">
      <TodoListTable tasks={APITASK} />
    </main>
  );
}


const APITASK = [
  {
    id: 1,
    details: "Sample Task: create todo app using next js",
    date: "18 May 2023",
    completed: false,
  },
  {
    id: 2,
    details: "Add more task for each day",
    date: "19 May 2023",
    completed: false,
  },
];