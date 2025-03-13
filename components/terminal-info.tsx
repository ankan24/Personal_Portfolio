import React from "react";
import { RoughNotation } from "react-rough-notation";

export default function TerminalInfo() {
  const text = "---->";
  return (
    <div>
      <RoughNotation type="box" show>
        <div className="flex flex-col mt-10 rounded-sm xs:mt-20">
          <RoughNotation type="box" show>
            <div className="flex gap-2 px-2 py-4 xs:px-5 md:px-10 h-1/6 ">
              <div className="h-5 w-5 border-[#2f9e44] border-2 bg-[#b2f2bb] rounded-full" />
              <div className="h-5 w-5 border-[#1971c2] border-2 bg-[#a5d8ff] rounded-full" />
              <div className="h-5 w-5 border-[#e03131] border-2 bg-[#ffc9c9] rounded-full" />
            </div>
          </RoughNotation>

          <div className="flex flex-col gap-5 px-2 py-5 xs:py-10 xs:px-5 md:px-10 h-5/6 ">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold xs:text-2xl md:text-4xl ">
                {text} about.me
              </h2>
              <p className="text-lg italic xs:text-xl md:text-2xl">
                I am a software engineer with JavaScript frameworks
                problem-solving skills and proven experience in creating and
                designing websites in a test-driven environment with clean code.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <h2 className="text-xl font-semibold xs:text-2xl md:text-4xl ">
                {text} my.education
              </h2>
              <p className="text-lg italic xs:text-xl md:text-2xl">
                B.sc in Computer Science & Engineering - Chitkara University
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold xs:text-2xl md:text-4xl ">
                {text} my.competencies
              </h2>
              <p className="text-lg italic xs:text-xl md:text-2xl">
                teamwork, problem-solving, multi-tasking, analytical-thinking ,
                communication , fast-learning
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold xs:text-2xl md:text-4xl">
                {text}
              </h2>
            </div>
          </div>
        </div>
      </RoughNotation>
    </div>
  );
}
