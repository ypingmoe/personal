"use client";

import { Dropdown } from "@/app/components/Dropdown";
import type { Locale } from "@/lib/i18n";
import type { ThemeMode } from "@/lib/preferences";
import { useState } from "react";

type SiteControlsProps = {
  theme: ThemeMode;
  locale: Locale;
  labels: {
    theme: string;
    language: string;
    themeLight: string;
    themeDark: string;
    themeSystem: string;
    langEn: string;
    langFr: string;
  };
  onThemeChange: (theme: ThemeMode) => void;
  onLocaleChange: (locale: Locale) => void;
};

type OpenMenu = "theme" | "language" | null;

export function SiteControls({
  theme,
  locale,
  labels,
  onThemeChange,
  onLocaleChange,
}: SiteControlsProps) {
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);

  return (
    <div className="site-controls">
      <Dropdown
        label={labels.theme}
        value={theme}
        options={[
          { value: "light", label: labels.themeLight },
          { value: "dark", label: labels.themeDark },
          { value: "system", label: labels.themeSystem },
        ]}
        onChange={onThemeChange}
        isOpen={openMenu === "theme"}
        onOpen={() => setOpenMenu("theme")}
        onClose={() => setOpenMenu(null)}
      />
      <Dropdown
        label={labels.language}
        value={locale}
        options={[
          { value: "en", label: labels.langEn },
          { value: "fr", label: labels.langFr },
        ]}
        onChange={onLocaleChange}
        isOpen={openMenu === "language"}
        onOpen={() => setOpenMenu("language")}
        onClose={() => setOpenMenu(null)}
      />
    </div>
  );
}
