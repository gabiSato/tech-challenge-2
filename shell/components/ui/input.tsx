"use client";
import clsx from "clsx";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  invalid?: boolean;
  error?: string;
  full?: boolean;
}

export default function Input({
  invalid,
  error,
  full,
  className,
  ...props
}: InputProps) {
  return (
    <div className={clsx("w-[250px]", full && "w-full")}>
      <input
        className={clsx(
          "h-48 px-16 w-full bg-white border border-cyan-300 rounded-lg outline-hidden text-sm text-neutral-600 placeholder:text-neutral-600",
          invalid && "border-red-100",
          className
        )}
        {...props}
      />

      {invalid && error && (
        <span className="text-xs text-red-100 mt-8">{error}</span>
      )}
    </div>
  );
}
