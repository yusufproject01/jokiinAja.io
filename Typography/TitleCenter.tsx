import { ADLaM_Display } from "next/font/google";

const adlamDisplay = ADLaM_Display({
    weight: "400",
    subsets: ["latin"],
})

export function TitleCenter({TitleContent, BrandTitle} : {TitleContent : string, BrandTitle? : any}) {
  return (
    <h1 className={`${adlamDisplay.className} sm:text-4xl text-3xl font-bold`}>
        {TitleContent} <span className="text-(--secondaryRed)">{BrandTitle}</span>
    </h1>
  );
}
