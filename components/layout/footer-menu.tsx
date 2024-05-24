// import Menuitems from "@/data/menu.json";
import { options } from "@/.velite";
import Links from "../links";

export default function FooterMenu() { 

  return (
    <>
      <ul className="hidden md:block">
        {options.links.map((item) => {
          return (
            <li key={item.link} className="mb-1">
              <Links href={item.link}>{item.text}</Links>
            </li>
          );
        })}
      </ul>
    </>
  );
}
