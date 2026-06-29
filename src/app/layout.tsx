import "./globals.css";
import type { Metadata } from "next";
import { Nav } from "@/components/ui";

export const metadata: Metadata = {
  title: "MoneyOS 101 — learn real money skills",
  description: "Free, educational financial literacy: budgeting, credit, debt payoff, investing basics, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="container-page">{children}</main>
      </body>
    </html>
  );
}
