import TodoListTable from "@/modules/TodoListTable";
import Head from "next/head";
import { getTodos } from "@/sanity/sanity.utils";

async function moreTodo() {
   const tasks = await getTodos();
   console.log(tasks);
}
moreTodo();
export default function Home({ tasks }) {
  return (
    <main className="p-4 lg:p-24">
      <Head>
        <title>todo</title>
        <meta name="description" content="Todo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TodoListTable tasks={tasks} />
    </main>
  );
}

export async function getServerSideProps(context) {
  const tasks = await getTodos();
  console.log("what");
  return {
    props: {
      tasks,
    },
  };
}
