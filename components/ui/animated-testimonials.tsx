"use client";

import { IconArrowLeft, IconArrowRight, IconExternalLink, IconQuote } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  institution?: string;
  relationship?: string;
  src: string;
  link?: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay && !paused) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [autoplay, paused, testimonials.length]);

  const current = testimonials[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="mx-auto max-w-5xl px-4 py-10 font-sans antialiased"
    >
      {/* Interactive Referee Selector Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
        {testimonials.map((item, idx) => {
          const isSelected = idx === active;
          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(idx)}
              className={`flex items-center gap-2.5 px-3.5 py-2 rounded-full border text-left transition-all ${
                isSelected
                  ? "bg-purple/20 border-purple text-white shadow-lg shadow-purple/20"
                  : "bg-black-200/70 border-white/[0.1] text-white-200 hover:border-white/[0.3] hover:text-white"
              }`}
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-7 h-7 rounded-full object-cover border border-white/20 shrink-0"
              />
              <div className="leading-tight pr-1">
                <p className="text-xs font-semibold">{item.name}</p>
                {item.institution && (
                  <p className="text-[10px] text-white-100/70">
                    {item.institution}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Spotlight Card */}
      <div
        className="relative rounded-3xl border border-white/[0.12] p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden"
        style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(135deg, rgba(4,7,29,0.98) 0%, rgba(15,18,46,0.95) 100%)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Referee Portrait & Credentials */}
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-purple/40 shadow-xl bg-black-200">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.src}
                  src={current.src}
                  alt={current.name}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-full object-cover object-top"
                />
              </AnimatePresence>
            </div>

            {current.relationship && (
              <span className="mt-4 inline-block text-xs font-semibold px-3 py-1 rounded-full bg-purple/20 text-purple border border-purple/30">
                {current.relationship}
              </span>
            )}

            <h3 className="mt-2.5 text-xl font-bold text-white">
              {current.name}
            </h3>
            <p className="text-xs sm:text-sm text-white-200 font-medium mt-0.5">
              {current.designation}
            </p>
            {current.institution && (
              <p className="text-xs text-purple font-medium mt-0.5">
                {current.institution}
              </p>
            )}

            {current.link && (
              <a
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/[0.07] hover:bg-purple text-white hover:text-slate-950 border border-white/[0.12] transition-colors"
              >
                <span>Official Profile</span>
                <IconExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Right Column: Recommendation Quote & Controls */}
          <div className="md:col-span-8 flex flex-col justify-between h-full">
            <div className="relative">
              <IconQuote className="w-10 h-10 text-purple/30 mb-3" />
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="text-base sm:text-lg lg:text-xl text-white-100 leading-relaxed italic"
                >
                  &ldquo;{current.quote}&rdquo;
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="flex items-center justify-between pt-8 mt-6 border-t border-white/[0.08]">
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Select referee ${idx + 1}`}
                    onClick={() => setActive(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === active
                        ? "w-7 bg-purple"
                        : "w-2 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-white-200 font-mono mr-1">
                  {active + 1} / {testimonials.length}
                </span>
                <button
                  type="button"
                  aria-label="Previous referee"
                  onClick={handlePrev}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08] hover:bg-purple text-white border border-white/[0.12] transition-colors"
                >
                  <IconArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next referee"
                  onClick={handleNext}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08] hover:bg-purple text-white border border-white/[0.12] transition-colors"
                >
                  <IconArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
