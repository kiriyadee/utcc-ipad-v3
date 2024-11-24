import { MainNav } from "./main-nav";
import { UserNavbar } from "./user-navbar";
import { auth } from "@/lib/auth";

export default async function StudentNavbar() {
  const session = await auth();
  return (
    <>
      <div className="flex-col md:flex">
        <div
          className="border-b text-gray-100"
          style={{
            backgroundColor: "#2e3192",
          }}
        >
          <div className="flex h-16 items-center px-4 lg:pr-10 lg:pl-10">
            <MainNav className="" />
            <div className="ml-auto flex items-center space-x-4">
              <span className="font-bold items-center justify-center flex">
                {session?.user?.name}
              </span>
              <div className="">
                <UserNavbar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
