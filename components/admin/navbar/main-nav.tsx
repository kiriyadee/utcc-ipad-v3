"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Image
        src="https://res.cloudinary.com/dvoitjvzk/image/upload/v1727589565/UTCC_Horizontal.png"
        width={175}
        height={45}
        alt={"UTCC_Logo"}
      />
      <Link
        href="/admin"
        className={`link ${
          pathname === "/admin"
            ? "active text-sm font-medium text-gray-50 transition-colors hover:text-primary"
            : "text-sm font-medium text-gray-300 transition-colors hover:text-primary"
        }`}
      >
        Overview
      </Link>
      <Link
        href="/admin/customers"
        className={`link ${
          pathname === "/admin/customers"
            ? "active text-sm font-medium text-gray-50 transition-colors hover:text-primary"
            : "text-sm font-medium text-gray-300 transition-colors hover:text-primary"
        }`}
      >
        Customers
      </Link>
      <Link
        href="/admin/students"
        className={`link ${
          pathname === "/admin/students"
            ? "active text-sm font-medium text-gray-50 transition-colors hover:text-primary"
            : "text-sm font-bold text-gray-300 transition-colors hover:text-primary"
        }`}
      >
        Students
      </Link>
      <Link
        href="/admin/posts"
        className={`link ${
          pathname === "/admin/posts"
            ? "active text-sm font-medium text-gray-50 transition-colors hover:text-primary"
            : "text-sm font-medium text-gray-300 transition-colors hover:text-primary"
        }`}
      >
        Posts
      </Link>
      <Link
        href="/admin/settings"
        className={`link ${
          pathname === "/admin/settings"
            ? "active text-sm font-medium text-gray-50 transition-colors hover:text-primary"
            : "text-sm font-medium text-gray-300 transition-colors hover:text-primary"
        }`}
      >
        Settings
      </Link>
    </nav>
  );
}
