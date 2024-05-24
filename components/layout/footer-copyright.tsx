import FooterContactData from "@/data/footercontact.json"; 

export default function Copyright() {
  return (
    <>
      <div className="text-center text-xs font-thin pb-2">
          <p>{FooterContactData.copyright}</p>
      </div>
    </>
  );
}
