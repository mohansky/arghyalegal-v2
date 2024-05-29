import ContactItem from "../contact-item";
import { options } from "@/.velite";

export default function FooterContact() {
  return (
    <>
      <ul className="mx-auto sm:mx-0 md:col-span-2">
        {options.contact.map((item) => {
          return (
            <ContactItem
              key={item.id}
              id={item.id}
              className="text-gray-900 group-hover:text-gray-600"
              contactName=""
              title={item.title}
              href={item.href}
              arialabel={item.arialabel || ""}
              text={item.text}
              icon={item.icon || ""}
            />
          );
        })}
      </ul>
    </>
  );
}
