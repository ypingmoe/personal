import Image from "next/image";

const stack = [
  { name: "Next.js", symbol: "/skills/nextjs.svg" },
  { name: "TypeScript", symbol: "/skills/typescript.svg" },
  { name: "Tailwind CSS", symbol: "/skills/tailwind.svg" },
  { name: "React", symbol: "/skills/react.svg" },
  { name: "Heroku", symbol: "/skills/heroku.svg" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/your-username", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/your-profile",
    icon: "linkedin",
  },
  { name: "X", href: "https://x.com/your-handle", icon: "x" },
];

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "github") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.7-2.7-.3-5.6-1.4-5.6-6.2 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.2 0 0 1.1-.4 3.4 1.2a11.7 11.7 0 0 1 6.2 0c2.3-1.6 3.4-1.2 3.4-1.2.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.8-2.9 5.9-5.7 6.2.4.4.9 1.1.9 2.3v3.4c0 .4.2.7.8.6A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M4.98 3.5A2.48 2.48 0 0 0 2.5 6a2.48 2.48 0 0 0 2.48 2.5A2.49 2.49 0 0 0 7.5 6a2.49 2.49 0 0 0-2.52-2.5ZM2.8 9.5h4.3V21H2.8V9.5Zm7.1 0h4.1v1.6h.1c.6-1.1 2-2 4.1-2 4.4 0 5.2 2.8 5.2 6.5V21H19v-4.8c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V21H11V9.5h-1.1Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.7-6.4L6.8 22H2.9l7.2-8.2L1 2h6.2l4.2 5.8L18.9 2Zm-1.1 18h1.7L6.2 3.9H4.4L17.8 20Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold tracking-tight">
            Aster Brand
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a className="transition-colors hover:text-indigo-600" href="#about">
              About
            </a>
            <a className="transition-colors hover:text-indigo-600" href="#stack">
              Stack
            </a>
            <a className="transition-colors hover:text-indigo-600" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="home" className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-16 pt-14">
        <section id="about" className="grid gap-10 py-12 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <p className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Personal Brand Website
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Building clean web products with speed and clarity.
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              I am a frontend-focused developer crafting fast, accessible, and
              maintainable web experiences with Next.js, TypeScript, and Tailwind CSS.
            </p>
            <a
              className="inline-flex items-center rounded-lg border border-slate-900 px-5 py-3 text-sm font-semibold text-slate-900 transition-transform hover:-translate-y-1 hover:bg-slate-900 hover:text-white"
              href="#contact"
            >
              Let&apos;s Work Together
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold">What you get</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>Responsive layout with semantic sections</li>
              <li>Icon and card hover animations for interactive feel</li>
              <li>Heroku-ready production setup</li>
            </ul>
          </div>
        </section>

        <section id="stack" className="py-8">
          <h2 className="text-2xl font-bold">Skill Stack</h2>
          <p className="mt-2 text-slate-600">
            Each icon is a symbol image with motion and hover interaction.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {stack.map((item, index) => (
              <article
                key={item.name}
                className="skill-card flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Image
                  src={item.symbol}
                  alt={`${item.name} symbol`}
                  width={72}
                  height={72}
                  className="skill-icon h-18 w-18 object-contain"
                />
                <h3 className="mt-4 text-sm font-semibold">{item.name}</h3>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="border-t border-slate-200 bg-slate-50"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 px-6 py-8 sm:flex-row">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Aster Brand. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="social-link rounded-full border border-slate-300 p-2 text-slate-700 transition-colors hover:border-indigo-600 hover:text-indigo-600"
              >
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
