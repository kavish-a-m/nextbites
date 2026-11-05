import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextBites | Easy recipes for every day",
  description: "Discover delicious, approachable recipes with NextBites.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="min-h-screen bg-[#fffdf9] font-sans text-stone-900">
        <nav className="border-b border-orange-100 bg-[#fffdf9] px-6 py-4">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
            <Link className="text-xl font-black tracking-tight text-orange-600" href="/">NextBites</Link>
            <div className="flex items-center gap-5 text-sm font-semibold text-stone-600">
              <a className="transition hover:text-orange-600" href="#recipes">Recipes</a>
              <a className="rounded-full bg-stone-900 px-4 py-2 text-white transition hover:bg-orange-600" href="#recipes">Start cooking</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="border-t border-orange-100 px-6 py-8 text-center text-sm text-stone-500">Made for home cooks with big appetites.</footer>
      </body>
    </html>
  );
}
