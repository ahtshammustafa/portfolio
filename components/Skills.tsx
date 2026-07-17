import React from "react";

import { companies } from "@/data";

const Skills = () => {
  return (
    <div id="skills" className="py-20 w-full">
      <h1 className="heading">
        Tools &amp; <span className="text-purple">technologies</span>
      </h1>

      <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {companies.map((company) => (
          <div
            key={company.id}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-white/[0.1] hover:border-white/[0.3] transition-colors"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <img src={company.img} alt={company.name} className="h-10 w-10 object-contain" />
            <span className="text-xs text-white-100 text-center">{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
