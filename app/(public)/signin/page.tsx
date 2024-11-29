import { auth } from "@/lib/auth";
import dynamic from "next/dynamic";
import Image from "next/image";
import { redirect } from "next/navigation";

const SignInForm = dynamic(() => import("./form"), {
  ssr: true,
  loading: () => <div>Loading...</div>,
});

export default async function SignInPage() {
  const session = await auth();
  if (session) {
    redirect("/student");
  }
  return (
    <div className="lg:min-h-dvh flex items-center justify-center">
      <div className="flex flex-col px-4 py-8 md:-p-4 bg-white lg:w-2/6 -mt-10 lg:mt-0 md:mt-0 rounded-md lg:shadow-lg shadow-none sm:px-6 md:px-8 sm:max-w-sm md:max-w-lg lg:max-w-3xl">
        <div className="items-center place-self-center flex">
          <Image
            src="/public/img/UTCC_Vertical.png"
            width={275}
            height={50}
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

        <div className="mt-6 lg:mt-10 lg:w-full">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
