import TodoListTable from "@/modules/TodoListTable";
import { getAllData } from "@/sanity/lib/api";
import sanity from "@/sanity/lib/client-config";
import { groq } from "next-sanity";
import Head from "next/head";
import { useState, useEffect } from "react";

export async function getStaticProps() {
  const initialData = await getAllData();

  return {
    props: {
      initialData,
    },
    revalidate: 5,
  };
}

export default function Home({ initialData }) {
  const [data, setData] = useState(initialData);

  const handleRefresh = async () => {
    console.log("fetch api");
    const refreshedData = await getAllData();
    setData(refreshedData);
  };


  return (
    <main className="p-4 lg:p-24">
      <Head>
        <title>todo</title>
        <meta name="description" content="Todo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TodoListTable apiData={data && data} onRefresh={handleRefresh} />
    </main>
  );
}
