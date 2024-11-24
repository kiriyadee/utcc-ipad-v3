import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "flex items-center text-sm font-sans space-x-4 lg:space-x-6",
        className
      )}
      {...props}
    >
      <Image
        src="https://res.cloudinary.com/dvoitjvzk/image/upload/v1727589565/UTCC_Horizontal.png"
        width={175}
        height={45}
        alt={"UTCC_Logo"}
      />
      <Link
        href="/student/"
        className="font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/student/status"
        className="font-medium transition-colors hover:text-primary active:underline"
      >
        Status
      </Link>
      <Link
        href="/tracking"
        className="font-medium transition-colors hover:text-primary active:underline"
      >
        Tracking
      </Link>
      {/* <Link
        href="/student/settings"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Customers
      </Link>
      <Link
        href="/student/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Products
      </Link> */}
      <Link
        href="/student/settings"
        className="font-medium transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  );
}
