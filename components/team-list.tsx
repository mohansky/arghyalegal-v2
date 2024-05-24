import TeamItem from "./team-item";
import { team } from "@/.velite";

export default function TeamList() {
  const teamorder = team.sort((a, b) => a.id! - b.id!);
  return (
    <>
      <ul role="list" className="grid gap-x-8 gap-y-12 sm:gap-y-16">
        {teamorder.map((team) => (
          <TeamItem
            key={team.name}
            name={team.name}
            image={team.image}
            imageBlurUrl={team.imageBlurUrl}
            role={team.role}
            body={team.body}
          />
        ))}
      </ul>
    </>
  );
}
