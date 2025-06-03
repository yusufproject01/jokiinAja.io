import TestimonialCard from "@/components/cards/TestimonialCard";
import { TitleCenter } from "@/Typography/TitleCenter";
import { TextCardTestimonial } from "@/lib/datas/testimonial";

export default function Testimonial() {
    return (
        <main className="w-full h-[80vh] py-10 flex flex-col items-center bg-(--bgPage) gap-10">
            <TitleCenter TitleContent="Testimonial" BrandTitle="JokiinAja" />
            <div className="w-full h-auto py-4 px-4 overflow-x-auto whitespace-nowrap flex items-center gap-6 scroll-smooth hide-scrollbar">
                <section className="flex items-center gap-6 pl-6">
                {TextCardTestimonial.map((item, index) => (
                    <TestimonialCard key={index} responseTestimonial={item.text} />
                ))}
                </section>
            </div>
        </main>
    );
}
