import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <section>
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Full Stack TypeScript Automation
          </h1>
          <p className="mt-4">Build full stack Next.js apps super fast.</p>
          <Link href="https://www.shadriz.com" className="mt-5 block">
            <Button className="rounded-full">Get Started</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
