import PracticesAreasItem from "@/components/practice-areas-item";
import { practiceAreas } from "@/.velite";

export default function PracticesAreasList() {
  return (
    <>
      {/* <ul className="grid gap-8">
        {PracticesData.practices.map((practice) => (
          <PracticesAreasItem key={practice.id} practice={practice} />
        ))}
      </ul> */}
      <ul className="grid md:grid-cols-3 gap-8">
        {practiceAreas.map((practice) => (
          <PracticesAreasItem key={practice.id} practice={practice} />
        ))}
      </ul>
    </>
  );
}
