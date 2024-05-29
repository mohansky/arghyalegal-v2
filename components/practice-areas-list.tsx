import PracticesAreasItem from "@/components/practice-areas-item";
import { practiceAreas } from "@/.velite";

export default function PracticesAreasList() {
  return (
    <>
      <ul className="grid md:grid-cols-2 gap-8">
        {practiceAreas.map((practice) => (
          <PracticesAreasItem
            key={practice.id}
            slug={practice.slug}
            body={practice.body}
            img={practice.img}
            title={practice.title}
            subtitle={practice.subtitle}
            id={practice.id}
          />
        ))}
      </ul>
    </>
  );
}
