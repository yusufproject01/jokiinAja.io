import BrandFont from "@/Typography/BrandFont";

export default function LoginPage() {
    return (
        <main className="w-full h-screen flex justify-center items-center bg-(--bgPage)">
            <section className="w-96 h-auto flex justify-center items-center py-8 px-4 bg-white rounded-sm shadow-md">
                <BrandFont/>
                <form>
                    {/* <Input type="email" placeholder="Email" className="my-2" /> */}
                </form>
            </section>
        </main>
    )
}