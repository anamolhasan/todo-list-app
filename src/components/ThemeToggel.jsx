import { useEffect, useState } from "react";

export default function ThemeToggle() {

  const [theme, setTheme] = useState(
    localStorage.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.theme = theme;
  }, [theme]);

  return (
    <div className="flex gap-2 pt-5">
      <button
        className="px-3 py-1 border rounded"
        onClick={() => setTheme("light")}
      >
        Light
      </button>
      <button
        className="px-3 py-1 border rounded"
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
      <button
        className="px-3 py-1 border rounded"
        onClick={() => {
          localStorage.removeItem("theme"); // reset
          setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        }}
      >
        System
      </button>
    </div>
  );
}
