import type { Metadata } from "next";
import { Indie_Flower } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

const indie_flower = Indie_Flower({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Ankan Ghorai",
  description: "Personal Portfolio of Ankan Ghorai",
  icons: {
    icon: "/AG.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/AG.png" sizes="any" />
      </head>
      <body className={`${indie_flower.className}`}>
        <div className="overflow-x-hidden md:overflow-x-visible horizontal-graph-bg ">
          <div className="max-w-[1332px] mx-auto ">
            <NavBar />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
