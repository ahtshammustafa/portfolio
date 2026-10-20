"use client";

import React, { useState, useMemo } from "react";
import { projects, projectCategories, ProjectCategory } from "@/data";
import { ExpandableCard } from "./ui/ExpandableCard";

const INITIAL_VISIBLE_COUNT = 6;

const RecentProjects = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredCards = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const filtered = projects.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!query) return true;

      const haystack = [
        p.title,
        p.des,
        p.category,
        ...(p.metrics || []),
        ...(p.highlights || []),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(query);
    });

    return filtered.map(
      ({
        title,
        des,
        category,
        featured,
        metrics,
        highlights,
        img,
        iconLists,
        link,
        linkLabel,
      }) => ({
        title,
        subtitle: des,
        category,
        featured,
        metrics,
        highlights,
        thumbnail: img,
        icons: iconLists,
        link,
        linkLabel,
      })
    );
  }, [selectedCategory, searchQuery]);

  const isFiltered =
    selectedCategory !== "All" || searchQuery.trim().length > 0;
  const visibleCards =
    isFiltered || showAll
      ? filteredCards
      : filteredCards.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <div id="projects" className="py-20 w-full">
      <h1 className="heading">
        Selected <span className="text-purple">research &amp; projects</span>
      </h1>
      <p className="text-center text-white-200 text-sm md:text-base mt-3 max-w-2xl mx-auto">
        Explore 17 geospatial, GeoAI, hydrological modeling, and Web GIS case
        studies. Click any project card to inspect full-resolution maps,
        datasets, and methodology.
      </p>

      {/* Search & Category Filter Bar */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by sensor, model, or topic (e.g., SAR, U-Net, GEE, HEC-RAS)..."
            className="w-full px-4 py-2.5 rounded-full bg-black-200/80 border border-white/[0.12] focus:border-purple focus:outline-none text-xs sm:text-sm text-white placeholder:text-white-100/50"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-white-200 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {projectCategories.map((category) => {
            const count =
              category === "All"
                ? projects.length
                : projects.filter((p) => p.category === category).length;
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setSelectedCategory(category);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                  isActive
                    ? "bg-purple text-slate-950 border-purple shadow-lg shadow-purple/25"
                    : "bg-black-200/70 text-white-200 border-white/[0.1] hover:border-white/[0.3] hover:text-white"
                }`}
              >
                {category}{" "}
                <span
                  className={`ml-1 text-xs ${
                    isActive ? "text-slate-900/80 font-bold" : "text-white-100/60"
                  }`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="mt-10">
        {visibleCards.length > 0 ? (
          <ExpandableCard cards={visibleCards} coverThumbnails />
        ) : (
          <div className="text-center py-12 text-white-200">
            No projects matched &ldquo;{searchQuery}&rdquo;. Try another keyword
            or category.
          </div>
        )}
      </div>

      {/* Show All / Show Less Toggle */}
      {!isFiltered && filteredCards.length > INITIAL_VISIBLE_COUNT && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-3 rounded-full text-sm font-semibold border border-purple/40 bg-purple/10 hover:bg-purple text-white hover:text-slate-950 transition-all shadow-lg shadow-purple/10"
          >
            {showAll
              ? "Show Featured Projects Only"
              : `View All ${filteredCards.length} Projects`}
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
