"use client";

import HamburgerMenuIcon from "@/icons/HamburgerMenuIcon";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { RoughNotation } from "react-rough-notation";
import MobileNavMenus from "./mobile-nav-menus";

interface ListItem {
  id: number;
  title: string;
  href: string;
}

export default function NavBar() {
  const lists: ListItem[] = [
    { id: 1, title: "Skills", href: "#skills" },
    { id: 2, title: "Projects", href: "#projects" },
    { id: 3, title: "Contact", href: "#contact" },
  ];

  const [showItem, setShowItem] = useState<number>(1);
  const [showMobileNavMenus, setShowMobileNavMenus] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleHamburgerMenu = () => {
    setShowMobileNavMenus((prev) => !prev);
  };

  return (
    <motion.div
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="top-0 z-20 flex items-center justify-between px-5 py-3 lg:sticky xs:px-10 md:py-5"
    >
      <div>
        <h2 className="text-4xl md:text-5xl">
          <Link href="#">A.G</Link>
        </h2>
      </div>

      <ul className="hidden gap-10 text-3xl md:flex">
        {lists.map((item) => (
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

      <div
        className="z-50 block w-10 h-10 border-2 border-gray-600 md:hidden"
        onClick={handleHamburgerMenu}
      >
        <HamburgerMenuIcon />
      </div>

      <MobileNavMenus
        showItem={showItem}
        setShowItem={setShowItem}
        showMobileNavMenus={showMobileNavMenus}
      />
    </motion.div>
  );
}
