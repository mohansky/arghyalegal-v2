import { MDXContent } from "./styled-comps/mdx-components";

export default function PagesTextBlock({ page }: any) {
  return (
    <>
      <div className="lg:w-5/6 text-justify leading-loose">
        {page.map((item: any, index: number) => (
          <MDXContent key={item.id} code={item.body} />
        ))}
      </div>
    </>
  );
}
