"use client"
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
      <CardHeader>
        <Image src={props.image} width={350} height={200} alt={props.name} />
      </CardHeader>
      <CardContent>
        <CardFooter>
          <Link href="/vehicles/[slug]" as={`/vehicles/${props.id}`}>
            <Button>{props.name}</Button>
          </Link>
        </CardFooter>
      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
