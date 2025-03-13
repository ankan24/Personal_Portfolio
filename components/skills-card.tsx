import React from "react";
import { RoughNotation } from "react-rough-notation";

interface SkillsToolsProps {
  tools: tool[];
}

interface tool {
  id: number;
  name: string;
}

export default function SkillsCard({ tools }: SkillsToolsProps) {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-14">
      {tools.map(({ id, name }) => (
        <h2 className="text-xl xs:text-2xl lg:text-5xl" key={id}>
          <RoughNotation type="circle" color="#000" show>
            {`<${name}>`}
          </RoughNotation>
        </h2>
      ))}
    </div>
  );
}
