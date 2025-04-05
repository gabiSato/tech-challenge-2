"use client";

import clsx from "clsx";
import Loader, { LoaderColor } from "./loader";

export type ButtonVariant =
  | "cyan-primary"
  | "cyan-secondary"
  | "orange-primary"
  | "orange-secondary"
  | "green-primary"
  | "green-secondary"
  | "black-primary"
  | "black-secondary";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  loading?: boolean;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export default function Button({
  children,
  loading,
  variant = "cyan-primary",
  type = "button",
  className,
  ...props
}: ButtonProps) {
  const variants: Record<string, { class: string; loaderColor: LoaderColor }> =
    {
      "cyan-primary": {
        class: "bg-cyan-300 text-white",
        loaderColor: "cyan",
      },
      "cyan-secondary": {
        class: "bg-cyan-100 text-cyan-200",
        loaderColor: "cyan",
      },
      "orange-primary": {
        class: "bg-orange-200 text-white",
        loaderColor: "orange",
      },
      "orange-secondary": {
        class: "text-orange-200 border-2 border-orange-200",
        loaderColor: "orange",
      },
      "green-primary": {
        class: "bg-green-200 text-white",
        loaderColor: "green",
      },
      "green-secondary": {
        class: "text-green-200 border-2 border-green-200",
        loaderColor: "green",
      },
      "black-primary": {
        class: "bg-black text-white",
        loaderColor: "white",
      },
      "black-secondary": {
        class: "text-black border-2 border-black",
        loaderColor: "black",
      },
    };

  return (
    <button
      className={clsx(
        "w-[144px] h-48 px-12 rounded-lg text-sm-semibold hover:opacity-80 cursor-pointer",
        variants[variant].class,
        loading && "flex items-center justify-center",
        className
      )}
      type={type}
      {...props}
    >
      {loading ? (
        <Loader size="small" color={variants[variant].loaderColor} />
      ) : (
        children
      )}
    </button>
  );
}
