"use client";

import { useTheme } from "@/context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle text-xl"
      title="Toggle Theme"
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
