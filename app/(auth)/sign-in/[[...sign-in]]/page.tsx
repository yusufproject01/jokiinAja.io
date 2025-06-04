"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    
  return (
    <main className="w-full h-screen flex flex-col gap-4 justify-center items-center bg-gradient-to-r from-(--white) to-(--tertiaryRed)">
        <SignIn
            routing="path"
            path="/sign-in" 
        />
    </main>
  );
}
