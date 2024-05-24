import Image from "next/image";
import Container from "@/components/styled-comps/container";
import { Heading } from "@/components/styled-comps/heading";
import { practiceAreas } from "#site/content";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXContent } from "@/components/styled-comps/mdx-components";
import HeroPage from "@/components/hero-page";

interface PracticeAreaPageProps {
  params: {
    slug: string[];
  };
}

async function getPracticeAreaFromParams(
  params: PracticeAreaPageProps["params"]
) {
  const slug = params?.slug?.join("/");
  const practiceArea = practiceAreas.find(
    (practiceArea) => practiceArea.slugAsParams === slug
  );

  return practiceArea;
}

export async function generateMetadata({
  params,
}: PracticeAreaPageProps): Promise<Metadata> {
  const practiceArea = await getPracticeAreaFromParams(params);

  if (!practiceArea) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", practiceArea.title!);

  return {
    title: practiceArea.title,
    // description: practiceArea.description,
    // authors: { name: siteConfig.author },
    openGraph: {
      title: practiceArea.title,
      //   description: practiceArea.description,
      type: "article",
      //   url: practiceArea.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: practiceArea.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: practiceArea.title,
      //   description: practiceArea.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  PracticeAreaPageProps["params"][]
> {
  return practiceAreas.map((practiceArea) => ({
    slug: practiceArea.slugAsParams.split("/"),
  }));
}

export default async function practiceAreasPage({
  params,
}: PracticeAreaPageProps) {
  const practiceArea = await getPracticeAreaFromParams(params);

  if (!practiceArea || !practiceArea.published) {
    notFound();
  }

  return (
    <>
    <HeroPage image={practiceArea.img!} title={practiceArea.title!}/>
    <Container width="marginxy">
      <div className="grid lg:grid-cols-3 gap-8">
        
        <div className="col-span-2">
          <Heading size="md" className="mb-10">
            {practiceArea.title}
          </Heading>
          {/* <p>{practiceArea.description}</p> */}
          <MDXContent code={practiceArea.body} />
        </div>
         <Image
          src={practiceArea.img!}
          alt={practiceArea.title!}
          width={600}
          height={600}
          className="w-full"
        /> 
      </div>
    </Container>
    </>
    
  );
}
