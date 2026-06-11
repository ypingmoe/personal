export type ThemeMode = "light" | "dark" | "system";

export const THEME_STORAGE_KEY = "site-theme";
export const LOCALE_STORAGE_KEY = "site-lang";

export function readStoredTheme(): ThemeMode {
  if (typeof window === "undefined") return "system";
  const value = window.localStorage.getItem(THEME_STORAGE_KEY);
  return value === "light" || value === "dark" || value === "system" ? value : "system";
}

export function readStoredLocale(): "en" | "fr" {
  if (typeof window === "undefined") return "en";
  const value = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return value === "fr" ? "fr" : "en";
}

export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}")||"system";document.documentElement.setAttribute("data-theme",t);var l=localStorage.getItem("${LOCALE_STORAGE_KEY}")||"en";document.documentElement.lang=l;}catch(e){document.documentElement.setAttribute("data-theme","system");document.documentElement.lang="en";}})();`;
