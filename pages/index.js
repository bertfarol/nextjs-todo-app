import Head from "next/head";
import TodoListTable from "@/modules/TodoListTable";
import useSWR from "swr";

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
        <title>todo</title>
        <meta name="description" content="Todo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data ? (
        <TodoListTable apiData={data} mutate={mutate} />
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
