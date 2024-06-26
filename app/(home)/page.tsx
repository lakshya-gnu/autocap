import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { BrandPromotion } from "./_components/brand-promotion";
import { Services } from "./_components/services";
import { Projects } from "./_components/projects";
import { Testimonials } from "./_components/testimonials";
import { Contact } from "./_components/contact";

export default function Home() {
    return (
        <div className="">
            <Hero />
            <div className="w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-7xl flex flex-col items-center justify-center text-center mx-auto space-y-16 py-14">
                <About />
                <BrandPromotion />
                <Services />
                <Projects />
                <Testimonials />
                <Contact />
            </div>
        </div>
    );
}
