import React from "react";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: number;
  name: string;
  imageUrl: string;
  technologyUsed: string[];
  github: string;
  liveUrl: string;
}

interface ProjectCardProps {
  item: Project;
}

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <div className="flex flex-col w-full h-full gap-5 duration-500 ease-in-out ">
      <div className="relative w-full h-[180px] xs:h-[250px] md:h-[350px]">
        <Image
          src={item.imageUrl}
          alt={item.imageUrl}
          layout="fill"
          className="absolute"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-between px-5 ">
        <h2 className="text-lg font-bold xs:text-2xl md:text-4xl">
          {item.id}. {item.name}
        </h2>
        <div className="flex flex-wrap gap-5 my-5 md:my-0 md:mt-10">
          {item.technologyUsed.map((t, i) => (
            <RoughNotation key={i} type="highlight" show color="#9C93C9">
              <p className="text-lg font-semibold xs:text-2xl">{t}</p>
            </RoughNotation>
          ))}
        </div>
        <div className="flex items-end justify-end gap-10 p-5 ">
          <Link href={item.github} target="_blank">
            <RoughNotation type="box" padding={10} show>
              <p className="text-lg font-bold xs:text-2xl md:text-3xl">
                github
              </p>
            </RoughNotation>{" "}
          </Link>
          <Link href={item.liveUrl} target="_blank">
            <RoughNotation type="box" padding={10} show>
              <p className="text-lg font-bold xs:text-2xl md:text-3xl">
                live url
              </p>
            </RoughNotation>
          </Link>
        </div>
      </div>
    </div>
  );
}
