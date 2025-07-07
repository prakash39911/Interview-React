"use client";

import React, { useState } from "react";
import CardComponent from "./CardComponent";
import { PaginationComponent } from "./PaginationComponent";
import { CardDataType } from "@/types/type";

export default function ShowMultipleCards({ data }: { data: CardDataType[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const paginatedCards = data.slice(startIndex, endIndex);

  console.log("Paginated Cards", paginatedCards);

  return (
    <div className="flex container max-w-6xl gap-4 w-full flex-col">
      <div className="flex flex-wrap gap-4 justify-center">
        {paginatedCards.map(
          (obj: {
            userId: number;
            id: number;
            title: string;
            body: string;
          }) => {
            return <CardComponent key={obj.id} data={obj} />;
          }
        )}
      </div>
      <div>
        <PaginationComponent
          totalCards={data.length}
          cardsPerPage={cardsPerPage}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
