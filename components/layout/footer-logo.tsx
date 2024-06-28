import Image from "next/image";
import React from "react";
import Links from "../links";

export default function FooterLogo() {
  return (
    <>
      <Links href="/" title="back to homepage" className="mb-5">
      <Image
          className="mx-auto mb-3"
            src="/images/logos/al-logo-v2.svg"
          alt="Argya Legal"
          width="100"
          height="100"
          title="Argya Legal"
        />  
        <p className="text-center text-al-primary text-xl">
           {/* Λrgħyä Legal */}
        {/* <span> */}
        <span className="text-gray-900">Λrg</span><span className="text-red-800">ħyä</span> 
            {" "} Legal
            {/* {subtitle} */}  
            {/* </span> */}
            </p>
      </Links>
    </>
  );
}
