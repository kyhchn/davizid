import React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ItemCard from "@/components/ui/itemCard";
import { PORTFOLIO } from "@/utils/assets";

export default function CarouselSection({ type }) {
  const title = type === "portfoio" ? "Our Portfolio" : "Article";
  const subtitle =
    type === "portfoio" ? "Our recent works about data visualization" : "Handpicked Just for You";
  return (
    <div className="flex w-full flex-col items-center justify-start">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-black">{title}</h2>
        <div className="h-6"></div>
        <p className="text-xl font-normal text-daviz-grey-400">{subtitle}</p>
      </div>
      <div className="h-24"></div>
      <Carousel className="w-full px-24">
        <CarouselContent className="-ml-12">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/3 pl-12">
              <ItemCard
                category="health"
                imageSrc={PORTFOLIO}
                like={120}
                share={111}
                title={"Dashboard Covid-19 Case in Indonesia"}
                year={2024}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="h-20"></div>
      <Button>
        <p className="text-base font-medium text-white">View More</p>
      </Button>
    </div>
  );
}
