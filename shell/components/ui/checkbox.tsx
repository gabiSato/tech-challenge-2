import clsx from "clsx";

import CheckIcon from "@/public/icons/check.svg";

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  invalid?: boolean;
  error?: string;
  onChange: (checked: boolean) => void;
}

export default function Checkbox({
  label,
  checked,
  invalid,
  error,
  onChange,
}: CheckboxProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.checked);
  }

  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer select-none">
        <input
          className="absolute top-0 left-0 w-0 h-0"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />

        <span
          className={clsx(
            "inline-flex shrink-0 w-24 h-24 mr-16 border-2 border-green-200 rounded-[5px] transition-all",
            checked && "bg-green-200",
            invalid && "border-red-100"
          )}
        >
          <CheckIcon
            className={clsx("text-white", checked ? "visible" : "invisible")}
          />
        </span>

        <span className="text-sm">{label}</span>
      </label>

      {invalid && error && (
        <span className="text-xs text-red-100 mt-8">{error}</span>
      )}
    </div>
  );
}
