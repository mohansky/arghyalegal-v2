import Container from "@/components/styled-comps/container";
import ContactItem from "@/components/contact-item";
import Form from "@/components/form";
import { Heading } from "@/components/styled-comps/heading";
import { options } from "@/.velite";

export default function Contact() {
  return (
    <div>
      <Container width="marginxy">
        <p className="text-4xl w-5/6 md:w-1/2 font-light leading-relaxed">
          We look forward to connect with you
          <span className="font-bold"> in‑person,</span> by
          <span className="font-bold"> phone</span> or by
          <span className="font-bold"> email</span>.
        </p>
      </Container>
      <Container width="marginxy">
        <div className="grid lg:grid-cols-2 gap-8">
          <ul className="mb-20">
            <Heading size="md" className="text-primary font-semibold mb-5">
              {/* {options.name} */}
              <span className="text-gray-900 dark:text-gray-200">Λrg</span><span className="text-red-800">ħyä</span> {" "}
              Legal
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
    </div>
  );
}
