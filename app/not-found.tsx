"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CldImage } from "next-cloudinary";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <Header />
      <div className="min-h-svh flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: 2 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 bg-white flex flex-col justify-center items-center"
        >
          <CldImage
            className="mb-8 h-21 object-contain shadow-blue-400 filter drop-shadow-lg rounded-lg"
            src="UTCC_Horizontal" // Use this sample image or upload your own via the Media Explorer
            width="550" // Transform the image: auto-crop to square aspect_ratio
            height="250"
            alt={"UTCC Logo"}
          />

          <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
            University of the Thai Chamber of Commerce
          </h2>
          <p className="text-gray-800 mb-8 text-center max-w-md">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
          <Button
            onClick={() => router.push("/")}
            asChild
            className="bg-blue-800 hover:bg-blue-700 text-white"
          >
            <Link href="/" className="flex items-center gap-2">
              Go to Homepage
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Accordion type="single" collapsible className="w-full mt-20">
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
                    <Link href={"mailto:support@utcc.ac.th"}>
                      <span>support@utcc.ac.th</span>
                    </Link>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-blue-700" />
                    <Link href={"tel:+6626976000"}>
                      <span>+66 2 697 6000</span>
                    </Link>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5 text-blue-700" />
                    <span>Live Chat (Available 9 AM - 5 PM)</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
