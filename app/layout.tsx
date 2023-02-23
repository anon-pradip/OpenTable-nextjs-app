import "./globals.css";
import Nav from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="mx-auto max-w-screen-xl">
        <Nav />
        {children}
      </body>
    </html>
  );
}
