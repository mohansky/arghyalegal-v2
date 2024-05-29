import { Heading } from "./styled-comps/heading";

interface WhyusItemProps {
  title: string;
  text: string;
}

export default function WhyusItem({ title, text }: WhyusItemProps) {
  return (
    <>
      <li className="bg-accent p-8 h-full rounded-lg hover:shadow-md">
        <Heading
          size="sm"
          className="text-gray-900 font-semibold mb-1 uppercase"
        >
          {title}
        </Heading>
        <p className="text-gray-900 text-justify">{text}</p>
      </li>
    </>
  );
}
