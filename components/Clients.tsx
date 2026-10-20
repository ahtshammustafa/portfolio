import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/data";

export function AnimatedTestimonialsDemo() {
  return (
    <section id="testimonials" className="py-20 w-full">
      <h1 className="heading">
        Academic &amp; professional{" "}
        <span className="text-purple">referees</span>
      </h1>
      <p className="text-center text-white-200 text-sm md:text-base mt-3 max-w-2xl mx-auto">
        Endorsements from faculty supervisors at IGIS (NUST) and industry
        leadership in remote sensing, GeoAI, and mineral exploration.
      </p>
      <AnimatedTestimonials testimonials={testimonials} autoplay />
    </section>
  );
}

export default AnimatedTestimonialsDemo;
