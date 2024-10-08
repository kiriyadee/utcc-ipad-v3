import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
