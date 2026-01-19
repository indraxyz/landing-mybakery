import { useEffect, useState, useCallback } from "react";
import { type Theme, getTheme, setTheme, applyTheme } from "~/lib/theme";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentTheme = getTheme();
    applyTheme(currentTheme);
    setThemeState(currentTheme);
    
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const storedTheme = getTheme();
      if (storedTheme === "system") {
        applyTheme("system");
        setThemeState("system");
      }
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const updateTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    setThemeState(newTheme);
    
    window.dispatchEvent(new CustomEvent("theme-change", { detail: newTheme }));
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const handleThemeChange = () => {
      const currentTheme = getTheme();
      setThemeState(currentTheme);
    };

    window.addEventListener("theme-change", handleThemeChange as EventListener);
    return () => {
      window.removeEventListener("theme-change", handleThemeChange as EventListener);
    };
  }, [mounted]);

  return [theme, updateTheme, mounted] as const;
}
