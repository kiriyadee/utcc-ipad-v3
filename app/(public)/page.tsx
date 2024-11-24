import {
  AnimationStudent,
  CicleAnimation,
} from "@/components/animation/student";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-4/5 container mx-auto">
      <div className="flex items-center bg-red-50">
        <section>
          <h1 className="mt-4 font-sans font-extrabold text-9xl text-gray-800">
            Check Out!
          </h1>
          <span className="font-sans font-bold text-7xl">The Your Ipad</span>
        </section>
        <section className="">
          <AnimationStudent />
        </section>
        <section className="">
          <CicleAnimation />
        </section>
      </div>
    </div>
  );
}
