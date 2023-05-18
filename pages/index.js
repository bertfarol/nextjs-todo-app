import Head from "next/head";
import TaskTable from "@/components/TaskTable";

export default function Home() {
  return (
    <main>
      <Head>
        <title>todo</title>
        <meta name="description" content="Todo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <TaskTable />      
      </div>
    </main>
  );
}
