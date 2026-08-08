# Retrace website

This repository is the public deployment target for [retrace.now](https://retrace.now).
GitHub Pages deploys the committed `dist/` directory directly; it does not build the
site from source.

The Astro and Fumadocs source remains here temporarily during the migration to the
private Retrace monorepo. Until that migration is complete, source changes must be
built and committed to `dist/` before they can affect the deployed website. The
monorepo will become the only editable source of truth and will publish generated
artifacts back to this repository.
