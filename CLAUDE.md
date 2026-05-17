# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the app

No build step. Open `Speaking Baeza/index.html` directly in a browser (double-click or use a local server). The app uses React 18 + Babel Standalone loaded from CDN, so JSX is compiled in-browser at runtime.

For live development with hot reload, serve the folder with any static server:

```
npx serve "Speaking Baeza"
# or
python -m http.server 8080 --directory "Speaking Baeza"
```

The canonical entry point is `index.html`. An earlier prototype (`_legacy/index.html` + `_legacy/app.jsx`) lives in `Speaking Baeza/_legacy/` and is not loaded by the current app — kept only for reference and safe to delete.

## Architecture

No bundler, no npm, no framework CLI. Every `.jsx` file is loaded as a `<script type="text/babel">` tag and shares a single global scope. Files expose their exports by calling `Object.assign(window, { ... })` at the bottom.

**Load order in `Speaking Baeza.html`** (order matters — later files depend on earlier ones):

1. `data.jsx` — `QUESTIONS`, `HINTS`, `STOP_WORDS`, `calcScore()`, `levenshtein()`, `buildPhonetic()`, TTS helpers (`ttsSpeak`, `ttsStop`), and the `useSR()` Speech Recognition hook. All exposed on `window`.
2. `tweaks-panel.jsx` — `useTweaks()` hook + all `TweakXxx` control components. The `useTweaks(defaults)` hook reads from a `/*EDITMODE-BEGIN*/…/*EDITMODE-END*/` JSON block and persists changes via `postMessage` to the host frame.
3. `components.jsx` — shared UI primitives: `Icon`, `Button`, `TopBar`, `HelpModal`, `SectionLabel`, rank/XP helpers (`getRank`, `getNextRank`), and the `useIdentity()` hook (persists name + student number to `localStorage`).
4. `screens.jsx` — screen-level React components: `Landing`, `Practice`, `FreeSpeaking`, `Pronunciation`, `Complete`.
5. `ephemerides.jsx` — Civil Guard historical facts shown in the sidebar.
6. `exam.jsx` — exam-mode logic.
7. `screens-minimal.jsx` — lightweight variants of the screens.
8. `app-minimal.jsx` — root `App` component; calls `ReactDOM.createRoot` and mounts.

## Key design patterns

**Global CSS variables** defined in `<style>` inside `Speaking Baeza.html`: `--paper`, `--ink`, `--olive`, `--gold`, `--font-display`, `--font-ui`, `--font-mono`. `App` updates them at runtime via `document.documentElement.style.setProperty` when tweaks change.

**Scoring** (`calcScore` in `data.jsx`): compares user's transcribed speech against the model answer using keyword extraction + Levenshtein fuzzy matching. Returns `{ score, cls, emoji, matched, missedHints }`.

**Speech Recognition** (`useSR`): wraps the Web Speech API (`webkitSpeechRecognition`) with auto-restart on `no-speech` errors and a 1.2 s finalize timer after `stop()` is called.

**TTS** (`ttsSpeak`): uses `window.speechSynthesis`; prefers Google US English / Microsoft Natural voices by name; includes a keep-alive `setInterval` to work around the browser bug where synthesis silently pauses mid-utterance.

**Tweaks panel**: a floating dev panel (activated by the host via `postMessage __activate_edit_mode`). The `SPK_DEFAULTS` block in `app-minimal.jsx` between `/*EDITMODE-BEGIN*/` and `/*EDITMODE-END*/` is what gets rewritten when a tweak is saved.

## Content

`QUESTIONS` in `data.jsx` is the single source of truth for all 74 practice questions. Each entry has:
```js
{ topic: { es, en }, q: { es, en }, a: { es, en } }
```
Topics include: Weapons, Crime, Burglary, Personality, Appearance. Adding questions means appending objects to this array.

`HINTS` maps English vocabulary words to their pronunciation guides (e.g. `weapon → 'WEP-un'`). These surface as inline hints when a keyword is missed in a scored answer.
