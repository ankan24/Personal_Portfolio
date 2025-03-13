import React from "react";
import { RoughNotation } from "react-rough-notation";

export default function Header({
  title,
  color,
}: {
  title: string;
  color: string;
}) {
  return (
    <div className="flex items-center justify-center mb-10">
      <RoughNotation type="highlight" show color={color} padding={[0, 20]}>
        <h2 className="py-2 text-4xl md:text-6xl">{title}</h2>
      </RoughNotation>
    </div>
  );
}
