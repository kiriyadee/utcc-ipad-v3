"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-full">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            width={1920}
            height={1080}
            src="/UTCC_building-Diagram_2022.jpg"
            alt="UTCC Campus"
            className="w-full object-cover lg:mt-0"
            layout="responsive"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
