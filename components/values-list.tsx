import { options } from "@/.velite";
import { Heading } from "./styled-comps/heading";
import ValuesItem from "./values-item";

export default function ValuesList() {
  return (
    <>
      <Heading size="md" className="font-semibold mb-5">{options.valuesTitle}</Heading>
      <ul className="grid lg:grid-cols-2 gap-8">
        {options.valuesItems.map((value) => (
          <ValuesItem
            key={value.id}
            image={value.image}
            title={value.title}
            text={value.text}
          />
        ))}
      </ul>
    </>
  );
}
