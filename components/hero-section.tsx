import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center my-10 lg:flex-row">
      <div className="flex-auto mb-10 lg:mb-0 lg:w-1/3 ">
        <div className="lg:w-[350px] -z-20 relative  aspect-square rounded-full ">
          <RoughNotation type="circle" show>
            <div className="lg:w-[350px] w-[200px] sm:w-[250px] -z-20 relative aspect-square rounded-full ">
              <Image
                src={"/profile.jpg"}
                alt="profile_portrait"
                layout="fill"
                className="absolute rounded-full"
                loading="lazy"
              />
            </div>
          </RoughNotation>
        </div>
      </div>  
      <div className="flex flex-col flex-auto md:px-10 lg:w-2/3 -z-20 md:z-0">
        <div className="flex flex-col items-center gap-5 lg:items-start ">
          <h2 className="text-3xl font-semibold xs:text-4xl lg:text-7xl">
            Ankan Ghorai
          </h2> 
          <p className="text-2xl lg:text-3xl">Software Engineer</p>
          <ul className="flex items-center gap-5 text-lg xs:text-2xl xs:gap-20 md:text-3xl">
            <li>
              <span className="mr-2 text-xl font-semibold xs:text-3xl lg:text-5xl">
                10+
              </span>
              projects
            </li>
            <li>
              <span className="mr-2 text-xl font-semibold xs:text-3xl lg:text-5xl">
                1+
              </span>
              experience
            </li>
          </ul>
          <div className="flex gap-5 xs:gap-10">
            <Link
              target="_blank"
              href="https://github.com/ankan24"
              className="flex items-center justify-center h-10 px-4 py-2 border-2 border-black rounded-md cursor-pointer xs:py-8 xs:text-2xl lg:text-4xl bg-graph "
            >
              Follow
            </Link>

            <Link
              target="_blank"
              href={"https://drive.google.com/file/d/1ZraIJFwqfkmBIPpsjbyoaG28qtRScUH3/view"}
              className="flex items-center justify-center h-10 px-4 py-2 border-2 border-black rounded-md cursor-pointer xs:py-8 xs:text-2xl lg:text-4xl bg-graph "
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
