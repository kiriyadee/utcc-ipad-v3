import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
// import DashboardSidebar from "@/components/private/dashboard-sidebar";
import DashboardNavbar from "@/components/private/dashboard-navbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }
  return (
    <div>
      <DashboardNavbar />
      <div className="flex">
        {/* <DashboardSidebar /> */}

        <main className="p-5 w-full">{children}</main>
      </div>
    </div>
  );
}
