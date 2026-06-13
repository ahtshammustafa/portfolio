import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote:
                "Collaborating with Ahtsham was rewarding, as his professionalism, responsiveness, and dedication to research in machine learning for landscape dynamics, along with his enthusiasm for remote sensing and GIS programming, make him an excellent addition to any team seeking rigorous analysis and innovation.",
            name: "Dr Javed Iqbal",
            designation: "Professor at IGIS NUST",
            src: "/drjaved.png",
        },
        {
            quote: "Teaching Ahtsham in Natural Hazards and Disaster Management was rewarding, as his strong analytical skills, curiosity, and expertise in geology, GIS, and remote sensing enabled him to excel in hazard assessment and risk management, making him a strong candidate for roles in resilience planning and disaster mitigation.",
            name: "Dr Salman Atif",
            designation: "Associate Professor at IGIS NUST",
            src: "/drSalman.png",
        },
        {
            quote:
                "Having taught Ahtsham in Advanced Remote Sensing and Urban Remote Sensing, and co-supervised his research, I saw firsthand his exceptional analytical abilities and dedication. His technical skills in image processing and urban analysis were impressive, and he consistently demonstrated a strong commitment to producing high-quality work. Ahtsham would be a valuable asset to any research or professional team.",
            name: "Dr Ejaz Hussain",
            designation: "Associate Dean (Professor) at IGIS NUST",
            src: "drejaz.png",
        },
        {
            quote:
                "I had the pleasure of teaching Ahtsham during his Master's studies, where his aptitude for Advanced Programming, Geodatabases, and Web GIS, combined with his critical thinking and practical application of complex concepts, set him apart as a top student. His drive to innovate in geospatial fields will make him a valuable asset in any professional or academic setting.",
            name: "Dr Ali Tahir",
            designation: "Associate Professor at IGIS NUST",
            src: "drali.png",
        },
        {
            quote:
                "I have known Mr. Ahtsham for the last 8 years in the capacity of his instructor in Economic Geology and Field Excursions. Ahtsham's work in the field of geology and remote sensing, particularly in mineral exploration and geospatial data analysis, has been impressive. His ability to integrate advanced technologies and methodologies into his research has set him apart as a leader in the field, and I have no doubt that he will continue to excel in his future endeavors.",
            name: "Syed Nohman Gilani",
            designation: "Chief Geologist at Chinar Group of Companies",
            src: "nom.png",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}

export  default AnimatedTestimonialsDemo;
