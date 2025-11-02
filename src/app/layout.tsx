import type { Metadata } from "next";
import { ClerkProvider, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
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
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased font-display bg-background-light text-text-light-primary dark:bg-background-dark dark:text-text-dark-primary">
          <SignedOut>
            <header className="flex h-16 items-center justify-end gap-3 px-4 sm:px-6">
              <div className="flex items-center gap-3">
                <SignInButton mode="modal">
                  <button className="rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary/90">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </header>
          </SignedOut>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
