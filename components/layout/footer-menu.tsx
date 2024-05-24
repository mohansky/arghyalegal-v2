import Menuitems from "@/data/menu.json"; 
import Links from "../links";

export default function FooterMenu() { 

  return (
    <>
      <ul className="hidden md:block">
        {Menuitems.menu.map((item) => {
          return (
            <li key={item.id} className="mb-1">
              <Links href={item.URL}>{item.name}</Links>
            </li>
          );
        })}
      </ul>
    </>
  );
}
