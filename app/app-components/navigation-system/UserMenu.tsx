import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRightToLineIcon, LogInIcon, UserIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@clerk/nextjs";

const UserMenu = () => {
  const { isSignedIn } = useAuth();

  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      {!isSignedIn && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <SignedOut>
              <div className="text-white flex gap-3">
                <Avatar>
                  <AvatarImage src="/images/avatar.png" alt="avatar" />
                  <AvatarFallback className="bg-black">
                    <UserIcon className="w-7 h-7" />
                  </AvatarFallback>
                </Avatar>
              </div>
            </SignedOut>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignInButton>
                <p className="flex gap-2 items-center">
                  <LogInIcon className="w-4 h-4" />
                  <span className="">Log in</span>
                </p>
              </SignInButton>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SignUpButton>
                <p className="flex gap-2 items-center">
                  <ArrowRightToLineIcon className="w-4 h-4" />

                  <span className="font-semibold">Sign Up</span>
                </p>
              </SignUpButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};

export default UserMenu;
