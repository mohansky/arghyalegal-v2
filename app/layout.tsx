import "./globals.css";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { options } from "@/.velite";
import PageTransition from "@/components/pagetransition";
import Menu from "@/components/layout/menu";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

const GTM_ID = "GTM-MTWDMSLH";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: `Home | ${options.title}`,
  description: `${options.description}`,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: `${options.keywords}`,
  authors: [{ name: "Ankur Deka Rabha" }, { name: "Mohan Kumar", url: "/" }],
  creator: "Mohan Kumar",
  publisher: "Ankur Deka Rabha",
  metadataBase: new URL(`${options.basepath}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Home | ${options.title}`,
    description: `${options.description}`,
    authors: ["Ankur", "Mohan"],
    images: `${options.ogImageURL}`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable}`}>
      <GoogleTagManager gtmId={`${GTM_ID}`} />

      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <PageTransition>
              <Menu />
              {children}
              <Footer />
            </PageTransition>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
