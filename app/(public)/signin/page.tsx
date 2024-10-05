import Image from "next/image";
import dynamic from "next/dynamic";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const SignInForm = dynamic(
  () =>
    import("./form")
      .then((mod) => mod.default)
      .catch(() => () => <div>Failed to load</div>),
  { ssr: false }
);

export default async function SignInPage() {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="lg:min-h-dvh flex items-center justify-center pb-4">
      <div className="flex flex-col px-4 py-8 md:-p-4 bg-white rounded-md lg:shadow-lg shadow-none sm:px-6 md:px-8 sm:max-w-sm md:max-w-lg lg:max-w-3xl">
        <div className="items-center justify-between flex">
          <Image
            src="/UTCC.png"
            width={350}
            height={75}
            alt="UTCC"
            loading="lazy"
          />
        </div>
        <div className="relative h-px mt-6 bg-gray-300">
          <div className="absolute top-0 left-0 flex justify-center w-full -mt-2">
            <span className="px-4 text-xs text-gray-500 uppercase bg-white">
              Login With UTCC Account
            </span>
          </div>
        </div>

        <div className="mt-10">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
