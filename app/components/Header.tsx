import { MoonIcon, SunIcon } from "@/app/components/icons";

type HeaderProps = {
  onToggleTheme: () => void;
  theme: "light" | "dark";
};

export function Header({ onToggleTheme, theme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-edge bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold tracking-tight">
          YPING MORE
        </a>
        <div className="flex items-center gap-5">
          <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
            <a className="hover-link" href="#about">
              About
            </a>
            <a className="hover-link" href="#skills">
              Skills
            </a>
            <a className="hover-link" href="#projects">
              Projects
            </a>
            <a className="hover-link" href="#contact">
              Contact
            </a>
          </nav>
          <button
            type="button"
            onClick={onToggleTheme}
            className="icon-button"
            aria-label="Toggle theme"
          >
            <span className="theme-icons" aria-hidden="true">
              <SunIcon />
              <MoonIcon />
            </span>
            <span>{theme}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
