"use client"

import { FaArrowLeftLong } from "react-icons/fa6";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function BtnBack() {
    const router = useRouter()
    const handleBack = () => {
        router.push('/')
    }
    
    return (
        <Button onClick={handleBack} className="w-16 shadow-sm text-base">
            <FaArrowLeftLong/>
        </Button>
    );
}