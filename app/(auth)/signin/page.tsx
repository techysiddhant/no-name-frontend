import Image from "next/image";
import Link from "next/link";

import Logo from "@/components/logo";

import { SignIn } from "./signin";

const SignInPage = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex items-center justify-center">
              <Logo />
            </div>
            no-name
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignIn />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          fill
          src="https://images.unsplash.com/photo-1608306448197-e83633f1261c"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:grayscale"
        />
      </div>
    </div>
  );
};

export default SignInPage;
