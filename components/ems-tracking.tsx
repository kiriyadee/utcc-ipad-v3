"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  Truck,
  Package,
  MapPin,
  AlertTriangle,
} from "lucide-react";
// import { toast } from "@/components/ui/use-toast";
import toast, { Toaster } from "react-hot-toast";

interface TrackingStep {
  date: string;
  time: string;
  location: string;
  status: string;
  description: string;
}

const trackingData: TrackingStep[] = [
  {
    date: "2023-09-27",
    time: "14:30",
    location: "Bangkok Sorting Center",
    status: "In Transit",
    description:
      "Package has left the sorting facility and is en route to the next destination.",
  },
  {
    date: "2023-09-26",
    time: "09:15",
    location: "Bangkok Post Office",
    status: "Processed",
    description: "Package has been processed and is ready for dispatch.",
  },
  {
    date: "2023-09-25",
    time: "16:45",
    location: "Sender's Location",
    status: "Picked up",
    description: "Package has been collected from the sender.",
  },
];

export default function EnhancedEMSTracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      toast.error("Error: Please enter a valid tracking number.", {
        style: {
          background: "red",
          color: "white",
        },
      });
      return;
    }
    setIsLoading(true);
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsTracking(true);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "In Transit":
        return <Truck className="text-blue-500" />;
      case "Processed":
        return <Package className="text-green-500" />;
      case "Picked up":
        return <MapPin className="text-purple-500" />;
      default:
        return <AlertTriangle className="text-yellow-500" />;
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-blue-800">
            EMS Tracking
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleTrack} className="space-y-4">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Enter tracking number"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Tracking..." : "Track"}
              </Button>
            </div>
          </form>

          <AnimatePresence>
            {isTracking && (
              <div className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Package className="text-blue-600" />
                      <span className="font-semibold">{trackingNumber}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-green-600">
                      <CheckCircle2 />
                      <span>In Transit</span>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200" />
                    <Accordion type="single" collapsible className="space-y-4">
                      {trackingData.map((step, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                          <AccordionTrigger className="text-left">
                            <div className="flex items-center space-x-4">
                              <div className="bg-white p-2 rounded-full shadow-md">
                                {getStatusIcon(step.status)}
                              </div>
                              <div>
                                <p className="font-semibold">{step.status}</p>
                                <p className="text-sm text-gray-500">
                                  {step.date} - {step.time}
                                </p>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="ml-14">
                              <p className="text-gray-700">{step.location}</p>
                              <p className="text-sm text-gray-600 mt-2">
                                {step.description}
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>

                  <div className="mt-8 text-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className="text-gray-600">
                        Estimated Delivery: September 30, 2023
                      </p>
                      <Button className="mt-4" variant="outline">
                        Subscribe to Updates
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
}
