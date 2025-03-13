import React from "react";
import Header from "./header";
import { RoughNotation } from "react-rough-notation";
import SkillsCard from "./skills-card";
import {
  adobesuiteTools,
  backendEndTools,
  frontEndTools,
  mobileTools,
  othersTools,
} from "@/data";
import SkillsChart from "./skills-chart";

export default function Skills() {
  return (
    <div className="py-20 xs:px-5" id="skills">
      <div className="mb-10 xs:mb-20">
        <Header color="#ffc9c9" title="skills" />
      </div>

      <div className="relative grid grid-cols-1 mt-10 md:grid-cols-2 xs:gap-x-10 gap-y-20">
        <div className="absolute right-0 top-[360px] lg:top-1/3">
          <RoughNotation type="underline" show>
            <h2 className="text-2xl xs:text-4xl lg:text-8xl">Web Design</h2>
          </RoughNotation>
        </div>

        <div className="absolute right-0 lg:right-[700px]  top-[710px] xs:top-[730px] md:[700px] lg:bottom-1/4">
          <RoughNotation type="underline" show>
            <h2 className="font-bold text-md xs:text-xl lg:font-normal lg:text-5xl">
              Mobile Application Developer
            </h2>
          </RoughNotation>
        </div>

        <div>
          <RoughNotation type="bracket" show color="#d33f3f">
            <SkillsCard tools={frontEndTools} />
          </RoughNotation>
        </div>

        <div>
          <RoughNotation type="bracket" show color="#d33f3f">
            <SkillsCard tools={backendEndTools} />
          </RoughNotation>
        </div>
        <div>
          <RoughNotation type="bracket" show color="#d33f3f">
            <SkillsCard tools={mobileTools} />
          </RoughNotation>
        </div>
        <div>
          <RoughNotation type="bracket" show color="#d33f3f">
            <SkillsCard tools={adobesuiteTools} />
          </RoughNotation>
        </div>

        <div>
          <RoughNotation type="bracket" show color="#d33f3f">
            <SkillsCard tools={othersTools} />
          </RoughNotation>
        </div>

        <SkillsChart />
      </div>
    </div>
  );
}
