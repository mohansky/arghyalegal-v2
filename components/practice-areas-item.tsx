import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

interface PracticesProps {
  slug: string;
  body: string;
  img: string;
  title: string;
  subtitle: string;
  id: number;
}

export default function PracticesAreasItem({
  slug,
  body,
  img,
  title,
  subtitle,
  id,
}: PracticesProps) {
  return (
    <>
      <Card className="relative">
        <Image
          src={img}
          alt={title}
          width="640"
          height="480"
          className="rounded-md"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-muted/20 backdrop-blur-sm" />
        <div className="absolute top-1">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-3">{subtitle}</p>
          </CardContent>
          <CardFooter>
            <Link href={slug!}>
              <Button> Read more..</Button>
            </Link>
          </CardFooter>
        </div>
      </Card>
    </>
  );
}
