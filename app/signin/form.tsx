import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { signIn } from "@/lib/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export default function SignInForm() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col gap-2 items-center border rounded p-5 max-w-xs">
        <div>Sign In</div>

        <Separator className="my-4" />
        <form
          key={"credentials"}
          className="flex flex-col gap-2 items-center w-full"
          action={async (formData: FormData) => {
            "use server";
            try {
              await signIn("credentials", {
                redirectTo: "/dashboard",
                email: formData.get("email"),
                password: formData.get("password"),
              });
            } catch (error) {
              if (error instanceof AuthError) {
                return redirect(`/signin/?error=${error.type}`);
              }
              throw error;
            }
          }}
        >
          <div className="w-full">
            {/* <Input type="text" name="email" placeholder="shadriz@example.com" /> */}

            <div className="flex flex-col mb-4">
              <Label
                htmlFor="email"
                className="mb-1 text-xs tracking-wide text-gray-600 sm:text-sm"
              >
                E-Mail Address: @utcc.ac.th
              </Label>
              <div className="relative">
                <div className="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>

                <Input
                  className="w-full py-2 pl-10 pr-4 text-sm placeholder-gray-500 border border-gray-400 rounded-lg sm:text-base focus:outline-none focus:border-blue-400"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="E-Mail Address"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <Label
                htmlFor="password"
                className="mb-1 text-xs tracking-wide text-gray-600 sm:text-sm"
              >
                Password
              </Label>
              <div className="relative">
                <div className="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400">
                  <span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  name="password"
                  className="w-full py-2 pl-10 pr-4 text-sm placeholder-gray-500 border border-gray-400 rounded-lg sm:text-base focus:outline-none focus:border-blue-400"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
          </div>

          {/* <div className="w-full">
          <Label>Password</Label>
          <Input type="password" name="password" placeholder="password" />
        </div> */}
          <Button className="w-full" type="submit">
            <span>Sign in with Credentials</span>
          </Button>
        </form>
        <Separator className="my-4" />
        <form
          key={"google"}
          className="flex flex-col gap-2 items-center w-full"
          action={async () => {
            "use server";
            try {
              await signIn("google", {
                redirectTo: "/dashboard",
              });
            } catch (error) {
              if (error instanceof AuthError) {
                return redirect(`/signin/?error=${error.type}`);
              }
              throw error;
            }
          }}
        >
          <Button className="w-full" type="submit">
            <span>Sign in with Google</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
