# Retrace website

This repository is the artifact-only public deployment target for
[retrace.now](https://retrace.now). GitHub Pages deploys the committed `dist/` directory
directly; this repository does not contain or build the website source.

The editable Astro and Fumadocs source lives privately under `site/` in
`aballiet/retrace-private`. Its publish workflow builds and validates the complete static
site, then `retrace-bot` replaces only `dist/` here and records the source revision in
`dist/.retrace-source-revision`.

Do not edit generated files in `dist/` by hand. The next successful publish from the
private source repository will overwrite direct changes.
