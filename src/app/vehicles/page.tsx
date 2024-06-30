"use client";
import * as React from "react";
import CardComponent from "./CardWithForm";
import Header from "./[slug]/Header";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const cards = [
  {
    id: "tipper",
    image: "/tipper.webp",
    name: "Tipper",
  },
  {
    id: "surface_miner",
    image: "/surface_miner.jpg",
    name: "Surface Miner",
  },
  {
    id: "excavator",
    image: "/excavator.jpeg",
    name: "Excavator",
  },
  {
    id: "dumper",
    image: "/dumper.png",
    name: "Dumper",
  },
  {
    id: "loader",
    image: "/loader.png",
    name: "Loader",
  },
  {
    id: "dozer",
    image: "/dozer.png",
    name: "Excavator",
  },
  {
    id: "water_tanker",
    image: "/water_tanker.png",
    name: "Water Tanker",
  },
];

const CardsList = () => {
  return (
    <>
      <Header />
    
      <div className="h-screen justify-center items-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/vid.mp4"
          autoPlay
          loop
          muted
        />
        <Carousel className="relative flex gap-4 top-28">
          <CarouselPrevious />
          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem key={index}>
                
                <Card>
                  <center>
                  <CardContent>
                    <CardComponent name={card.name} image={card.image} id={card.id} />
                  </CardContent>
                  </center>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default CardsList;
