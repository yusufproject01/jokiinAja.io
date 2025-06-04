import BtnBack from "@/components/buttons/Btn-Back";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BrandFont from "@/Typography/BrandFont";
import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <main className="w-full h-screen flex flex-col gap-y-4 justify-center items-center bg-gradient-to-r from-(--white) to-(--tertiaryRed)">
            {/* <section className="w-80 h-auto flex flex-col gap-y-4 justify-center items-center py-8 px-4 bg-white rounded-sm shadow-md">
                <BrandFont/>
                <form className="gap-y-4 flex flex-col">
                    <Input 
                        type="text" 
                        placeholder="Nama Depan"
                        className="w-60 shadow-sm"
                    />
                    <Input 
                        type="text" 
                        placeholder="Nama Belakang"
                        className="w-60 shadow-sm"
                    />
                    <Input 
                        type="email" 
                        placeholder="Email"
                        className="w-60 shadow-sm"
                    />
                    <Input 
                        type="password" 
                        placeholder="Password"
                        className="w-60 shadow-sm"
                    />
                    <Button className="w-60 shadow-sm">Register</Button>
                </form>
                <p className="text-sm text-center text-gray-500">Sudah punya akun? <Link href="/login" className="text-(--secondaryRed) cursor-pointer">Masuk!</Link></p>
            </section>
            <div className="w-80 flex justify-start">
                <BtnBack/>
            </div> */}
            <SignUp/>
        </main>
    )
}