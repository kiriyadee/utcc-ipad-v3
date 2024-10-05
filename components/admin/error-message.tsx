"use client";

import * as React from "react";
import { toast, Toaster } from "react-hot-toast";

const ErrorMessage = ({
  error,
  searchParams,
}: {
  error: string;
  searchParams: { error: string };
}) => {
  React.useEffect(() => {
    if (searchParams?.error === "Unauthorized") {
      // Clear all existing toasts
      toast.dismiss();
      // Show the new error toast
      toast.error("Unauthorized", {
        duration: 2000,
        position: "top-center",
        className: "toast-class",
        ariaProps: {
          role: "alert",
          "aria-live": "assertive",
        },
      });
    }
  }, [searchParams.error]);

  return (
    <div className="text-red-500">
      <Toaster />
      <p>{error}</p>
    </div>
  );
};

export default ErrorMessage;
