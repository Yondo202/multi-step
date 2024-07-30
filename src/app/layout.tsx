import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StepMenu from "@/components/StepMenu";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multi step challenge",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-dvh flex-col items-center justify-center">
          <div className="relative bg-card max-sm:bg-background h-[75dvh] max-sm:h-dvh w-full max-w-5xl rounded-3xl p-5 grid grid-cols-[300px_1fr] shadow-lg max-sm:grid-cols-1 max-sm:grid-rows-[auto_auto_1fr]">

            <StepMenu />

            <div className="p-8 px-20 relative z-20 max-sm:px-8 max-sm:bg-card max-sm:rounded-md max-sm:shadow-xl">
              {children}
            </div>

            <div className="hidden max-sm:block bg-secondary absolute h-56 w-full top-0 left-0 z-0"></div>
          </div>
        </main>
      </body>
    </html>
  );
}
