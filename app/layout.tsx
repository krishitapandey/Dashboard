import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Members Directory | Professional Dashboard",
  description: "A premium dashboard with custom typography.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className=" bg-background text-foreground tracking-tight">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}