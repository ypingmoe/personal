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
    --color-control-bg: var(--lightningcss-light, #fff) var(--lightningcss-dark, #1a1a1a);
    --color-control-border: var(--lightningcss-light, #33333355) var(--lightningcss-dark, #eeeeee44);
    --color-surface: #ffffff;
    --color-surface-border: rgba(51, 51, 51, 0.2);
  }

  [data-theme="light"] {
    --lightningcss-light: initial;
    --lightningcss-dark: ;
    --color-surface: #ffffff;
    --color-surface-border: rgba(51, 51, 51, 0.2);
    color-scheme: light;
  }

  [data-theme="dark"] {
    --lightningcss-light: ;
    --lightningcss-dark: initial;
    --color-surface: #1a1a1a;
    --color-surface-border: rgba(238, 238, 238, 0.22);
    color-scheme: dark;
  }

  [data-theme="system"] {
    color-scheme: light dark;
  }

  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]),
    [data-theme="system"] {
      --lightningcss-light: ;
      --lightningcss-dark: initial;
      --color-surface: #1a1a1a;
      --color-surface-border: rgba(238, 238, 238, 0.22);
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

  .site-controls {
    position: relative;
    z-index: 40;
    display: flex;
    flex-wrap: wrap;
    gap: 12px 20px;
    margin-bottom: 1.5em;
    font-size: 13px;
    color: var(--color-fg-muted);
  }

  .dropdown {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  .dropdown.is-open {
    z-index: 50;
  }

  .dropdown-label {
    font-size: 12px;
    white-space: nowrap;
  }

  .dropdown-trigger {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    min-width: 132px;
    padding: 7px 10px 7px 12px;
    font: inherit;
    font-size: 13px;
    color: var(--color-fg);
    background-color: transparent;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .dropdown-trigger:hover {
    background: var(--color-accent-hover-bg);
    color: var(--color-accent-hover-fg);
  }

  .dropdown-trigger:focus:not(:focus-visible) {
    outline: none;
  }

  .dropdown.is-open .dropdown-trigger {
    outline: none;
  }

  .dropdown-value {
    text-align: left;
  }

  .dropdown-chevron {
    width: 8px;
    height: 8px;
    border-right: 1.5px solid currentColor;
    border-bottom: 1.5px solid currentColor;
    transform: rotate(45deg) translateY(-2px);
    transition: transform 0.15s ease;
    flex-shrink: 0;
  }

  .dropdown.is-open .dropdown-chevron {
    transform: rotate(225deg) translateY(1px);
  }

  .dropdown-menu {
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    z-index: 100;
    min-width: 100%;
    margin: 0;
    padding: 6px;
    list-style: none;
    background-color: var(--color-surface);
    border: 1px solid var(--color-surface-border);
    border-radius: 10px;
    box-shadow:
      0 12px 28px rgba(0, 0, 0, 0.16),
      0 2px 8px rgba(0, 0, 0, 0.08);
    isolation: isolate;
  }

  .dropdown-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
    padding: 8px 10px;
    font: inherit;
    font-size: 13px;
    color: var(--color-fg);
    background-color: var(--color-surface);
    border: none;
    border-radius: 6px;
    text-align: left;
    cursor: pointer;
    transition: background 0.12s ease, color 0.12s ease;
  }

  .dropdown-option:hover,
  .dropdown-option.is-active {
    background: var(--color-accent-hover-bg);
    color: var(--color-accent-hover-fg);
  }

  .dropdown-option.is-selected {
    font-weight: 700;
  }

  .dropdown-check {
    width: 7px;
    height: 12px;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(45deg) translate(-1px, -1px);
    flex-shrink: 0;
  }

  @media (width <= 480px) {
    body {
      padding: 20px 16px;
    }

    .site-controls {
      margin-bottom: 1em;
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
