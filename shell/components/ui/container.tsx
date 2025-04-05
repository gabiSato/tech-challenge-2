"use client";
import clsx from "clsx";

export default function Container({
  children,
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={clsx("container px-24 sm:px-60 lg:px-0", className)}>
      {children}
    </div>
  );
}
