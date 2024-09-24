import {
  DashboardIcon,
  ExitIcon,
  GearIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import TeamSwitcher from "./navbar/team-switcher";
import { MainNav } from "./navbar/main-nav";
import { Search } from "./navbar/search";
import { UserNav } from "./navbar/user-nav";
import { CalendarDateRangePicker } from "./navbar/date-range-picker";
import { Overview } from "./navbar/overview";
import { RecentSales } from "./navbar/recent-sales";

const SIDEBAR_LINKS = [
  { href: "/dashboard", display: "Dashboard", icon: <DashboardIcon /> },
  { href: "/dashboard/profile", display: "Profile", icon: <PersonIcon /> },
  { href: "/dashboard/settings", display: "Settings", icon: <GearIcon /> },
  { href: "/dashboard/signout", display: "Sign Out", icon: <ExitIcon /> },
];

export default function DashboardNavbar() {
  return (
    <>
      <div className="hidden flex-col md:flex -">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
