import Image from "next/image";
import { Heading } from "./styled-comps/heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ValuesItemProps {
  image: string;
  title: string;
  text: string;
}

export default function ValuesItem({ image, title, text }: ValuesItemProps) {
  return (
    <>
      <li>
        <Card className="grid md:grid-cols-5 gap-2">
          <Image
            src={image}
            alt={title}
            title={title}
            width="1080"
            height="720"
            className="md:col-span-2 w-full h-full object-cover rounded-md"
          />
          <div className="md:col-span-3">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-balanced">{text}</p>
            </CardContent>
          </div>
        </Card>
      </li>
    </>
  );
}
