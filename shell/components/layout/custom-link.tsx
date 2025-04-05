"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

import Text, { TextColor, TextSize, TextWeight } from "@/components/ui/text";

interface CustomLinkProps {
  href: string;
  className?: string;
  textSize?: TextSize;
  textColor?: TextColor;
  textWeight?: TextWeight;
  activeTextColor?: TextColor;
  activeTextWeight?: TextWeight;
  activeClassName?: string;
  children: React.ReactNode;
}

export default function CustomLink({
  href,
  className,
  textSize,
  textColor,
  textWeight,
  activeTextColor,
  activeTextWeight,
  activeClassName,
  children,
}: CustomLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href} passHref legacyBehavior>
      <Text
        className={clsx(className, isActive && activeClassName)}
        as="a"
        size={textSize}
        color={(isActive && activeTextColor) || textColor}
        weight={(isActive && activeTextWeight) || textWeight}
      >
        {children}
      </Text>
    </Link>
  );
}
