import Head from "next/head";
import TodoListTable from "@/modules/TodoListTable";
import useSWR from "swr";


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, mutate } = useSWR(
    "http://localhost:3000/api/getTodos",
    fetcher,
    {
      refreshInterval: 0, // Disable automatic refresh
      dedupingInterval: 0, // Disable deduping of requests
      revalidateOnFocus: false, // Disable revalidation on window focus
      shouldRetryOnError: false, // Disable automatic retry on error
    }
  );

  const handleUpdateData = async () => {
    await fetch("http://localhost:3000/api/getTodos");
    mutate(); // Re-fetch the data
  };

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
      <button
        onClick={handleUpdateData}
        className="px-4 py-2 mb-4 text-white bg-red-700 rounded-md"
      >
        Update Data
      </button>
      <TodoListTable apiData={data && data} />
    </main>
  );
}
