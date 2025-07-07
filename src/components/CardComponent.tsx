"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cardStore } from "@/lib/store/cardStore";
import { dateFormatter } from "@/lib/utilityFunction";
import { CardDataType } from "@/types/type";
import { X } from "lucide-react";
import Image from "next/image";

export default function CardComponent({ data }: { data: CardDataType }) {
  const removeCard = cardStore((state) => state.removeCard);
  const cards = cardStore((state) => state.cards);

  console.log("Total card--", cards.length);

  return (
    <Card className="w-full max-w-[300px] flex flex-col h-[480px]">
      <CardHeader className="h-[15px]">
        <div className="flex justify-end">
          <X
            className="text-red-600 cursor-pointer"
            onClick={() => removeCard(data.id.toString())}
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow h-full gap-4">
        <div className="text-xl font-bold h-[60px]">
          {data.title.slice(0, 35)}
        </div>
        <div className="flex flex-wrap">
          <div>{data.body.slice(0, 80)}</div>
          <span>...</span>
        </div>

        <div>{JSON.stringify(dateFormatter(new Date()))}</div>

        <div className="mt-auto mx-auto">
          <Image
            alt={"image"}
            src={
              "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={325}
            height={200}
          />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
}
