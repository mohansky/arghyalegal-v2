import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Heading } from "./styled-comps/heading";
import { Paragraph } from "./styled-comps/paragraph";
import { Card } from "./ui/card";

interface PracticesProps {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  img: string;
  imageBlurUrl: string | undefined;
  body: string;
}

export default function WorkSlide({
  id,
  slug,
  title,
  subtitle,
  img,
  imageBlurUrl,
  body,
}: PracticesProps) {
  return (
    <Card className="grid md:grid-cols-2">
      {/* <div > */}
        <Image
          src={img}
          alt={title}
          title={title}
          width={1280}
          height={1080}
          placeholder="blur"
          blurDataURL={imageBlurUrl}
        />
        <div className="bg-muted w-full h-full p-10">
          <div >
            <Heading size="md" className="font-semibold mb-5 uppercase">
              {title}
            </Heading>
            <Paragraph className="mb-5 line-clamp-3">{subtitle}</Paragraph>
            <Link href={slug!}>
              <Button> Read more...</Button>
            </Link>
          </div>
        </div>
      {/* </div> */}
    </Card>
  );
}
