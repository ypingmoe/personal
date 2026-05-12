type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: "Senior Full-Stack Engineer",
    company: "Proleague",
    period: "02/2022–02/2024",
    location: "Remote, US",
    bullets: [
      [
        "Developed and deployed smart contracts across SKALE chain, Ethereum, Solana,",
        "and Ronin testnet for a competitive gaming platform.",
      ].join(" "),
      [
        "Integrated AI-driven Ethereum smart contract logic; optimised gas usage",
        "and on-chain data structures to reduce transaction costs by 30%+.",
      ].join(" "),
      [
        "Led cross-chain infrastructure work across four different L1/L2 networks",
        "simultaneously with zero downtime deployments.",
      ].join(" "),
    ],
  },

  {
    title: "Full-Stack Web3 Developer",
    company: "BNRY / BinaryBit",
    period: "10/2022–01/2024",
    location: "Remote, Germany",
    bullets: [
      [
        "Built a production BNB bridge platform with on-chain smart contracts,",
        "swap functionality between BNRY and BSC tokens, and a full-featured frontend.",
      ].join(" "),
    ],
  },

  {
    title: "Solana DeFi Engineer",
    company: "Multiple DeFi Teams",
    period: "2020–2023",
    location: "Remote, US",
    bullets: [
      [
        "Integrated Meteora DLMM active pool, open positions management,",
        "and DLMM performance tracking for WiseTrade.",
      ].join(" "),
      [
        "Built Memepad launchpad with Meteora-integrated token smart contracts,",
        "staking rewards, and holder reward distribution.",
      ].join(" "),
      [
        "Built Pumpfun bonding-curve launchpad fork, including backend,",
        "Solana Web3 integration, and liquidity seeding logic.",
      ].join(" "),
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-8">
      <h2 className="text-2xl font-bold">Experience</h2>
      <p className="mt-2 max-w-2xl text-muted">
        Web3 engineering across smart contracts, cross-chain infrastructure, and Solana DeFi
        integrations.
      </p>
      <div className="mt-6 flex flex-col gap-5">
        {experiences.map((job) => (
          <article
            key={`${job.company}-${job.period}`}
            className="project-card rounded-2xl border border-edge bg-surface p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">
                {job.title}
                <span className="font-normal text-muted"> · {job.company}</span>
              </h3>
              <p className="text-sm text-muted">
                {job.period} · {job.location}
              </p>
            </div>
            <ul className="mt-4 list-none space-y-2 pl-0 text-sm leading-6 text-muted">
              {job.bullets.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-0.5 shrink-0 text-foreground" aria-hidden>
                    ▸
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
