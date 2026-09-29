# Installation Guide for What-if

Choose your coding assistant or agent harness below.

> **Verification status (2026-09-29, Node 24, `skills` CLI v1.7.0).**
> ✅ Executed and confirmed working: `npx skills add pourmirzai/What-If --list`, `npx skills add pourmirzai/What-If`, `npx skills add pourmirzai/What-If -a cursor -y`, `npx skills add pourmirzai/What-If -a claude-code -y`, `npx github:pourmirzai/What-If`, `npx github:pourmirzai/What-If --claude --local`.
> ⬜ Not executed: global `-g` installs, `-a opencode`, `npx github:pourmirzai/What-If --all`, and the Antigravity/Gemini CLI, Windsurf, Qwen Code, Zed, and Codex sections below. They either write to your home directory or need a tool that is not installed here. Each follows that tool's documented interface — review before use.

---

<details open>
<summary><strong>Universal Agent Skills (Cursor, OpenCode, Amp, Roo Code)</strong></summary>

Works with any harness supporting the standard Agent Skills specification.

### Install
```bash
# For current workspace:
npx skills add pourmirzai/What-If

# Or globally for all projects:
npx skills add pourmirzai/What-If -g

# Or target a specific harness:
npx skills add pourmirzai/What-If -a cursor -y
npx skills add pourmirzai/What-If -a opencode -y
```

### Verify
```bash
npx skills list
npx skills ls -g
```

### Update
```bash
npx skills update what-if
npx skills update -g
```

### Uninstall
```bash
npx skills remove what-if
```

</details>

---

<details>
<summary><strong>1-Click Installer (any harness)</strong></summary>

Interactive menu that writes `SKILL.md` to the target you choose (Google Antigravity / Gemini CLI, Claude Code, Cursor, Windsurf, or the current project).

### Install
```bash
npx github:pourmirzai/What-If
```

Non-interactive equivalents:
```bash
# Everything, globally:
npx github:pourmirzai/What-If --all

# A single target, current project only:
npx github:pourmirzai/What-If --claude --local
```

Supported flags: `--all`, `--antigravity`, `--claude`, `--cursor`, `--windsurf`, `--codex`, `--local` (omit `--local` for a global install).

### Uninstall
Delete the `SKILL.md` file the installer reported writing, e.g. `rm -rf ~/.claude/skills/what-if`.

</details>

---

<details>
<summary><strong>Google Antigravity & Gemini CLI</strong></summary>

### Install

**Global (all workspaces):**
```bash
mkdir -p ~/.gemini/config/skills/what-if
curl -sL https://raw.githubusercontent.com/pourmirzai/What-If/main/skills/what-if/SKILL.md -o ~/.gemini/config/skills/what-if/SKILL.md
```

**Project Scope:**
```bash
mkdir -p .agent/skills/what-if
curl -sL https://raw.githubusercontent.com/pourmirzai/What-If/main/skills/what-if/SKILL.md -o .agent/skills/what-if/SKILL.md
```

### Verify
In Antigravity chat, type:
```text
What-if
```
The agent should begin reconnaissance on your project and generate `WHAT_IF.md`.

### Update
Re-run the `curl` command above to fetch the latest `SKILL.md`.

### Uninstall
```bash
rm -rf ~/.gemini/config/skills/what-if
```

</details>

---

<details>
<summary><strong>Claude Code</strong></summary>

### Install

**Recommended — via the universal installer (verified):**
```bash
npx skills add pourmirzai/What-If -a claude-code -y
```
This installs the skill into the current project's `.claude/skills/what-if`. (Without `-a`, the installer also detects Claude Code automatically and symlinks that same location from `.agents/skills/what-if`.)

**Or copy the skill directly (single file):**
```bash
mkdir -p ~/.claude/skills/what-if
curl -sL https://raw.githubusercontent.com/pourmirzai/What-If/main/skills/what-if/SKILL.md -o ~/.claude/skills/what-if/SKILL.md
```

> ⚠️ **Not available:** `claude plugin marketplace add pourmirzai/What-If` fails, because this repository has no `.claude-plugin/marketplace.json`. Use one of the two methods above instead.

### Verify
Start a new Claude Code session and run:
```text
/what-if
```

### Update
Re-run the `curl` command above, or:
```bash
npx skills update what-if
```

### Uninstall
```bash
npx skills remove what-if
# or, if you copied the file by hand:
rm -rf ~/.claude/skills/what-if
```

</details>

---

<details>
<summary><strong>Windsurf (Cascade)</strong></summary>

### Install
Add What-if as a global rule in Windsurf memories, or to `.windsurfrules` at your workspace root:

```bash
mkdir -p ~/.codeium/windsurf/memories
curl -sL https://raw.githubusercontent.com/pourmirzai/What-If/main/skills/what-if/SKILL.md >> ~/.codeium/windsurf/memories/global_rules.md
```

### Verify
Ask Cascade:
```text
What-if
```

</details>

---

<details>
<summary><strong>Qwen Code</strong></summary>

### Install
```bash
qwen extensions install pourmirzai/What-If
```

### Verify
```bash
qwen extensions list
```

### Update
```bash
qwen extensions update what-if
```

### Uninstall
```bash
qwen extensions uninstall what-if
```

</details>

---

<details>
<summary><strong>Zed</strong></summary>

### Install
In the Agent Panel, open the Skills manager and choose **Create skill from URL**, then paste:
```text
https://github.com/pourmirzai/What-If/blob/main/skills/what-if/SKILL.md
```

Or drop into your skills directory:
```bash
mkdir -p ~/.agents/skills/what-if
curl -sL https://raw.githubusercontent.com/pourmirzai/What-If/main/skills/what-if/SKILL.md -o ~/.agents/skills/what-if/SKILL.md
```

</details>

---

<details>
<summary><strong>OpenAI Codex / Universal AGENTS.md</strong></summary>

Add What-if to your project's `AGENTS.md`:
```bash
mkdir -p .agents/skills/what-if
curl -sL https://raw.githubusercontent.com/pourmirzai/What-If/main/skills/what-if/SKILL.md -o .agents/skills/what-if/SKILL.md
```

In Codex chat, trigger with `$what-if`.

</details>
