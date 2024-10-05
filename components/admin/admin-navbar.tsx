import TeamSwitcher from "./navbar/team-switcher";
import { MainNav } from "./navbar/main-nav";
import { Search } from "./navbar/search";
import { UserNav } from "./navbar/user-nav";

export default function AdminNavbar() {
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
