# Learning Section Changelog

All notable changes to `/learning/` on adparedes.github.io. Scoped to this section only — the professional site, blog, and personal pages have their own history and aren't tracked here.

Versioning is informal (matches the `v#.#` shown in the page byline on `/learning/`), not strict semver.

## v2.0 — 2026-08-12

### Added
- **History Library** (`/learning/history/`): Old Testament, World Powers, and New Testament timelines, era-grouped, with a shared `people.js` figures library and footnote-style cross-links.
- **Theology Library** (`/learning/theology/`): doctrine-development reference pages — a Church document-type glossary, a version-history table, a detailed timeline, and a key-people table. First topic: "Salvation & the Non-Evangelized." Includes a "What Is Theology?" primer on the hub page.
- **Figures Library** (`/learning/figures/`): individual saint/theologian profiles (Augustine, Francis, Aquinas), each with a bio-timeline, theological principles, and Church impact — plus a `vs/` subsection for cross-figure comparisons, holding only what's genuinely comparative rather than duplicating each person's bio.
- Shared utilities: `nav.js` (mobile menu) and `reveal.js` (scroll-in animation), used across all three new sections.
- Warm & tactile visual system: card-based timelines/tables/callouts, a new terracotta accent color alongside the existing green, hover motion, and scroll-reveal — new tokens added to `learning.css`, additive only.

### Changed
- History, Theology, and Figures added to the main Learning nav bar.
- Figures restructured from one combined comparison page into solo profile pages plus a dedicated `vs/` comparison section.
- Standing style rule adopted: no em-dashes anywhere in `/learning/` content.

### Fixed
- Mobile nav menu could overflow past the screen bottom with no way to scroll to the last links (History/Theology/Figures were the ones most likely to get cut off).
- Mobile nav menu had no way to dismiss except re-tapping the small hamburger icon; added a tap-outside-to-close backdrop and Escape key support.

## v1.1 — 2026-03-29

Reconstructed retroactively from git history; this changelog didn't exist yet at the time.

### Changed
- Layout revamp across Morning, Framework, and Wisdom pages, plus the versioning convention itself (the `v#.#` byline shown on `/learning/`).
