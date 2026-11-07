"use client";

import { useTheme } from "./theme-provider";

type Theme = "system" | "light" | "dark";

const options: Array<{ value: Theme; label: string }> = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme-toggle" aria-label="Theme preference">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={theme === option.value ? "theme-option active" : "theme-option"}
          onClick={() => setTheme(option.value)}
          aria-pressed={theme === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
