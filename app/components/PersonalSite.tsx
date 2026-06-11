"use client";

import { SiteControls } from "@/app/components/SiteControls";
import { getCopy, type Locale } from "@/lib/i18n";
import {
  LOCALE_STORAGE_KEY,
  readStoredLocale,
  readStoredTheme,
  THEME_STORAGE_KEY,
  type ThemeMode,
} from "@/lib/preferences";
import { site } from "@/lib/site-data";
import { useEffect, useState } from "react";
import styled from "styled-components";

export function PersonalSite() {
  const [theme, setTheme] = useState<ThemeMode>("system");
  const [locale, setLocale] = useState<Locale>("en");
  const copy = getCopy(locale);

  useEffect(() => {
    setTheme(readStoredTheme());
    setLocale(readStoredLocale());
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [locale]);

  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "ypingmoe",
    jobTitle: "Full-Stack Engineer",
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Burnaby",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    sameAs: site.socialLinks.filter((link) => link.href.startsWith("http")).map((link) => link.href),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
      <SiteControls
        theme={theme}
        locale={locale}
        labels={copy.controls}
        onThemeChange={setTheme}
        onLocaleChange={setLocale}
      />
      <Header>
        <h1>🔥{site.name}</h1>
        <Tagline>
          {copy.tagline.map((segment, index) => (
            <span key={segment}>
              {segment}
              {index < copy.tagline.length - 1 ? "\u00a0" : ""}
            </span>
          ))}
        </Tagline>
        {site.pronouns ? <Pronouns>({site.pronouns})</Pronouns> : null}
      </Header>

      <Main>
        <p>{copy.summary}</p>

        <ExperienceSection>
          <ExperienceHeading>{copy.experienceTitle}</ExperienceHeading>
          {copy.experience.map((role) => (
            <ExperienceBlock key={`${role.company}-${role.period}`}>
              <RoleLine>
                <RoleHighlight>{role.title}</RoleHighlight>
                {" — "}
                <RoleHighlight>{role.company}</RoleHighlight>
                {" · "}
                <RoleHighlight>{role.location}</RoleHighlight>
                {" · "}
                <RoleHighlight>{role.period}</RoleHighlight>
              </RoleLine>
              <BulletList>
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </BulletList>
            </ExperienceBlock>
          ))}
        </ExperienceSection>
      </Main>

      <SiteFooter>
        <SocialLinks>
          {site.socialLinks.map((link) => (
            <FooterLink
              key={link.label}
              href={link.href}
              data-short={link.short}
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "me noopener noreferrer" }
                : {})}
            >
              {link.label}
            </FooterLink>
          ))}
        </SocialLinks>
        <CopyrightBar>
          © {new Date().getFullYear()} {site.copyrightHolder}. {copy.rightsReserved}
        </CopyrightBar>
      </SiteFooter>
    </>
  );
}

const Header = styled.header`
  margin-bottom: 1.5em;

  h1 {
    margin: 0 0 0.15em;
    font-size: 32px;
    font-weight: 400;
    line-height: 1.1;
  }

  @media (width <= 480px) {
    margin-bottom: 1em;
  }
`;

const Tagline = styled.p`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0.15em;
  font-size: 18px;
  color: var(--color-fg-muted);

  @media (width <= 480px) {
    font-size: 16px;
  }
`;

const Pronouns = styled.p`
  margin: 0;
  font-size: 14px;
  color: var(--color-fg-muted);
`;

const Main = styled.main`
  flex: 1;
`;

const ExperienceSection = styled.section`
  margin-top: 2em;
`;

const ExperienceHeading = styled.h2`
  margin: 0 0 1em;
  font-size: inherit;
  font-weight: 400;
  color: var(--color-fg-muted);
`;

const ExperienceBlock = styled.div`
  margin-bottom: 1.5em;

  &:last-child {
    margin-bottom: 0;
  }
`;

const RoleLine = styled.p`
  margin: 0 0 0.35em;
`;

const RoleHighlight = styled.span`
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 2px;
`;

const BulletList = styled.ul`
  margin: 0;
  padding: 0 0 0 1.25em;
  list-style: disc;

  li {
    margin-bottom: 0.35em;
  }

  li:last-child {
    margin-bottom: 0;
  }
`;

const SiteFooter = styled.footer`
  flex-shrink: 0;
  margin-top: 2.5em;

  @media (width <= 480px) {
    margin-top: 1.5em;
  }
`;

const SocialLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 16px;

  @media (width <= 480px) {
    a {
      font-size: 0;
    }

    a::before {
      content: attr(data-short);
      font-size: 16px;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
`;

const CopyrightBar = styled.p`
  margin: 1.25em 0 0;
  padding-top: 1em;
  border-top: 1px solid var(--color-fg-muted);
  font-size: 14px;
  color: var(--color-fg-muted);
`;

const FooterLink = styled.a``;
