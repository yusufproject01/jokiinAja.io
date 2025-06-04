import { ADLaM_Display } from "next/font/google";

const adlamDisplay = ADLaM_Display({
    weight: "400",
    subsets: ["latin"],
})

export function TitleCenter({TitleContent, BrandTitle} : {TitleContent : string, BrandTitle? : any}) {
  return (
    <h1 className={`${adlamDisplay.className} text-4xl font-bold`}>
        {TitleContent} <span className="text-(--secondaryRed)">{BrandTitle}</span>
    </h1>
  );
}
