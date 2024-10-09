import { SignOutDialog } from "@/components/sign-out";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/lib/auth";
import Link from "next/link";

export async function UserNavbar() {
  const session = await auth();
  const profileImage =
    "https://res.cloudinary.com/dvoitjvzk/image/upload/v1728099868/AdobeStock_590598870_Preview-transformed-removebg_esiprw.png";
  return (
    <>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-8 w-8 rounded-full bg-white"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={profileImage}
                  alt={profileImage.substring(1, 3)}
                />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  <div>{session?.user?.name}</div>
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  <div>Email: {session?.user?.email}</div>
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href="/student/profile" className="hover:pointer">
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <Link href="/student/settings" className="hover:pointer">
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
              {/* <DropdownMenuItem>New Team</DropdownMenuItem> */}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />

            <div className="hover:bg-slate-100 relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 z-50 min-w-[8rem] overflow-hidden text-popover-foreground">
              <SignOutDialog />
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
