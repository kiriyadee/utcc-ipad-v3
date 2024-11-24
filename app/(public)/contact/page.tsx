"use client";

import { CldImage } from "next-cloudinary";

export default function ContactPage() {
  return (
    <div className="min-h-full">
      <div className="overflow-hidden">
        <div className="inset-0">
          <CldImage
            src="utcc-maps" // Use this sample image or upload your own via the Media Explorer
            width="1920" // Transform the image: auto-crop to square aspect_ratio
            height="1080"
            alt={""}
          />
        </div>
      </div>
    </div>
  );
}
