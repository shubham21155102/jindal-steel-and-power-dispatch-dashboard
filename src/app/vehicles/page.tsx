import * as React from "react";
import CardComponent from "./CardWithForm";

const cards = [
  {
    id:"tipper",
    image: "/tipper.webp",
    name: "Tipper"
  },
  { 
    id:"surface_miner",
    image: "/surface_miner.jpg",
    name: "Surface Miner"
  },
  {
    id:"excavator",
    image: "/excavator.jpeg",
    name: "Excavator"
  },
  {
    id:"tipper",
    image: "/tipper.webp",
    name: "Tipper"
  },
  { 
    id:"surface_miner",
    image: "/surface_miner.jpg",
    name: "Surface Miner"
  },
  {
    id:"excavator",
    image: "/excavator.jpeg",
    name: "Excavator"
  },{
    id:"tipper",
    image: "/tipper.webp",
    name: "Tipper"
  },
  { 
    id:"surface_miner",
    image: "/surface_miner.jpg",
    name: "Surface Miner"
  },
  {
    id:"excavator",
    image: "/excavator.jpeg",
    name: "Excavator"
  },

];

const CardsList = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-x-scroll scroll-smooth">
      <div className="flex gap-4 animate-scroll">
        {cards.map((card, index) => (
          <CardComponent name={card.name} image={card.image} id={card.id} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
