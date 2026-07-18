import React from "react";

import { workExperience } from "@/data";
import { ExpandableCard } from "./ui/ExpandableCard";

const Experience = () => {
  return (
    <div id="experience" className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="mt-12">
        <ExpandableCard cards={workExperience} />
      </div>
    </div>
  );
};

export default Experience;
