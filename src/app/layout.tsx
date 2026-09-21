import type { Metadata } from "next";
import { Bagel_Fat_One, Inter, Space_Mono } from "next/font/google";
import MetaRow from "@/components/MetaRow";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const bagelFatOne = Bagel_Fat_One({
  variable: "--font-bagel-fat-one",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Freelance portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bagelFatOne.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <MetaRow />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
