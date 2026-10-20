import {
  FaLocationArrow,
  FaFileDownload,
  FaCertificate,
} from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-28 md:pt-36">
      <div>
        <Spotlight
          className="top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 md:-left-32 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-12 md:my-16 z-10">
        <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Intro, Headline & CTAs */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-purple/30 bg-purple/10 backdrop-blur-md mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <h1 className="uppercase tracking-widest text-xs font-semibold text-blue-100">
                Ahtsham Mustafa Awan · Spatial Data Scientist &amp; Web GIS
                Developer
              </h1>
            </div>

            <TextGenerateEffect
              words="Transforming the world through geospatial data magic"
              className="text-center lg:text-left text-[34px] sm:text-5xl lg:text-[52px] leading-tight"
            />

            <p className="text-center lg:text-left md:tracking-wider mb-6 text-sm md:text-lg text-white-100 max-w-2xl">
              Strong foundation in Geology, Landscape Dynamics, Spatial
              Hydrology, GIS &amp; Remote Sensing concepts and principles, as
              well as experience with modern GeoAI and Web GIS stacks.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2">
              <a href="#projects">
                <MagicButton
                  title="See my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
              <a
                href="/UpdatedResume_AhtshamM.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 md:mt-10 items-center justify-center gap-2 rounded-lg border border-white/[0.15] bg-black-200/80 px-6 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-purple hover:text-purple"
              >
                <FaFileDownload className="text-purple" />
                <span>Resume (PDF)</span>
              </a>
              <a
                href="/Ahtsham_Certifications.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 md:mt-10 items-center justify-center gap-2 rounded-lg border border-white/[0.15] bg-black-200/80 px-6 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-purple hover:text-purple"
              >
                <FaCertificate className="text-purple" />
                <span>Certifications</span>
              </a>
            </div>
          </div>

          {/* Right Column: Glowing Studio Portrait Frame */}
          <div className="relative shrink-0 group">
            {/* Ambient outer glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-purple/35 via-blue-500/20 to-emerald-400/25 blur-2xl opacity-75 group-hover:opacity-100 transition duration-500" />

            {/* Rotating conic border container */}
            <div className="relative p-[2px] rounded-[2rem] overflow-hidden bg-gradient-to-b from-purple/60 via-white/10 to-blue-500/40 shadow-2xl">
              <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-60" />

              {/* Inner dark studio backdrop */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-[360px] lg:w-80 lg:h-[400px] rounded-[calc(2rem-2px)] overflow-hidden bg-[radial-gradient(circle_at_50%_25%,rgba(203,172,249,0.22),rgba(12,14,35,0.96)_70%)] flex items-end justify-center">
                {/* Subtle geospatial coordinate grid overlay */}
                <div className="absolute inset-0 bg-grid-white/[0.04] pointer-events-none" />

                {/* Portrait Image */}
                <img
                  src="/ahtsham.png"
                  alt="Ahtsham Mustafa Awan - Spatial Data Scientist & Web GIS Developer"
                  className="relative z-10 w-[92%] h-[94%] object-contain object-bottom drop-shadow-[0_16px_28px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Bottom subtle vignette blend */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#04071d] via-[#04071d]/60 to-transparent z-20 pointer-events-none" />

                {/* Bottom Name & Credential Pill */}
                <div className="absolute bottom-3 inset-x-4 z-30 flex items-center justify-center px-3.5 py-2 rounded-xl bg-black-100/80 border border-white/[0.12] backdrop-blur-md text-center">
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">
                      Ahtsham Mustafa Awan
                    </p>
                    <p className="text-[10px] text-purple font-medium">
                      MS RS &amp; GIS (NUST) · BS Geology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


