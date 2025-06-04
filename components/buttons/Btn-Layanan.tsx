"use client"

import { useRouter } from "next/navigation"

export default function BtnLayanan() {

    const router = useRouter()
    const handleRoute = () => {
        router.push("/layanan")
    }
    
    return (
        <button
            onClick={handleRoute}
            className="w-44 h-10 rounded-sm border border-(--secondaryRed) 
            hover:bg-(--secondaryRed) text-(--secondaryRed) hover:text-white 
            cursor-pointer transition-all duration-300 ease-in-out">
            Lihat Semua
        </button>
    )
}