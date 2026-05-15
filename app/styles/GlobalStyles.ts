"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    color-scheme: light dark;
    --lightningcss-light: initial;
    --lightningcss-dark: ;
    --color-bg: var(--lightningcss-light, #fff) var(--lightningcss-dark, #111);
    --color-fg: var(--lightningcss-light, #333) var(--lightningcss-dark, #eee);
    --color-fg-muted: var(--lightningcss-light, #333333b3) var(--lightningcss-dark, #eeeeeeb3);
    --color-accent: #fff44f;
    --color-accent-hover-bg: var(--lightningcss-light, #fff44f) var(--lightningcss-dark, #3a3a00);
    --color-accent-hover-fg: var(--lightningcss-light, #333) var(--lightningcss-dark, #fff44f);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --lightningcss-light: ;
      --lightningcss-dark: initial;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: var(--font-roboto-mono), ui-monospace, monospace;
    font-size: 16px;
    line-height: 1.7;
  }

  body {
    margin: 0;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    max-width: 720px;
    margin-inline: auto;
    padding: 40px 20px;
    background-color: var(--color-bg);
    color: var(--color-fg);
  }

  p {
    margin: 0 0 1em;
    padding: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }

  a {
    color: inherit;
    text-underline-offset: 2px;
    transition: all 0.2s;
  }

  a:hover {
    background: var(--color-accent-hover-bg);
    color: var(--color-accent-hover-fg);
  }

  a:focus:not(:focus-visible) {
    outline: none;
  }

  a:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  ::selection {
    background: var(--color-accent);
    color: #000;
  }

  @media (width <= 480px) {
    body {
      padding: 20px 16px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`;
