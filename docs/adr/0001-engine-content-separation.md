# ADR 0001: Strict separation between engine and content packs

Date: 2026-07-24
Status: accepted

## Context

Kafkex is forked from Kortex, a reference template for spaced-repetition
learning apps (Kotlin, Rust, GCP, ...). If lessons or Kafka-specific
logic leak into components, cloning the app for another topic means
untangling code.

## Decision

The codebase is split in two layers:

- **Engine** (`lib/engine`, `components`, `app`): spaced repetition,
  gamification, i18n, sync, UI. It manipulates only the neutral types
  defined in `lib/content/types.ts` and never references Kafka.
- **Content pack** (`content/packs/<id>`): a manifest (`pack.json`),
  module files (lessons, flashcards, exercises) and a version tracking
  file. All learner-facing text lives here, in both locales.

The only bridge is `lib/content/index.ts`, which statically imports the
active pack. Creating a new app = new pack folder + swap those imports.

## Consequences

- Content is data: it can be reviewed and diffed without touching the
  engine.
- Static imports mean the whole catalog is bundled and works offline;
  acceptable for text content, revisit if packs grow past a few MB.
