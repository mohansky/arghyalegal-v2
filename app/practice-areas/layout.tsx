import HeroPage from "@/components/hero-page";
import { options } from "@/.velite"; 
import { Metadata } from "next";
 
export const metadata: Metadata = {
  title: `Practice Areas | ${options.title}`,
  description: `${options.description}`,
  keywords: `${options.keywords}, Commercial Transactions, Regulatory Compliance & Training, Contracts Management, Dispute Resolution`,
  metadataBase: new URL(`${options.basepath}`),
  alternates: {
    canonical: "/practice-areas",
  },
};


export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <HeroPage image="/images/hero/practice-areas.jpg" title="Practice Areas"/> */}
      <main>{children}</main>
    </>
  );
}


