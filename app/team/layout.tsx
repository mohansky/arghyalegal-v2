import HeroPage from "@/components/hero-page";
import { options } from "@/.velite"; 
import { Metadata } from "next";

export const metadata: Metadata  = {
  title: `Our Team | ${options.title}`,
  description: `${options.description}`,
  keywords: `${options.keywords}, Ankur Deka Rabha, Anima Gogoi Deka`,
  metadataBase: new URL(`${options.basepath}`),
  alternates: {
    canonical: "/team",
  },
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeroPage image="/images/hero/team.jpg" title="Our Team"/>
      <main>{children}</main>
    </>
  );
}
