import QuicklinkItem from "@/components/quicklink-item";
import { Heading } from "./styled-comps/heading";
import { options } from '@/.velite'

export default function QuicklinkList() {
  return (
    <>
      <Heading size="lg" className="mb-5">{options.quickLinkstitle}</Heading>
      <ul className="mx-auto grid md:grid-cols-3 gap-4">
        {options.quickLinksitems.map((quicklink) => (
          <QuicklinkItem key={quicklink.id} quicklink={quicklink} />
        ))}
      </ul>
    </>
  );
}
