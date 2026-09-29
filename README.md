# What-if 💡

> A creative exploration and grounded brainstorming skill for AI coding agents.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**What-if** turns your AI coding assistant into a creative, mischievous co-conspirator (`😈`, `⚡`, `💡`). Instead of passively waiting for orders or performing routine code reviews, the agent inspects your codebase and asks: **"What if...?"**

It discovers latent architectural superpowers, untapped product opportunities, and delightful UX improvements hiding in plain sight within your existing code.

## 🧭 Why What-If

**The problem it solves.** Coding agents are built to execute. Ask for a review and you get a checklist of missing tests and linters; ask for a feature and you get exactly the feature you described. Nobody asks what the code you already shipped could turn into.

**When to use it.** When something works and you want to explore its next move — a new product angle, a UX delight, an architectural shift — before committing to a roadmap. It is not a linter, not a test runner, and not a code reviewer.

**What to expect.** The agent does a lightweight read of your repository (docs, manifests, structure, tests, `TODO`/`FIXME` comments), then writes **one file**: `WHAT_IF.md`. Inside are ideas sorted into four tiers — Obvious, Interesting, Bold, Crazy (Plausible) — and every idea points back to real files and line numbers in *your* code. It never edits your source, tests, or configuration.

---

## 🚀 Quick Start

### Recommended: universal Agent Skills installer

```bash
npx skills add pourmirzai/What-If
```

Preview what it would install, without touching your workspace:

```bash
npx skills add pourmirzai/What-If --list
```

Then type `What-if` (optionally `What-if: <topic>`) in your agent's chat.

> ⚠️ Review any skill before installing it — skills run with full agent permissions.

### Alternative 1: Tell your AI agent directly
Copy and paste this single prompt into your coding agent's chat:

```text
Install the what-if skill from https://github.com/pourmirzai/What-If, refer to the repo's INSTALL.md for instructions.
```

### Alternative 2: Dedicated 1-Click Installer
```bash
npx github:pourmirzai/What-If
```
Opens an interactive menu and installs to the agent you pick.

🔗 **For detailed instructions across all clients (Antigravity, Claude Code, Windsurf, Zed, Qwen, Codex), see [INSTALL.md](./INSTALL.md).**

---

## ✅ Compatibility

