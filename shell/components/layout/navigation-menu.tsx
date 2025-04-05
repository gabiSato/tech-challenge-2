"use client";
import { useState } from "react";
import clsx from "clsx";

import CustomLink from "@/components/layout/custom-link";
import type { TextColor } from "./ui/text";

import MenuIcon from "@/public/icons/menu.svg";
import CloseIcon from "@/public/icons/close.svg";

interface NavigationMenuProps {
  variant?: "light" | "dark";
  menuItens?: { path: string; label: string }[];
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
      linkActive: "border-b-green-200",
      linkActiveText: "orange-200",
      linkInactive: "black",
      separator: "border-b-black",
    },
    dark: {
      toggle: "text-green-200",
      background: "bg-black",
      linkActive: "border-b-white",
      linkActiveText: "green-200",
      linkInactive: "white",
      separator: "border-b-green-200",
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
                  variants[variant].separator
                )}
                textSize="md"
                textColor={variants[variant].linkInactive as TextColor}
                textWeight="regular"
                activeClassName={variants[variant].linkActive}
                activeTextColor={variants[variant].linkActiveText as TextColor}
                activeTextWeight="bold"
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
