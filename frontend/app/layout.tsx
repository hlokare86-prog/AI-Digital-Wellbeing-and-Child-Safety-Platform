import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Wellbeing & Child Safety",
  description: "AI-powered digital wellbeing and child safety platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}