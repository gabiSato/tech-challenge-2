"use client";
import { useState } from "react";
import clsx from "clsx";

import CustomLink from "@/components/layout/custom-link";

import MenuIcon from "@/public/icons/menu.svg";
import CloseIcon from "@/public/icons/close.svg";

interface NavigationMenuProps {
  variant?: "light" | "dark";
  menuItens?: Record<string, string>[];
}

export default function NavigationMenu({
  variant = "light",
  menuItens = [],
}: NavigationMenuProps) {
  const [open, setOpen] = useState(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  const variants = {
    light: {
      toggle: "text-orange-200",
      background: "bg-green-100",
      linkActive: "text-md-bold text-orange-200 border-b-green-200",
      linkInactive: "text-md-regular text-black border-b-black",
    },
    dark: {
      toggle: "text-green-200",
      background: "bg-black",
      linkActive: "text-md-bold text-green-200 border-b-white",
      linkInactive: "text-md-regular text-white border-b-green-200",
    },
  };

  return (
    <>
      <button
        className="w-40 h-40 flex items-center justify-center sm:hidden"
        onClick={openMenu}
      >
        <MenuIcon className={clsx("w-32 h-32", variants[variant].toggle)} />
      </button>

      <div
        className={clsx(
          "absolute top-0 left-0 w-[172px] h-auto z-10 pt-40 px-18",
          variants[variant].background,
          open ? "visible" : "invisible"
        )}
      >
        <button
          className="absolute top-8 right-8 w-24 h-24 flex items-center justify-center sm:hidden"
          onClick={closeMenu}
        >
          <CloseIcon className="w-18 h-18 text-green-200" />
        </button>

        <ul>
          {menuItens.map((item, index) => (
            <li key={index} className="group">
              <CustomLink
                href={item.path}
                className={clsx(
                  "block pb-16 mb-16 text-center group-not-last-of-type:border-b",
                  variants[variant].linkInactive
                )}
                activeClassName={variants[variant].linkActive}
              >
                {item.label}
              </CustomLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
