import Image from "next/image";
import SignInForm from "./form";

export default async function SignInPage() {
  return (
    <div className="min-h-dvh flex items-center justify-center -mt-64">
      <div className="flex-col max-w-md px-4 py-8 bg-white rounded-md shadow-lg sm:px-6 md:px-8 lg:px-10">
        <div className="items-center justify-between pr-4 ">
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
