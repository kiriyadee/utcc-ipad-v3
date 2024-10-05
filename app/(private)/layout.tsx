import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import DashboardNavbar from "@/components/private/dashboard-navbar";
import Footer from "@/components/private/footer";
import "../globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPAD | UTCC",
  description:
    "UTCC iPad Checkout system allows University of the Thai Chamber of Commerce students to securely manage iPad loans, track their status, and access support services for efficient academic use.",
  openGraph: {
    title: "IPAD | UTCC",
    description:
      "UTCC iPad Checkout system allows University of the Thai Chamber of Commerce students to securely manage iPad loans, track their status, and access support services for efficient academic use.",
    url: "https://ipad.utcc.ac.th",
    images: [
      {
        url: "https://res.cloudinary.com/dvoitjvzk/image/upload/v1727589565/UTCC_Horizontal.png",
        width: 800,
        height: 600,
        alt: "UTCC_Horizontal",
      },
    ],
  },
};

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
    <html lang="en">
      <body>
        <DashboardNavbar />
        <div className="flex">
          <main className="p-5 w-full">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
