"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  RefreshCw,
  Search,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 min-h-screen">
      <div className="text-center space-y-6 max-w-2xl w-full bg-white p-12">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-blue-800 sm:text-6xl">
            Oops!
          </h1>
          <h2 className="text-3xl font-semibold text-gray-700 sm:text-4xl">
            Something went wrong
          </h2>
        </div>
        <p className="text-xl text-gray-600">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        {error.digest && (
          <p className="text-sm text-gray-500">Error ID: {error.digest}</p>
        )}
        <div className="grid gap-4 pt-6 sm:grid-cols-2">
          <Button onClick={reset} className="bg-blue-700 hover:bg-blue-800">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try again
          </Button>
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Homepage
            </Link>
          </Button>
        </div>
        <div className="pt-6">
          <form onSubmit={handleSearch} className="flex space-x-2">
            <Input
              type="search"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit" className="bg-blue-700 hover:bg-blue-800">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq">
            <AccordionTrigger>Frequently Asked Questions</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2 text-left">
                <li>What should I do if I keep seeing this error?</li>
                <li>How can I report a persistent issue?</li>
                <li>Where can I find more help resources?</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="contact">
            <AccordionTrigger>Contact Support</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-700" />
                  <span>support@utcc.ac.th</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-700" />
                  <span>+66 2 697 6000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-blue-700" />
                  <span>Live Chat (Available 9 AM - 5 PM)</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <div className="mt-8 text-sm text-gray-600">
            © {new Date().getFullYear()} University of the Thai Chamber of
            Commerce
          </div>
        </Accordion>
      </div>
    </div>
  );
}
