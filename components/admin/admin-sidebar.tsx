import { DashboardIcon, ExitIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const SIDEBAR_LINKS = [
  { href: "/admin/customers", display: "Customers", icon: <DashboardIcon /> },
  { href: "/admin/posts", display: "Posts", icon: <DashboardIcon /> },
  { href: "/admin", display: "Admin", icon: <DashboardIcon /> },
  { href: "/signout", display: "Sign Out", icon: <ExitIcon /> },
];

export default function AdminSidebar() {
  return (
    <aside className="py-8 min-w-40 max-w-sm px-5 border-r min-h-screen flex flex-col gap-2">
      {SIDEBAR_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="flex gap-2 items-center"
        >
          {link.icon} {link.display}
        </Link>
      ))}
    </aside>
  );
}
