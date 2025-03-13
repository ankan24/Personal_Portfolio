import React from "react";
import { RoughNotation } from "react-rough-notation";

export default function SkillsChart() {
  return (
    <div className="bottom-0 right-0 flex gap-2 lg:gap-5 lg:items-end lg:absolute ">
      <div className="flex flex-col gap-10 text-sm xs:text-lg md:text-xl">
        <p>
          I am deeply <br /> interested in <br /> <br />
          <RoughNotation type="box" show>
            <span className="text-sm font-semibold xs:text-2xl">
              Artificial Intelligence
            </span>
          </RoughNotation>
        </p>

        <p>I like video games </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 ">
        <p className="text-sm font-semibold xs:text-xl">front-end</p>
        <RoughNotation type="box" show>
          <div className="flex items-center justify-center w-5 xs:w-8 h-14 xs:h-24 md:w-10 ">
            <h2 className="font-semibold text-black"> 70%</h2>
          </div>
        </RoughNotation>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 ">
        <p className="text-sm font-semibold xs:text-xl">back-end</p>
        <RoughNotation type="box" show>
          <div className="flex items-center justify-center w-5 xs:w-8 h-14 xs:h-24 md:w-10 ">
            <h2 className="font-semibold text-black"> 70%</h2>
          </div>
        </RoughNotation>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 ">
        <p className="text-sm font-semibold xs:text-xl">animations</p>
        <RoughNotation type="box" show>
          <div className="flex items-center justify-center w-5 h-10 xs:h-20 xs:w-8 md:w-10 ">
            <h2 className="font-semibold text-black"> 50%</h2>
          </div>
        </RoughNotation>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 ">
        <p className="text-sm font-semibold xs:text-xl">ui-ux</p>
        <RoughNotation type="box" show>
          <div className="flex items-center justify-center w-5 h-12 xs:w-8 xs:h-16 md:w-10 ">
            <h2 className="font-semibold text-black"> 40%</h2>
          </div>
        </RoughNotation>
      </div>
    </div>
  );
}
