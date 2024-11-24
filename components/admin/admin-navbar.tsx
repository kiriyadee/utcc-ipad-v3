import { MainNav } from "./navbar/main-nav";
import { UserNav } from "./navbar/user-nav";

export default function AdminNavbar() {
  return (
    <>
      <div
        className="border-b text-gray-100"
        style={{
          backgroundColor: "#2e3192",
        }}
      >
        <div className="hidden flex-col md:flex">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <MainNav className="mx-6" />
              <div className="ml-auto flex items-center space-x-4">
                <UserNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
