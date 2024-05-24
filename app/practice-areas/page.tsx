import HeroPage from "@/components/hero-page";
import Container from "@/components/styled-comps/container";
import PracticesAreasList from "@/components/practice-areas-list";
import PagesTextBlock from "@/components/pages-text-block";
import { pages } from "@/.velite";

export default function PracticeAreas() {
  const page = pages.filter((page) => page.id === 3);
  return (
    <>
      <HeroPage
        image="/images/hero/practice-areas.jpg"
        title="Practice Areas"
      />
      <main>
        <Container width="marginxy">
          <PagesTextBlock page={page} />

          {/* <p className="mb-5 text-xl lg:w-5/6 text-justify">
            Our team has worked on various complex issues in the E-Commerce,
            Information Technology, Consumer Goods, Automobile, Energy,
            Manufacturing, Engineering, Rail Transportation, Medical Device
            sectors.
          </p>
          <p className="mb-5 text-xl lg:w-5/6 text-justify">
            Please feel free to contact us at{" "}
            <a
              className="font-semibold hover:text-gray-700"
              href="mailto:enquiry@arghyalegal.com"
              title="Email to enquiry@arghyalegal.com"
              aria-label="Email to enquiry@arghyalegal.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              enquiry@arghyalegal.com
            </a>{" "}
            for specific queries and detailed discussions. Although we focus on
            the below practice areas, we also assist our Clients to find the
            right resource at optimal costs without compromising on quality and
            outcome.
          </p> */}
        </Container>
        <Container width="marginxy">
          <PracticesAreasList />
        </Container>
      </main>
    </>
  );
}
