import TestimonialCard from "@/components/cards/TestimonialCard";
import { TitleCenter } from "@/Typography/TitleCenter";
import { TextCardTestimonial } from "@/lib/datas/testimonial";

export default function Testimonial() {
    return (
        <main className="w-full sm:h-[80vh] h-80 sm:py-10 py-4 flex flex-col items-center bg-(--bgPage) gap-x-10">
            <TitleCenter TitleContent="Testimonial" BrandTitle="JokiinAja" />
            <div className="w-full h-auto py-4 sm:px-4 px-1 overflow-x-auto whitespace-nowrap flex items-center sm:gap-x-6 gap-x-4 scroll-smooth hide-scrollbar">
                <section className="flex items-center gap-6 pl-6">
                {TextCardTestimonial.map((item, index) => (
                    <TestimonialCard key={index} responseTestimonial={item.text} />
                ))}
                </section>
            </div>
        </main>
    );
}
