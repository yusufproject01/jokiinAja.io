import FAQ from "@/content/FAQ";
import JumbotronComponent from "@/content/JumbotronComponent";
import ServicesComponent from "@/content/ServicesComponent";
import Testimonial from "@/content/Testimonial";

export default async function Home() {
  return (
    <main className="w-full h-auto flex flex-col overflow-hidden">
        <JumbotronComponent/>
        <ServicesComponent/>
        <Testimonial/>
        <FAQ/>
    </main>
  );
}
