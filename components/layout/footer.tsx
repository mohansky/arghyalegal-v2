import React from "react";
import Image from "next/image"; 
// import { Heading } from "../heading";
// import SocialLinks from "../social-links";
// import FooterNote from "../footer-note";
import Container from "../styled-comps/container";
import FooterMenu from "./footer-menu";
import FooterContact from "./footer-contact";
import FooterLogo from "./footer-logo";
import Copyright from "./footer-copyright";

export default function Footer() {
  return (
    <>
      <footer className="bg-accent border-t-8 border-primary mt-5">
      <div className="text-white py-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <FooterLogo />
        <FooterContact />
        <FooterMenu />
      </div>
      <Copyright />
    </footer>
    </>
  );
}
