import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessProvider from "@/components/providers/session";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Practics NextJs!",
  icons: "/icon.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SessProvider>
  );
}
