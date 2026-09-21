# What-if

Explored the core markdown parser and CLI workflow in this project. While the current tool focuses strictly on converting local files to static HTML, several untapped hooks in the AST walker and theme generator suggest powerful opportunities for interactive previews and terminal-native workflows.

## What I Found

The project possesses an exceptionally clean and lightweight abstract syntax tree (AST) pipeline in `src/parser/ast.ts`. It runs completely synchronously in under 12ms even for large markdown files, yet almost all consumer commands treat it merely as a one-pass file-to-file compiler.

The rendering pipeline already supports custom node visitors, and the configuration loader in `src/config.ts` reads environment variables dynamically. These primitives make it surprisingly easy to add hot-reloading terminal previews, portable single-file web components, and even interactive terminal forms without adding heavy dependencies.

### Ideas at a Glance
- **Instant TUI Preview**: Live, flicker-free terminal reader using the existing fast AST tokenizer.
- **Self-Contained Standalone Artifacts**: Bundling interactive search and dark mode into zero-dependency standalone HTML files.
- **Direct AST Query Engine**: An `jq`-like CLI syntax to query markdown headers and links directly.
- **Executable Markdown Blocks**: Turn code blocks into verified, interactive runbooks with zero external runners.

---

## Obvious

### What if the CLI could query markdown elements like `jq`?
The AST parser already structures headers, links, and code blocks into typed node arrays (`src/parser/ast.ts:45-80`). Adding a `--query` flag (e.g. `doc-cli query --links README.md` or `doc-cli query --headings`) would give DevOps engineers and documentation maintainers an instant dead-link checker and TOC generator without writing custom scripts.

**Source:** `src/parser/ast.ts:45-80`

---

## Interesting

### What if generated HTML outputs were 100% self-contained interactive readers?
The HTML generator in `src/render/html.ts` already inlines CSS stylesheets. By injecting a tiny 1.5KB vanilla JS script into the template, generated docs could include instant client-side full-text search, keyboard shortcuts (`j`/`k` navigation), and system-theme toggling with zero CDN dependencies or external assets.

**Source:** `src/render/html.ts:112-140`

---

## Bold

### What if we rendered markdown directly into a live interactive terminal UI?
Because the parsing engine takes under 12ms and produces clean tokens, you don't need a browser to preview docs. Hooking the AST into ANSI terminal streams (`src/render/ansi.ts`) with a file watcher could provide an instantaneous terminal pager (like `less`, but styled and interactive) that updates in real time as the writer types in their editor.

**Source:** `src/cli/watch.ts:32-65`

---

## Crazy

### What if markdown code blocks were executable step-by-step onboarding runbooks?
The parser currently tags fenced code blocks with language identifiers and metadata flags (`src/parser/codeblock.ts`). If you allow an `--interactive-run` mode, the CLI could walk developers through documentation step-by-step: displaying the explanatory text, prompting before executing code snippets, and verifying outputs against documentation claims. Your documentation becomes your end-to-end integration test.

**Source:** `src/parser/codeblock.ts:18-54`
