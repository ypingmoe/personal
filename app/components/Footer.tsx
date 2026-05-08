import { GithubIcon, LinkedinIcon, XIcon } from "@/app/components/icons";

type SocialItem = {
  name: string;
  href: string;
  icon: string;
};

type FooterProps = {
  socialLinks: SocialItem[];
};

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "github") return <GithubIcon />;
  if (icon === "linkedin") return <LinkedinIcon />;
  return <XIcon />;
}

export function Footer({ socialLinks }: FooterProps) {
  return (
    <footer id="contact" className="border-t border-edge bg-surface">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Dev Portfolio. Built with Next.js, TypeScript, and Tailwind
          CSS.
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="social-link icon-button"
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
