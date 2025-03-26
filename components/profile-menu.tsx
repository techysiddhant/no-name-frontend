"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { LogOut, Settings, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession } from "@/hooks/use-session";
import { authClient } from "@/lib/auth-client";

export const ProfileMenu = () => {
  const { data: session } = useSession();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const user = session?.user;
  const router = useRouter();
  const handleSignOut = async () => {
    setIsSigningOut(true);
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          setIsSigningOut(false);
          router.push("/");
        },
      },
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="size-9 shadow-lg drop-shadow-xs">
          <AvatarImage
            src={`https://avatar.vercel.sh/${user?.name || "user"}.svg?text=${user?.name ? user.name.slice(0, 2).toUpperCase() : "NN"}`}
            alt="profile-picture"
            className="object-contain"
          />
          <AvatarFallback className="bg-blue-100 text-xl font-semibold text-blue-500 uppercase">
            {user?.name ? user?.name?.slice(0, 2) : "NN"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push("/profile")}>
          <User />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/settings")}>
          <Settings />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSignOut} disabled={isSigningOut}>
          <LogOut />
          <span>{isSigningOut ? "Signing out..." : "Sign out"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
