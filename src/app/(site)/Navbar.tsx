"use client";

import Link from "next/link";
import { Zap, X } from "lucide-react";
import { useEffect, useState } from "react";
import { getGitHubStars } from "@/utils/github";

export default function Navbar() {
  const [stars, setStars] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const repo = "idee8/shipfree";

  useEffect(() => {
    getGitHubStars(repo).then(setStars);
  }, []);

  const formatStars = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#212121]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Zap
              className="h-10 w-10"
              fill="#FFBE18"
              stroke="black"
              strokeWidth={1.4}
            />
            <span className="text-lg font-semibold text-white">ShipFree</span>
          </Link>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#pricing"
            className="text-base text-white/90 transition hover:text-white"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="text-base text-white/90 transition hover:text-white"
          >
            FAQ
          </Link>
          <Link
            href="#wall-of-love"
            className="text-base text-white/90 transition hover:text-white"
          >
            Wall of love
          </Link>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`https://github.com/${repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-[#2C2C2C] px-4 py-2 text-sm text-white/90 transition hover:bg-[#3C3C3C]"
          >
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Star us on GitHub
            {stars !== null && (
              <span className="flex h-5 items-center rounded-full bg-white/10 px-2 font-medium">
                {formatStars(stars)}
              </span>
            )}
          </a>
        </div>

        <div className="flex md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white"
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="#pricing"
              className="block rounded-md px-3 py-2 text-base font-medium text-white/90 hover:bg-[#3C3C3C] hover:text-white"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="block rounded-md px-3 py-2 text-base font-medium text-white/90 hover:bg-[#3C3C3C] hover:text-white"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            <Link
              href="#wall-of-love"
              className="block rounded-md px-3 py-2 text-base font-medium text-white/90 hover:bg-[#3C3C3C] hover:text-white"
              onClick={toggleMenu}
            >
              Wall of love
            </Link>
            <Link
              href="/docs"
              className="block rounded-md px-3 py-2 text-base font-medium text-white/90 hover:bg-[#3C3C3C] hover:text-white"
              onClick={toggleMenu}
            >
              Docs
            </Link>
            <a
              href={`https://github.com/${repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-white/90 hover:bg-[#3C3C3C] hover:text-white"
              onClick={toggleMenu}
            >
              <svg
                viewBox="0 0 16 16"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              Star us on GitHub
              {stars !== null && (
                <span className="flex h-5 items-center rounded-full bg-white/10 px-2 font-medium">
                  {formatStars(stars)}
                </span>
              )}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
