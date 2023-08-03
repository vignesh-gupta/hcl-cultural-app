import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { icons } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HCLTECH's Cultural Data Platform",
  description:
    "An application to collect data about company culture from employees anonymously",
  authors: {
    name: "Vignesh Gupta",
    url: "http://vigneshgupta.netlify.app/",
  },
  openGraph: {
    type: "website",
    title: "HCLTECH's Cultural Data Platform",
    description:
      "An application to collect data about company culture from employees anonymously",
    url: "https://hcltech-culture.vercel.app/",
    images: "https://hcl-cultural-app.vercel.app/HCL-LOGO.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex flex-col min-h-screen")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="grow bg-primary">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
