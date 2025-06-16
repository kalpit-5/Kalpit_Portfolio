import type { Metadata, Viewport } from "next";
import { Inter, Parisienne } from "next/font/google";
import type { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";


import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
});


export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className,
          parisienne.variable
        )}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#1f1d2b",
              color: "#fff",
              border: "1px solid #915EFF",
            },
            success: {
              iconTheme: {
                primary: "#915EFF",
                secondary: "#1f1d2b",
              },
            },
            error: {
              iconTheme: {
                primary: "#FF4B4B",
                secondary: "#1f1d2b",
              },
            },
          }}
        />

      </body>
    </html>
  );
}
