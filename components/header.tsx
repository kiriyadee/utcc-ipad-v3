"use client";

import * as React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { LogIn, Menu, Search } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

interface SignInButtonProps {
  onSignIn: () => void;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between m-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/UTCC.png"
                alt="UTCC Logo"
                className="flex items-center space-x-2"
                width={250}
                height={20}
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
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
                className="w-[250px] pr-8 rounded-full border-blue-800 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
              <Search className="absolute right-2.5 top-2.5 h-6 w-6 text-gray-400 pointer-events-none -mt-1" />
            </form>
            <LanguageSelector />
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <div className="ml-5 inline-block">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>

    // <header
    //   className={cn(
    //     "sticky top-0 z-50 w-full transition-all duration-300",
    //     isScrolled ? "bg-white shadow-md" : "bg-transparent"
    //   )}
    // >
    //   <div className="container mx-auto px-4">
    //     <div className="flex h-16 items-center justify-between">
    //       <div className="flex items-center">
    //         {/* <BlendingModeIcon className="mr-2" /> */}
    //         <Link href="/" className="">
    //           <Image
    //             src="/UTCC.png"
    //             alt="UTCC Logo"
    //             className="flex items-center space-x-2"
    //             width={250}
    //             height={20}
    //           />
    //           <span className="text-xl font-bold">UTCC</span>
    //         </Link>
    //       </div>
    //       <div>
    //         <nav className="hidden md:flex space-x-4">
    //           <NavItem href="/about">About</NavItem>
    //           <NavItem href="/academics">Academics</NavItem>
    //           <NavItem href="/admission">Admission</NavItem>
    //           <NavItem href="/research">Research</NavItem>
    //           <NavItem href="/contact">Contact</NavItem>
    //         </nav>
    //         <div className="flex items-center space-x-4">
    //           <form className="hidden lg:block">
    //             <Input
    //               type="search"
    //               placeholder="Search..."
    //               className="w-[200px]"
    //             />
    //           </form>
    //           <LanguageSelector />
    //           <Button variant="outline" size="icon" className="md:hidden">
    //             <Menu className="h-6 w-6" />
    //             <span className="sr-only">Toggle menu</span>
    //           </Button>
    //         </div>
    //         {/* <Link href="https://www.shadriz.com" className="mr-4">
    //         Docs
    //       </Link>
    //       <Link href="/dashboard" className="mr-4">
    //         Dashboard
    //       </Link>
    //       <Link href="/admin" className="mr-4">
    //         Admin
    //       </Link>
    //       <Link href="/signin">Sign In</Link>
    //       <div className="ml-5 inline-block">
    //         <ModeToggle />
    //       </div> */}
    //       </div>
    //     </div>
    //   </div>
    // </header>
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
      className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
}

function LanguageSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
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
