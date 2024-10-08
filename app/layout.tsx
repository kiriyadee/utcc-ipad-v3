import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

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
      <GoogleAnalytics gaId="G-5304FZL3H3" />
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
