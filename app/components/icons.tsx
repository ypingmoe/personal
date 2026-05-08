type IconProps = {
  className?: string;
};

export function GithubIcon({ className = "h-5 w-5 fill-current" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.7-2.7-.3-5.6-1.4-5.6-6.2 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.2 0 0 1.1-.4 3.4 1.2a11.7 11.7 0 0 1 6.2 0c2.3-1.6 3.4-1.2 3.4-1.2.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.8-2.9 5.9-5.7 6.2.4.4.9 1.1.9 2.3v3.4c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-5 w-5 fill-current" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M4.98 3.5A2.48 2.48 0 0 0 2.5 6a2.48 2.48 0 0 0 2.48 2.5A2.49 2.49 0 0 0 7.5 6a2.49 2.49 0 0 0-2.52-2.5ZM2.8 9.5h4.3V21H2.8V9.5Zm7.1 0h4.1v1.6h.1c.6-1.1 2-2 4.1-2 4.4 0 5.2 2.8 5.2 6.5V21H19v-4.8c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V21H11V9.5h-1.1Z" />
    </svg>
  );
}

export function XIcon({ className = "h-5 w-5 fill-current" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.7-6.4L6.8 22H2.9l7.2-8.2L1 2h6.2l4.2 5.8L18.9 2Zm-1.1 18h1.7L6.2 3.9H4.4L17.8 20Z" />
    </svg>
  );
}

export function SunIcon({ className = "theme-icon theme-icon-sun" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} focusable="false">
      <path d="M12 4.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V5.5a.75.75 0 0 1 .75-.75ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm7.25-5.25h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5Zm-13 0h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5Zm9.01 4.76a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 0 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06Zm-8.48-8.48a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 0 1-1.06 1.06L6.78 10.1a.75.75 0 0 1 0-1.06Zm0 9.54 1.06-1.06a.75.75 0 1 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06-1.06Zm9.54-9.54 1.06-1.06a.75.75 0 1 1 1.06 1.06l-1.06 1.06a.75.75 0 1 1-1.06-1.06Z" />
    </svg>
  );
}

export function MoonIcon({ className = "theme-icon theme-icon-moon" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} focusable="false">
      <path d="M12.94 3.06a.75.75 0 0 1 .82.97 7.75 7.75 0 0 0 9.21 10.03.75.75 0 0 1 .78 1.16A10 10 0 1 1 12.94 3.06Z" />
    </svg>
  );
}
