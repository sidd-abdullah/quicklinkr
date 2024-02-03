import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "./_components/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4">{children}</main>
      <Footer />
    </>
  );
}