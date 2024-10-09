import { redirect } from "next/navigation";
import { Metadata } from "next";

import { auth } from "@/lib/auth";
import Footer from "@/components/admin/footer";
import StudentNavbar from "@/components/private/components/student-navbar";

export const metadata: Metadata = {
  title: "Student | UTCC",
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
    console.log("No session found, redirecting to /signin");
    redirect("/signin");
  }
  return (
    <>
      <div className="min-h-svh">
        <StudentNavbar />
        <main className="p-5 w-full">{children}</main>
      </div>
      <Footer />
    </>
  );
}