**Tested** (2026-09-29, Node 24, [`skills`](https://github.com/vercel-labs/skills) CLI v1.7.0):

| Command | Result |
| --- | --- |
| `npx skills add pourmirzai/What-If --list` | Resolves the repository and reports one skill: `what-if` |
| `npx skills add pourmirzai/What-If` | Installs to `.agents/skills/what-if` and symlinks it into `.claude/skills/what-if`. The installer auto-detected Antigravity, Antigravity CLI, Claude Code, Cline, Codex, Gemini CLI, GitHub Copilot, OpenCode, ZCode |
| `npx github:pourmirzai/What-If` | Interactive installer launches, reads a choice, and exits cleanly |

These checks prove that the skill **installs**. They do not prove that every agent behaves identically once the skill is loaded — no per-agent automated test suite exists for this repository.

**Claimed** (declared by a manifest in this repository, not independently tested):

| File | Declared target |
| --- | --- |
| `plugin.json` | Claude Code / OpenCode plugin manifest |
| `opencode.json` | OpenCode configuration |
| `kimi.plugin.json` | Kimi plugin |
| `qwen-extension.json` | Qwen Code extension |
| `agents/gemini.toml` | Gemini CLI / Google Antigravity slash command |
| `agents/openai.yaml` | OpenAI Codex |

**Manual installation:** [INSTALL.md](./INSTALL.md) documents single-file `curl` installs for Gemini CLI/Antigravity, Claude Code, Windsurf, Zed, and Codex/`AGENTS.md`. These copy `SKILL.md` by hand; they were reviewed but not executed here.

**Known limitation:** `claude plugin marketplace add pourmirzai/What-If` fails, because this repository has no `.claude-plugin/marketplace.json`. For Claude Code, use `npx skills add pourmirzai/What-If` (tested) or the manual `curl` copy.

---

## 🎭 What Changes?

> The exchange below is **illustrative**, written to show the difference in tone and focus. It is not a captured transcript and no output is guaranteed.

<table>
<tr>
<td width="50%">

### 😴 Standard AI Agent

> "I reviewed your repository. Here are some recommendations:
> 1. Consider adding more automated tests for edge cases.
> 2. You could improve error handling in the API controllers.
> 3. Some dependencies could be updated to the latest versions.
> 4. You might want to consider adding AI features to your dashboard.
>
> Hope this helps! Let me know if you need anything else."

</td>

<td width="50%">

### 😈 What-if Co-Conspirator

> "Wait a second... you built an ultra-fast 12ms AST parser here and you're only using it as a one-pass file compiler?! 😈
>
> **What if we turned it into a live interactive terminal reader with hot-reload?** The tokenizer in `src/parser/ast.ts:45-80` already splits blocks cleanly.
>
> I just drafted **`WHAT_IF.md`** with 4 wild, grounded opportunities—from an instant TUI preview to executable runbooks. Read it when you're ready to have your mind bent."

</td>
</tr>
</table>

---

## ✨ Example: Input → Output

**Input** — typed into the chat of an agent that has the skill installed, while working in a repository that converts Markdown to HTML:

```text
What-if
```

**Possible output** — verbatim excerpt from [`examples/WHAT_IF.md`](./examples/WHAT_IF.md), a recorded What-if session against a Markdown-to-HTML tool:

```markdown
### Ideas at a Glance
- **Instant TUI Preview**: Live, flicker-free terminal reader using the existing fast AST tokenizer.
- **Self-Contained Standalone Artifacts**: Bundling interactive search and dark mode into zero-dependency standalone HTML files.
- **Direct AST Query Engine**: An `jq`-like CLI syntax to query markdown headers and links directly.
- **Executable Markdown Blocks**: Turn code blocks into verified, interactive runbooks with zero external runners.

---

## Obvious

### What if the CLI could query markdown elements like `jq`?
The AST parser already structures headers, links, and code blocks into typed node
arrays (`src/parser/ast.ts:45-80`). Adding a `--query` flag (e.g.
`doc-cli query --links README.md`) would give DevOps engineers and documentation
maintainers an instant dead-link checker and TOC generator without writing
custom scripts.

**Source:** `src/parser/ast.ts:45-80`
```

In chat, the agent then teases the two or three sharpest ideas and points you at `WHAT_IF.md`.

> ⚠️ **Illustrative only.** The excerpt above is reproduced from this repository's recorded example; it is a sample of the *format*, not a promise of content. Your repository is different, so the ideas, the tiering, and even the tone will differ — and a small or generic codebase may legitimately produce *"nothing particularly interesting surfaced."*

---

## 🎯 Core Principles

1. **Explore, don't review.**
   What-if does not obsess over formatting, linting, or missing tests. It looks for unasked questions and dormant capabilities.
2. **Challenge, don't criticize.**
   What-if playfully challenges assumptions and architecture without passing negative judgment.
3. **Spark ideas, don't make decisions.**
   What-if aims to excite the developer's imagination and open new horizons. You retain full control over what gets built.
4. **Zero touch on project code.**
   What-if is strictly non-destructive. It **never** alters existing source code, tests, docs, or configuration. The only file it ever creates or updates is `WHAT_IF.md`.

---

## ⚡ How It Works

What-if operates in two modes:

### 1. Autonomous Exploration
Trigger it without arguments to let the agent roam:
```text
What-if
```
The agent conducts lightweight reconnaissance across docs, structure, tests, and comments, discovers unusual patterns or assumptions, and presents creative possibilities.

### 2. User-Directed Exploration
Trigger it with a target topic, feature, or persona:
```text
What-if: explore the checkout experience
What-if: make this CLI tool 10x more delightful to use
What-if: find growth opportunities for agency users
```
The agent anchors on your target area while staying alert to serendipitous connections discovered along the way.

---

## 🌈 The Idea Spectrum

Brainstormed ideas are categorized into four dynamic tiers:

* **Obvious**: Natural next steps and low-hanging fruit (*"Why haven't we done this already?"*).
* **Interesting**: Fresh angles, clever hooks, and UX delights (*"Ooh, that's clever."*).
* **Bold**: High-leverage architectural refactors and ambitious feature evolutions.
* **Crazy (Plausible)**: Wild, provocative concepts that break conventions while remaining strictly grounded in real code capabilities.

Every idea links directly back to its source files (`path/to/file.ext:line`).

---

## 📁 Repository Structure

```text
what-if/
├── SKILL.md               # Skill entry point discovered by `npx skills`
├── skills/
│   └── what-if/
│       └── SKILL.md      # Standard Agent Skills specification (identical to root SKILL.md)
├── agents/               # Harness-specific command templates
│   ├── gemini.toml       # Google Antigravity / Gemini CLI
│   └── openai.yaml       # OpenAI Codex
├── plugin.json           # Claude Code & OpenCode plugin manifest
├── opencode.json         # OpenCode configuration
├── kimi.plugin.json      # Kimi manifest
├── qwen-extension.json   # Qwen Code extension manifest
├── bin/
│   └── cli.js            # Zero-dependency 1-click installer
├── examples/
│   └── WHAT_IF.md        # Real-world example output generated by What-if
├── INSTALL.md            # Detailed multi-client installation guide
├── README.md             # Project overview and quick start
└── LICENSE               # MIT License
```

---

## ⚖️ License

MIT © 2026 Morteza Pourmirzai
