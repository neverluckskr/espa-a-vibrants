import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [mode, setMode] = useState<"light" | "dim">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme-mode");
    if (saved === "dim") {
      document.documentElement.classList.add("dark");
      setMode("dim");
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const isDim = mode === "dim";
    document.documentElement.classList.toggle("dark", isDim);
    localStorage.setItem("theme-mode", mode);
  }, [mode, mounted]);

  const toggleMode = () => setMode((prev) => (prev === "dim" ? "light" : "dim"));

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-pressed={mode === "dim"}
      aria-label={mode === "dim" ? "Переключить на светлую тему" : "Переключить на приглушённую тему"}
      className="group fixed top-6 right-6 z-50 flex items-center gap-3 rounded-full bg-card/90 backdrop-blur-md border border-border/60 px-3 py-2 shadow-soft hover:shadow-spanish transition-all duration-300"
    >
      <div className="relative w-14 h-7 bg-muted/80 rounded-full flex items-center px-1">
        <motion.div
          layout
          className="w-5 h-5 rounded-full bg-gradient-to-br from-spanish-red to-spanish-gold shadow-spanish"
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          animate={{ x: mode === "dim" ? 28 : 0 }}
        />
      </div>
      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
        {mode === "dim" ? (
          <>
            <Moon className="w-4 h-4 text-spanish-gold" />
            <span>Луна</span>
          </>
        ) : (
          <>
            <Sun className="w-4 h-4 text-spanish-red" />
            <span>Солнце</span>
          </>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
