import { MDXContent } from "./styled-comps/mdx-components";

export default function PagesTextBlock({ page }: any) {
  return (
    <>
        {page.map((item: any) => (
          <MDXContent key={item.id} code={item.body} />
        ))}
    </>
  );
}
