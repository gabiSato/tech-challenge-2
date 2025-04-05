"use client";
import { useState } from "react";
import clsx from "clsx";

import ArrowIcon from "@/public/icons/dropdown-arrow.svg";

type SelectProps<TValue extends string | number> = {
  value?: TValue;
  onChange: (value: TValue) => void;
  placeholder?: string;
  options: {
    value: TValue;
    label: string;
  }[];
  className?: string;
  invalid?: boolean;
  error?: string;
};

export default function Select<TValue extends string | number>({
  value,
  onChange,
  placeholder = "",
  options = [],
  className,
  invalid,
  error,
}: SelectProps<TValue>) {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  const selectOption = (optionValue: TValue) => {
    setOpen(false);
    onChange(optionValue);
  };

  return (
    <div className={clsx("relative", className)}>
      <button
        className={clsx(
          "w-full relative h-48 px-8 md:px-16 bg-white border border-cyan-300 rounded z-1 flex items-center gap-16 justify-between",
          invalid && "border-red-100"
        )}
        role="combobox"
        aria-controls="select-content"
        aria-expanded={open}
        type="button"
        onClick={handleClick}
      >
        <span className="text-sm text-neutral-600 pointer-events-none">
          {options.find((option) => option.value === value)?.label ||
            placeholder}
        </span>

        <ArrowIcon
          data-state={open ? "open" : "closed"}
          className="w-12 text-cyan-300 data-[state=open]:rotate-180 transition-transform ease-linear duration-200"
        />
      </button>

      {invalid && error && (
        <span className="text-xs text-red-100 mt-8">{error}</span>
      )}

      <div
        id="select-content"
        data-state={open ? "open" : "closed"}
        className="absolute bg-white w-full h-0 opacity-0 border border-cyan-300 rounded-b overflow-hidden z-0 transition-[height,transform,opacity] ease-in-out duration-200 data-[state=closed]:-translate-y-48 data-[state=open]:h-auto data-[state=open]:opacity-100 data-[state=open]:-translate-y-12"
      >
        <ul className="mt-12">
          {options.map((option) => (
            <li
              key={`select-option-${option.value}`}
              className="p-16 text-center hover:bg-cyan-100 cursor-pointer data-[selected=true]:font-bold data-[selected=true]:bg-cyan-100"
              data-selected={option.value === value}
              onClick={() => selectOption(option.value)}
            >
              <span className="text-sm text-cyan-300">
                {option.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
