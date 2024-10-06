import { MainNav } from "./main-nav";
import PaymentStatus from "./payment-status";
import { UserNavbar } from "./user-navbar";

export default function StudentNavbar() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div
          className="border-b text-gray-100"
          style={{
            backgroundColor: "#2e3192",
          }}
        >
          <div className="flex h-16 items-center px-4 lg:pr-10 lg:pl-10">
            <MainNav className="" />
            <div className="ml-auto flex items-center space-x-4">
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
