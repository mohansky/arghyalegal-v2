import WhyusItem from "@/components/whyus-item";
import { options } from "@/.velite";
import { Heading } from "./styled-comps/heading";

export default function WhyusList() {
  return (
    <>
      {/* <Heading>{options.whyustitle}</Heading> */}
      <ul className="grid md:grid-cols-1 xl:grid-cols-1 gap-8">
        {options.whyusitems.map((whyus) => (
          <WhyusItem key={whyus.id} title={whyus.title} text={whyus.text} />
        ))}
      </ul>
    </>
  );
}
