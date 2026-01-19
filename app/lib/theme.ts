export type Theme = "light" | "dark" | "system";

const THEME_STORAGE_KEY = "mybakery-theme";

export function getTheme(): Theme {
  if (typeof window === "undefined") return "system";
  
  const stored = sessionStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
  return stored || "system";
}

export function setTheme(theme: Theme) {
  if (typeof window === "undefined") return;
  
  sessionStorage.setItem(THEME_STORAGE_KEY, theme);
  applyTheme(theme);
}

export function applyTheme(theme: Theme) {
  if (typeof window === "undefined") return;
  
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  
  if (theme === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    root.classList.add(systemTheme);
  } else {
    root.classList.add(theme);
  }
}

export function initTheme() {
  if (typeof window === "undefined") return;
  
  const theme = getTheme();
  applyTheme(theme);
  
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const currentTheme = getTheme();
      if (currentTheme === "system") {
        applyTheme("system");
      }
    });
}
