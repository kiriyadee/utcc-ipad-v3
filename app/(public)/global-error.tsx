"use client";

import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

type Props = {
  error: Error & { digest?: string };
  reset(): void;
};

export default function RootGlobalError(props: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <h2 className="text-gray-900">Something went wrong!</h2>
        <Button onClick={() => props.reset()}>Try again</Button>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Server Error | UTCC",
};
