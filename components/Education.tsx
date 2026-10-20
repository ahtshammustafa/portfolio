import React from "react";

import { MyEducation } from "@/data";
import { Button } from "./ui/MovingBorders";

const Education = () => {
  return (
    <div id="education" className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">Education</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {MyEducation.map((card) => (
          <Button
            key={card.id}
            duration={12000 + card.id * 2500}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <h2 className="text-start text-white-100 mt-1 font-semibold">
                  {card.subtitle}
                </h2>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Education;