import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course AI Platform",
  description: "Interactive university learning interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-display bg-background-light text-text-light-primary dark:bg-background-dark dark:text-text-dark-primary">
        {children}
      </body>
    </html>
  );
}
