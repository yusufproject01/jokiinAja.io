import { ADLaM_Display } from 'next/font/google';

const adlamDisplay = ADLaM_Display({
    weight: "400",
    subsets: ["latin"],
})

export default function BrandFont() {
    return (
        <h1 className={`${adlamDisplay.className} sm:text-4xl text-2xl font-bold`}>
            Jokiin
            <span className='text-(--secondaryRed)'>Aja</span>
        </h1>
    );
}