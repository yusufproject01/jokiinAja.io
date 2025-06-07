import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <main className="w-full h-screen flex flex-col gap-y-4 justify-center items-center bg-gradient-to-r from-(--white) to-(--tertiaryRed)">
            <SignUp/>
        </main>
    )
}