import HeroPage from "@/components/hero-page";
import { options } from "@/.velite"; 
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Why Us | ${options.title}`,
  description: `${options.description}`,
  keywords: `${options.keywords}, Availability, Partnership, Practicality, Customisation, Responsiveness`,
  metadataBase: new URL(`${options.basepath}`),
  alternates: {
    canonical: "/whyus",
  },
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeroPage image="/images/hero/why-us1.jpg" title="Why Us" />
      <main>{children}</main>
    </>
  );
}
