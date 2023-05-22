import TodoListTable from "@/modules/TodoListTable";
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
      <TodoListTable />
    </main>
  );
}


