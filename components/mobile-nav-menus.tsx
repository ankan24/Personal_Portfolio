"use client";

import { navmenus } from "@/data";
import Link from "next/link";
import React, { useEffect } from "react";
import { RoughNotation } from "react-rough-notation";

interface MobileNavMenusProps {
  showItem: number;
  setShowItem: React.Dispatch<React.SetStateAction<number>>;
  showMobileNavMenus: boolean;
}

export default function MobileNavMenus({
  showItem,
  setShowItem,
  showMobileNavMenus,
}: MobileNavMenusProps) {
  return (
    <ul
      className={`${
        showMobileNavMenus ? "translate-x-0" : "translate-x-[600px]"
      } absolute top-0 flex flex-col items-center justify-center w-[70%] transition-all duration-500  horizontal-graph-bg-mobile right-0 h-screen gap-10 text-3xl border-2 md:hidden`}
    >
      {navmenus.map((item) => (
        <li
          className="cursor-pointer"
          key={item.id}
          onClick={() => setShowItem(item.id)}
        >
          <RoughNotation
            type="box"
            show={item.id === showItem}
            padding={[5, 10]}
          >
            <Link href={item.href}>{item.title}</Link>
          </RoughNotation>
        </li>
      ))}
    </ul>
  );
}
