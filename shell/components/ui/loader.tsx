import clsx from "clsx";

export type LoaderColor = "cyan" | "orange" | "green" | "black" | "white";

interface LoaderProps {
  className?: string;
  size?: "small" | "medium";
  color?: LoaderColor;
}

export default function Loader({
  className,
  size = "medium",
  color = "cyan",
}: LoaderProps) {
  const colorClasses = {
    cyan: "border-cyan-100 border-t-cyan-300",
    orange: "border-orange-100 border-t-orange-200",
    green: "border-green-100 border-t-green-200",
    black: "border-neutral-600 border-t-black",
    white: "border-neutral-300 border-t-white",
  };

  return (
    <div
      className={clsx(
        "border-4 border-t-4 rounded-[50%] w-32 h-32 animate-spin",
        { "w-16 h-16 border-2 border-t-2": size === "small" },
        colorClasses[color],
        className
      )}
    />
  );
}
