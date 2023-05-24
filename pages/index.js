import TodoListTable from "@/modules/TodoListTable";
import { getAllData } from "@/sanity/lib/api";
import Head from "next/head";
import { useState, useEffect } from "react";

export async function getStaticProps() {
  const data = await getAllData();

  return {
    props: {
      data,
    },
    revalidate: 5,
  };
}

export default function Home({ data }) {

  return (
    <main className="p-4 lg:p-24">
      <Head>
        <title>todo</title>
        <meta name="description" content="Todo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TodoListTable apiData={data && data} />
    </main>
  );
}
