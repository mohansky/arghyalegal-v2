import HeroPage from "@/components/hero-page";
import { options } from "@/.velite"; 
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact | ${options.title}`,
  description: `${options.description}`,
  keywords: `${options.keywords}, Bangalore`,
  metadataBase: new URL(`${options.basepath}`),
  alternates: {
    canonical: "/contact",
  },
};


export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeroPage image="/images/hero/contact-us.jpg" title="Contact"/>
      <main>{children}</main>
    </>
  );
}
