import Image from "next/image";
import { Heading } from "./styled-comps/heading";
import { MDXContent } from "./styled-comps/mdx-components";

interface TeamItemProps {
  name: string;
  image: string;
  imageBlurUrl: string;
  role: string;
  body: string; 
}

export default function TeamItem({
  name,
  image,
  imageBlurUrl,
  role,
  body, 
}: TeamItemProps) {
  return (
    <>
      <li key={name} className="mb-20">
        <div className="grid md:grid-cols-3 gap-x-6">
          <Image
            className="mb-5  p-5 rounded-full"
            src={image}
            alt={name}
            width={480}
            height={480}
            placeholder="blur"
            blurDataURL={imageBlurUrl}
          />
          <div className="md:col-span-2">
            <Heading size="sm" className="mb-1 font-semibold">
              {name}
            </Heading>
            <Heading size="xs" className="mb-3 font-medium">
              {role}
            </Heading>
            <MDXContent code={body} />
          </div>
        </div>
      </li>
    </>
  );
}
