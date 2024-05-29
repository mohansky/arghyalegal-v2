import { options } from "@/.velite";

export default function Copyright() {
  return (
    <>
      <div className="text-accent text-center text-xs font-thin pb-2">
          <p>{options.copyright}</p>
      </div>
    </>
  );
}
