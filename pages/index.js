import TodoListTable from "@/components/TodoListTable/";
import Head from "next/head";

export default function Home() {
  return (
    <main className="p-4 lg:p-24">
      <Head>
        <title>todo</title>
        <meta name="description" content="Todo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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