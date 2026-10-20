"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { CardSpotlight } from "./card-spotlight";

export interface ExpandableCardItem {
  title: string;
  subtitle: string;
  desc?: string;
  category?: string;
  featured?: boolean;
  metrics?: string[];
  highlights?: string[];
  thumbnail: string;
  icons?: string[];
  link?: string;
  linkLabel?: string;
}

export function ExpandableCard({
  cards,
  coverThumbnails = false,
}: {
  cards: ExpandableCardItem[];
  coverThumbnails?: boolean;
}) {
  const [active, setActive] = useState<ExpandableCardItem | null>(null);
  const [lightboxImg, setLightboxImg] = useState<{
    src: string;
    title: string;
  } | null>(null);
  const ref = useRef<HTMLDivElement>(null!);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (lightboxImg) {
          setLightboxImg(null);
        } else {
          setActive(null);
        }
      }
    }

    if (active || lightboxImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, lightboxImg]);

  useOutsideClick(ref, () => {
    if (!lightboxImg) setActive(null);
  });

  return (
    <>
      {/* Fullscreen Map Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              type="button"
              onClick={() => setLightboxImg(null)}
              className="absolute top-5 right-5 px-4 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black text-xs font-semibold border border-white/20 transition-colors"
            >
              Close Fullscreen (ESC)
            </button>
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              className="max-w-[95vw] max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/15"
            />
            <p className="mt-3 text-sm font-medium text-white-100 text-center max-w-2xl">
              {lightboxImg.title}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Backdrop */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* Expanded Case-Study Modal */}
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100] px-4 py-6">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="relative w-full max-w-[640px] h-fit max-h-[90vh] flex flex-col bg-black-100 border border-white/[0.18] rounded-3xl overflow-y-auto shadow-2xl"
            >
              <button
                aria-label="Close modal"
                className="flex absolute top-3.5 right-3.5 z-30 items-center justify-center bg-black/75 hover:bg-white text-white hover:text-black border border-white/25 rounded-full h-9 w-9 transition-colors"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </button>

              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="relative group/modalimg"
              >
                <img
                  width={640}
                  height={340}
                  src={active.thumbnail}
                  alt={active.title}
                  onClick={() =>
                    coverThumbnails &&
                    setLightboxImg({
                      src: active.thumbnail,
                      title: active.title,
                    })
                  }
                  className={`w-full ${
                    coverThumbnails
                      ? "h-64 sm:h-72 object-cover cursor-zoom-in"
                      : "h-40 object-contain bg-white p-6"
                  }`}
                />
                {coverThumbnails && (
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxImg({
                        src: active.thumbnail,
                        title: active.title,
                      })
                    }
                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/75 hover:bg-purple text-white text-xs font-medium border border-white/20 backdrop-blur-md transition-colors flex items-center gap-1.5"
                  >
                    <span>🔍</span>
                    <span>Inspect Full Map</span>
                  </button>
                )}
              </motion.div>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  {active.category && (
                    <span className="inline-block text-xs font-semibold px-3 py-0.5 rounded-full bg-purple/20 text-purple border border-purple/30">
                      {active.category}
                    </span>
                  )}
                  {active.featured && (
                    <span className="inline-block text-xs font-semibold px-3 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      ★ Flagship Project
                    </span>
                  )}
                </div>

                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="font-bold text-xl md:text-2xl text-white leading-snug"
                >
                  {active.title}
                </motion.h3>

                {/* Metrics & Sensor Pills */}
                {active.metrics && active.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {active.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.06] text-blue-100 border border-white/[0.1]"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}

                <motion.p
                  layoutId={`description-${active.subtitle}-${id}`}
                  className="text-white-200 text-sm md:text-base mt-4 leading-relaxed"
                >
                  {active.subtitle}
                </motion.p>

                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-white-200 text-sm md:text-base flex flex-col items-start gap-4 mt-4"
                >
                  {active.desc && (
                    <p className="leading-relaxed">{active.desc}</p>
                  )}

                  {/* Structured Case-Study Highlights */}
                  {active.highlights && active.highlights.length > 0 && (
                    <div className="w-full rounded-2xl bg-white/[0.03] border border-white/[0.08] p-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-purple mb-2.5">
                        Methodology &amp; Key Contributions
                      </h4>
                      <ul className="space-y-2">
                        {active.highlights.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="text-xs sm:text-sm text-white-100 flex items-start gap-2.5 leading-relaxed"
                          >
                            <span className="text-purple mt-1 shrink-0">▸</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Footer bar: Tools & External Link */}
                  <div className="w-full flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/[0.08]">
                    {active.icons && active.icons.length > 0 ? (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-white-100/70 mr-1">
                          Stack:
                        </span>
                        {active.icons.map((icon) => (
                          <div
                            key={icon}
                            className="border border-white/[.2] rounded-full bg-black w-9 h-9 flex justify-center items-center"
                          >
                            <img
                              src={icon}
                              alt="Technology icon"
                              className="p-2 w-full h-full object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div />
                    )}

                    {active.link ? (
                      <a
                        href={active.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 text-xs sm:text-sm rounded-full font-bold bg-purple hover:bg-purple/90 text-slate-950 shadow-lg shadow-purple/25 transition-all"
                      >
                        {active.linkLabel || "Go to the project"} ↗
                      </a>
                    ) : null}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Cards Grid */}
      <ul
        className={`w-full grid grid-cols-1 md:grid-cols-2 ${
          coverThumbnails ? "lg:grid-cols-3 gap-6" : "lg:grid-cols-2 gap-4"
        }`}
      >
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="cursor-pointer h-full group"
          >
            {coverThumbnails ? (
              /* Visual Map Banner Card (For Projects) */
              <CardSpotlight className="h-full p-0 overflow-hidden flex flex-col justify-between border border-white/[0.1] hover:border-purple/50 rounded-2xl transition-all duration-300">
                <div className="w-full relative z-20">
                  {/* Top 16:9 Map Preview Banner */}
                  <motion.div
                    layoutId={`image-${card.title}-${id}`}
                    className="relative h-48 w-full overflow-hidden bg-black-200 border-b border-white/[0.08]"
                  >
                    <img
                      width={400}
                      height={220}
                      src={card.thumbnail}
                      alt={card.title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black-100/90 via-transparent to-black-100/30" />

                    {/* Overlaid Category & Flagship Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      {card.category && (
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-black-100/85 text-purple border border-purple/30 backdrop-blur-md">
                          {card.category}
                        </span>
                      )}
                      {card.featured && (
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-400/30 backdrop-blur-md">
                          ★ Featured
                        </span>
                      )}
                    </div>
                  </motion.div>

                  {/* Card Body */}
                  <div className="p-5 pb-3">
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className="font-bold text-base sm:text-lg text-white leading-snug group-hover:text-purple transition-colors line-clamp-2"
                    >
                      {card.title}
                    </motion.h3>

                    {/* Key Metric / Sensor Chips */}
                    {card.metrics && card.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {card.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-blue-100 border border-white/[0.08]"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    )}

                    <motion.p
                      layoutId={`description-${card.subtitle}-${id}`}
                      className="text-white-200 text-xs sm:text-sm mt-3 line-clamp-3 leading-relaxed"
                    >
                      {card.subtitle}
                    </motion.p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 pb-5 pt-2 flex items-center justify-between gap-2 relative z-20 border-t border-white/[0.05]">
                  {card.icons && card.icons.length > 0 ? (
                    <div className="flex items-center -space-x-2">
                      {card.icons.map((icon) => (
                        <div
                          key={icon}
                          className="border border-white/[0.2] rounded-full bg-black w-8 h-8 flex justify-center items-center"
                        >
                          <img
                            src={icon}
                            alt="Tool"
                            className="p-1.5 w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div />
                  )}
                  <motion.span
                    layoutId={`button-${card.title}-${id}`}
                    className="px-3.5 py-1.5 text-xs rounded-full font-bold bg-white/[0.08] group-hover:bg-purple text-white group-hover:text-slate-950 whitespace-nowrap transition-colors"
                  >
                    Case Study →
                  </motion.span>
                </div>
              </CardSpotlight>
            ) : (
              /* Compact Logo Card (For Work Experience) */
              <CardSpotlight className="h-full p-5 flex flex-col justify-between gap-5 border border-white/[0.1] hover:border-white/[0.3] rounded-xl">
                <div className="flex gap-4 items-start w-full relative z-20">
                  <motion.div
                    layoutId={`image-${card.title}-${id}`}
                    className="shrink-0"
                  >
                    <img
                      width={100}
                      height={100}
                      src={card.thumbnail}
                      alt={card.title}
                      className="h-16 w-16 rounded-lg object-contain bg-white p-2"
                    />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className="font-semibold text-white leading-snug"
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${card.subtitle}-${id}`}
                      className="text-white-200 text-sm mt-1 line-clamp-3"
                    >
                      {card.subtitle}
                    </motion.p>
                  </div>
                </div>
                <div className="flex items-center justify-end relative z-20 pt-1">
                  <motion.button
                    layoutId={`button-${card.title}-${id}`}
                    className="px-4 py-2 text-xs sm:text-sm rounded-full font-bold bg-white/[0.05] hover:bg-purple hover:text-slate-950 text-white whitespace-nowrap transition-colors"
                  >
                    View details
                  </motion.button>
                </div>
              </CardSpotlight>
            )}
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-current"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
