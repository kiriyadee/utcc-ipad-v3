import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "react-hot-toast";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

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
      <GoogleTagManager gtmId="G-5304FZL3H3" />
      <body>
        <Analytics />
        <SpeedInsights />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
