import Head from "next/head";
import TodoListTable from "@/modules/TodoListTable";
import useSWR from "swr";
import { Toaster } from "react-hot-toast";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getTodos`,
    fetcher,
    {
      refreshInterval: 0, // Disable automatic refresh
      dedupingInterval: 0, // Disable deduping of requests
      revalidateOnFocus: false, // Disable revalidation on window focus
      shouldRetryOnError: false, // Disable automatic retry on error
    }
  );

  if (error) {
    return <p>Error fetching data</p>;
  }

  return (
    <main className="p-4 lg:p-24">
      <Head>
        <title>Todo</title>
        <meta name="description" content="Todo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      {data ? (
        <TodoListTable apiData={data} mutate={mutate} />
      ) : (
        <p className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <img src="/todo-logo.png" />
        </p>
      )}
    </main>
  );
}
