import * as React from "react";

import { signIn } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { Lock, LogIn } from "lucide-react";
import ErrorMessage from "@/components/admin/error-message";

export default function AdminLoginPage({
  searchParams,
}: {
  searchParams: { error: string };
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <Lock className="mr-2 h-6 w-6" />
          <CardTitle className="text-2xl font-bold flex items-center">
            Admin Login
          </CardTitle>
          <CardDescription>
            Enter your email and password to access the admin panel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            key={"credentials"}
            className="flex flex-col gap-2 items-center w-full space-y-4"
            action={async (formData: FormData) => {
              "use server";
              try {
                await signIn("credentials", {
                  redirectTo: "/admin",
                  email: formData.get("email"),
                  password: formData.get("password"),
                });
              } catch (error) {
                if (error instanceof AuthError) {
                  return redirect(`/admin-login/?error=${error.type}`);
                }
                throw error;
              }
            }}
          >
            <div className="w-full space-y-2">
              <Label>Email</Label>
              <Input
                type="text"
                name="email"
                placeholder="student_id@@live4.utcc.ac.th"
                required
              />
            </div>
            <div className="w-full space-y-2">
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              <LogIn className="w-5 h-5 mr-2" />
              Log In
            </Button>
          </form>
          {searchParams.error === "Unauthorized" && (
            // <div className="text-red-500">Unauthorized</div>
            <ErrorMessage error="Unauthorized" searchParams={searchParams} />
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="link" className="text-sm text-muted-foreground">
            Forgot password?
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
