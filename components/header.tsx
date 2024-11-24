"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { LogIn, Search } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

interface SignInButtonProps {
  onSignIn: () => void;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out lg:py-1 py-2 pr-4 lg:pr-0",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/img/UTCC_LOGO.png" // Use this sample image or upload your own via the Media Explorer
                alt="UTCC Logo"
                className="flex items-center space-x-2"
                width={250}
                height={20}
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4 lg:space-x-6 md:pr-4">
            <NavItem href="/about">About</NavItem>
            <NavItem href="/academics">Academics</NavItem>
            <NavItem href="/tracking">Tracking</NavItem>
            <NavItem href="/devices">Devices</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </nav>
          <div className="flex items-center space-x-4">
            <form className="hidden lg:flex items-center relative">
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] pr-8 rounded-full border-blue-800 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
              <Search className="absolute right-2.5 top-2.5 h-6 w-6 text-gray-400 pointer-events-none -mt-1" />
            </form>

            <SignInButton onSignIn={() => handleNavigation("/signin")} />

            <div className="hidden lg:flex">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="lg:text-md text-sm font-normal text-gray-600 hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
}

function LanguageSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="utcc" size="sm">
          EN
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>English</DropdownMenuItem>
        <DropdownMenuItem>ภาษาไทย</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function SignInButton({ onSignIn }: SignInButtonProps) {
  return (
    <Button
      onClick={onSignIn}
      className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 active:scale-95"
    >
      <LogIn className="w-5 h-5 mr-2" />
      Sign In
    </Button>
  );
}
