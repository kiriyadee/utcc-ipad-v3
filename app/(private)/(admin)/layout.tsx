import { auth } from "@/lib/auth";
import { hasAdminRole } from "@/lib/authorization";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/admin-sidebar";
import DashboardNavbar from "@/components/admin/admin-navbar";
import Footer from "@/components/admin/footer";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/admin-login");
  }

  const isAdmin = await hasAdminRole(session.user.id);

  if (!isAdmin) {
    redirect("/admin-login?error=Unauthorized");
  }

  return (
    <div>
      <div>
        <DashboardNavbar />
      </div>

      <div className="flex">
        <AdminSidebar />
        <main className="p-5 w-full">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
