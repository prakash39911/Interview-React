"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cardStore } from "@/lib/store/cardStore";
import { CardDataType } from "@/types/type";
import { X } from "lucide-react";

export default function CardComponent({ data }: { data: CardDataType }) {
  const removeCard = cardStore((state) => state.removeCard);
  const cards = cardStore((state) => state.cards);

  console.log("Total card--", cards.length);

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex justify-end">
          <X
            className="text-red-600 cursor-pointer"
            onClick={() => removeCard(data.id.toString())}
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="text-2xl font-bold">{data.title}</div>
        <div>{data.body.slice(0, 90)}</div>
        <div>{JSON.stringify(new Date())}</div>

        {/* <Image alt={"image"} src={""} width={300} height={200} /> */}
      </CardContent>
      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
}
