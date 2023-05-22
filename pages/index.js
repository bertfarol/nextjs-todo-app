import TodoListTable from "@/modules/TodoListTable";
import Head from "next/head";
import { getTodos } from "@/sanity/sanity.utils";

export const getStaticProps = async () => {
  const tasks = await getTodos();
  return {
    props: {
      tasks,
    },
  };
};


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


