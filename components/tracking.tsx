"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type TrackingResult = {
  status: string;
  location: string;
  eta: string;
};

export default function TrackingNumber() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [result, setResult] = useState<TrackingResult | null>(null);

  const handleTracking = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Simulate tracking result
    setResult({
      status: "In Transit",
      location: "New York",
      eta: "2024-10-05",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-utccGray">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-4xl font-semibold text-utccBlue mb-6 text-center">
          EMS Tracking System
        </h1>
        <form onSubmit={handleTracking} className="flex flex-col gap-6">
          <Input
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Enter your tracking number"
            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-utccBlue"
          />
          <Button
            type="submit"
            className="bg-utccBlue hover:bg-utccDarkBlue text-white py-3 rounded-md"
          >
            Track
          </Button>
        </form>

        {result && (
          <div className="mt-8 border-t pt-4">
            <h2 className="text-2xl font-semibold text-utccDarkBlue mb-4">
              Tracking Information
            </h2>
            <ul className="space-y-2">
              <li className="text-lg">
                <strong>Status:</strong> {result.status}
              </li>
              <li className="text-lg">
                <strong>Location:</strong> {result.location}
              </li>
              <li className="text-lg">
                <strong>Estimated Delivery:</strong> {result.eta}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
