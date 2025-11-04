"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { RedirectToSignIn, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";

const navigationItems = [
  //{ href: "/dashboard", label: "Dashboard" },
  //{ href: "/course", label: "Cursos" },
  //{ href: "/video-analysis", label: "Análisis de Video" },
  //{ href: "/mind-map", label: "Mapa Mental" },
  { href: "/profile", label: "Perfil" },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { user } = useUser();

  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-background-light dark:bg-background-dark">
          <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-lg dark:border-slate-800 dark:bg-background-dark/80">
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <Link href="/dashboard" className="text-base font-semibold text-slate-900 dark:text-white">
                  University AI
                </Link>
                <nav className="hidden gap-2 text-sm font-medium sm:flex">
                  {navigationItems.map((item) => {
                    const isActive =
                      pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`rounded-full px-3 py-2 transition ${
                          isActive
                            ? "bg-primary text-white shadow-sm"
                            : "text-slate-600 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                {user ? (
                  <>
                    <span className="hidden sm:inline-flex flex-col text-right leading-tight">
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {user.fullName ?? user.username ?? user.primaryEmailAddress?.emailAddress ?? "Usuario"}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {user.primaryEmailAddress?.emailAddress}
                      </span>
                    </span>
                    <UserButton afterSignOutUrl="/login" />
                  </>
                ) : null}
              </div>
            </div>
            <div className="px-4 pb-3 text-xs text-slate-500 sm:hidden">
              <div className="flex flex-wrap gap-2">
                {navigationItems.map((item) => {
                  const isActive =
                    pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-full px-3 py-1 transition ${
                        isActive
                          ? "bg-primary text-white shadow-sm"
                          : "border border-slate-200 text-slate-600 hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </header>
          <main className="pt-24 sm:pt-20">{children}</main>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
