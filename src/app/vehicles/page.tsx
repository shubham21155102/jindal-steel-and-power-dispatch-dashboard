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
import Footer from "./[slug]/Footer";
const cards = [
  // {
  //   id: "tipper",
  //   image: "/tipper.webp",
  //   name: "Tipper",
  // },
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
    image: "/dumper.jpeg",
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
  {
    id: "grader",
    image: "/grader.png",
    name: "Grader",
  },
  {
    id: "surface_drilling",
    image: "/surface_drilling.jpeg",
    name: "Surface Drilling",
  },
  {
    id: "vibratory_compactor",
    image: "/vibratory_compactor.png",
    name: "Vibratory Compactor",
  },
  {
    id: "welding",
    image: "/welding.png",
    name: "Welding",
  },
  {
    id: "compressor",
    image: "/compressor.png",
    name: "Compressor",
  },
  {
    id: "ambulance",
    image: "/ambulance.png",
    name: "Ambulance",
  },
  {
    id: "pump_diesel",
    image: "/pump_diesel.png",
    name: "Pump (Diesel)",
  },
  {
    id: "washing",
    image: "/washing.png",
    name: "Pump (Diesel) Washing",
  },
  {
    id: "dg_tower",
    image: "/dg_tower.png",
    name: "DG Tower",
  },
  {
    id: "dg_main",
    image: "/dg_main.png",
    name: "DG Main",
  },
  {
    id: "pump",
    image: "/pump.png",
    name: "Pump",
  },
  {
    id: "wheel_loader",
    image: "/wheel_loader.png",
    name: "Wheel Loader",
  },
  {
    id: "backhoe_loader",
    image: "/backhoe_loader.png",
    name: "Backhoe Loader",
  },
  {
    id: "motor_grader",
    image: "/motor_grader.png",
    name: "Motor Grader",
  },
  {
    id: "soil_compactor",
    image: "/soil_compactor.png",
    name: "Soil Compactor",
  },
  {
    id: "surfce_drilling",
    image: "/surfce_drilling.png",
    name: "Surface Drilling",
  },
  {
    id: "mobile_screen",
    image: "/mobile_screen.png",
    name: "MobiScreen EVO",
  },
];

const CardsList = () => {
  return (
    <>
      <Header />
     <div className="h-screen justify-center items-center">
      {/*
       <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/vid.mp4"
          autoPlay
          loop
          muted
        />
      */} 
        <Carousel className="relative flex gap-4 top-28">
          {/* <CarouselPrevious /> */}
          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem key={index}>
                <Card className="bg-transparent">
                  <center>
                    <CardContent className="bg-transparent">
                      <CardComponent name={card.name} image={card.image} id={card.id} />
                    </CardContent>
                  </center>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselNext /> */}
        </Carousel>
      </div>
      <Footer/>
    </>
  );
};

export default CardsList;
