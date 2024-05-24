import { Heading } from "./styled-comps/heading";
import { MDXContent } from "./styled-comps/mdx-components";
// import TitleThree from "./title-three";
import {
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

interface PracticesProps {
  slug: URL;
  body: string;
  img: string;
  title: string;
  subtitle: string; 
  id: number;
}

export default function PracticesAreasItem({
  practice,
}: {
  practice: PracticesProps;
}) {
  return (
    <>
      <Card className="relative">
        <Image
          src={practice.img}
          alt={practice.title}
          width="640"
          height="480"
          className="rounded-md"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-muted/20 backdrop-blur-sm"/>
        <div className="absolute top-1">
          <CardHeader>
            <CardTitle>{practice.title}</CardTitle>
            {/* <CardDescription className="line-clamp-3">{practice.subtitle}</CardDescription> */}
          </CardHeader>
          <CardContent>
          <p className="line-clamp-3">{practice.subtitle}</p>
        </CardContent>
          <CardFooter>
            <Link href={practice.slug!}>
              <Button> Read more..</Button>
            </Link>
          </CardFooter>
        </div>
      </Card>

    </>
  );
}
