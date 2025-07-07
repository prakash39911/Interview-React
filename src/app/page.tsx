"use client";

import ShowMultipleCards from "@/components/ShowMultipleCards";
import { cardStore } from "@/lib/store/cardStore";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setisLoading] = useState(true);
  const cards = cardStore((state) => state.cards);
  const addCards = cardStore((state) => state.addCards);

  useEffect(() => {
    const fetchDataFromUrl = async () => {
      const fetchedData = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!fetchedData.status) {
        return <div>Error while fetching data</div>;
      }

      const data = await fetchedData.json();

      console.log("final data", data);

      addCards(data);
    };

    fetchDataFromUrl();
  }, [addCards]);

  if (isLoading) {
    setTimeout(() => {
      setisLoading(false);
    }, 5000);
    return (
      <div className="flex justify-center items-center text-xl font-bold min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex w-full justify-center items-center bg-gray-300 p-10">
      <ShowMultipleCards data={cards} />
    </div>
  );
}
