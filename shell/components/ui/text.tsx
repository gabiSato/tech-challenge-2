"use client";
import clsx from "clsx";

export type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
export type TextColor =
  | "white"
  | "black"
  | "neutral-100"
  | "neutral-200"
  | "neutral-300"
  | "neutral-400"
  | "neutral-500"
  | "neutral-600"
  | "orange-100"
  | "orange-200"
  | "green-100"
  | "green-200"
  | "cyan-100"
  | "cyan-200"
  | "cyan-300";
export type TextWeight = "thin" | "regular" | "medium" | "semibold" | "bold";

type TextProps<C extends React.ElementType> = {
  as?: C;
  size?: TextSize;
  color?: TextColor;
  weight?: TextWeight;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

export default function Text<C extends React.ElementType>({
  as,
  size = "sm",
  color = "black",
  weight = "regular",
  children,
  className,
  ...props
}: TextProps<C>) {
  const Component = as || "span";

  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
  };

  const colors = {
    white: "text-white",
    black: "text-black",
    "neutral-100": "text-neutral-100",
    "neutral-200": "text-neutral-200",
    "neutral-300": "text-neutral-300",
    "neutral-400": "text-neutral-400",
    "neutral-500": "text-neutral-500",
    "neutral-600": "text-neutral-600",
    "orange-100": "text-orange-100",
    "orange-200": "text-orange-200",
    "green-100": "text-green-100",
    "green-200": "text-green-200",
    "cyan-100": "text-cyan-100",
    "cyan-200": "text-cyan-200",
    "cyan-300": "text-cyan-300",
  };

  const weights = {
    thin: "font-thin",
    regular: "font-regular",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  return (
    <Component
      className={clsx(
        "font-sans",
        sizes[size],
        colors[color],
        weights[weight],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
