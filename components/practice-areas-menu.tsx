import PracticesAreasItem from "@/components/practice-areas-menu-item";
import { practiceAreas } from "@/.velite";

export default function PracticesAreasMenuList() {
  return (
    <>
      <ul className="mt-5 space-y-4 list-disc list-inside font-medium">
        {practiceAreas.map((practice) => (
          <PracticesAreasItem
            key={practice.id}
            slug={practice.slug} 
            title={practice.title}
          />
        ))}
      </ul>
    </>
  );
}
