import Hero from "@/components/hero";
import ModalDisclaimer from "@/components/modal-disclaimer";
import Container from "@/components/styled-comps/container";
import Slider from "@/components/slider";
import PagesTextBlock from "@/components/pages-text-block";
import Form from "@/components/form";
import { pages, options } from "@/.velite";
import ValuesList from "@/components/values-list";
import WhyusHome from "@/components/whyus-home";
import { Heading } from "@/components/styled-comps/heading";
import ContactItem from "@/components/contact-item";

export default function Home() {
  const page = pages.filter((page) => page.id === 1);

  return (
    <main>
      {options.heroslider?.map((item) => {
        return (
          <Hero
            key={item.link}
            image={item.image as string}
            title={item.title}
            subtitle={item.subtitle || ""}
            btnText={item.btnText}
            link={item.link}
          />
        );
      })}
      <ModalDisclaimer />
      <Container width="marginxy">
        <PagesTextBlock page={page} />
      </Container>
      <Container width="marginxy">
        <ValuesList />
      </Container>
      <Container width="marginxy">
        <Slider />
      </Container>
      <Container width="marginxy">
        <WhyusHome />
      </Container>
      <Container width="marginxy">
        <div className="grid lg:grid-cols-2 gap-8">
          <ul className="mb-20">
            <Heading size="md" className="text-primary font-semibold mb-5">
              {options.name}
            </Heading>
            {options.contact?.map((item) => {
              return (
                <ContactItem
                  key={item.id}
                  id={item.id}
                  contactName=""
                  className="text-foreground group-hover:text-gray-600"
                  title={item.title}
                  href={item.href}
                  arialabel={item.arialabel || ""}
                  text={item.text || ""}
                  icon={item.icon || ""}
                />
              );
            })}
          </ul>
          <Form />
        </div>
      </Container>
    </main>
  );
}
