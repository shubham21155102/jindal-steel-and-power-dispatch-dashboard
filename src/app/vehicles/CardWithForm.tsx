"use client";
import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

type Props = {
  image: string;
  name: string;
  id: string;
};

const CardComponent = (props: Props) => {
  return (
    <Card className="w-[350px]">
      <Link href={`/vehicles/${props.id}`}>
        
          <CardHeader>
            <Image src={props.image} width={350} height={200} alt={props.name} />
          </CardHeader>
          <CardContent>
            <h2>{props.name}</h2>
          </CardContent>
         
        
      </Link>
    </Card>
  );
};

export default CardComponent;
