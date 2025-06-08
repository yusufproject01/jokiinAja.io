import BtnWhatsApp from "@/components/buttons/Btn-WhatsApp";
import { TitleCenter } from "@/Typography/TitleCenter";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export default function OrderPage() {
    return (
    <main className="w-full h-auto pb-16 sm:pt-36 pt-20 bg-(--bgPage) flex flex-col justify-center items-center sm:gap-y-4 gap-y-0 sm:px-0 px-1">
        <TitleCenter TitleContent="Cara Order" />
        <section className="max-w-6xl w-full h-screen mx-auto p-2">
            <p className={`${inter.className} sm:text-base text-sm py-4`}>
                Berikut adalah langkah-langkah untuk order layanan JokiinAja!
            </p>
            <ul className="flex flex-col gap-y-6">
                <li className="flex flex-col gap-y-2">
                    <h1 className={`${poppins.className} sm:text-2xl text-lg font-bold`}>1. Hubungi Admin Melalui WhatsApp</h1>
                    <p className="sm:text-base text-sm text-justify">Anda dapat menghubungi Admin melalui tombol WhatsApp di bawah ini :</p>
                    <BtnWhatsApp />
                </li>
                <li className="flex flex-col gap-y-2">
                    <h1 className={`${poppins.className} sm:text-2xl text-lg font-bold`}>2. Konfirmasi Harga dan Paket Layanan Dengan Admin</h1>
                    <p className="sm:text-base text-sm text-justify">
                        Setelah menghubungi kami, admin akan memberikan detail harga berdasarkan kebutuhan Anda. 
                        Pastikan untuk menyebutkan detail layanan yang Anda butuhkan agar kami dapat memberikan estimasi yang tepat. 
                        Estimasi harga akan diberikan berdasarkan jenis layanan, durasi, dan kebutuhan spesifik lainnya.
                    </p>
                </li>
                <li className="flex flex-col gap-y-2">
                    <h1 className={`${poppins.className} sm:text-2xl text-lg font-bold`}>3. Deposit Pembayaran</h1>
                    <p className="sm:text-base text-sm text-justify">
                        Setelah harga dikonfirmasi, Anda akan diminta untuk membayar deposit sebesar 50% dari total biaya. 
                        Pembayaran deposit ini diperlukan untuk mengamankan slot layanan Anda. 
                        Detail pembayaran akan diberikan oleh admin, termasuk nomor rekening atau metode pembayaran lainnya.
                    </p>
                </li>
                <li className="flex flex-col gap-y-2">
                    <h1 className={`${poppins.className} sm:text-2xl text-lg font-bold`}>4. Pelunasan Pembayaran</h1>
                    <p className="sm:text-base text-sm text-justify">
                        Setelah layanan selesai, Anda akan diminta untuk melunasi sisa pembayaran. 
                        Pelunasan ini harus dilakukan sebelum hasil layanan dikirimkan kepada Anda. 
                        Admin akan mengkonfirmasi penerimaan pelunasan dan memastikan semua kebutuhan Anda 
                        telah terpenuhi sebelum menyelesaikan transaksi.
                    </p>
                </li>
            </ul>
        </section>
        </main>
    );
}
