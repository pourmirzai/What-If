# Installation Guide for What-if

Choose your coding assistant or agent harness below.

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
```bash
# Add marketplace repository:
claude plugin marketplace add pourmirzai/What-If

# Install plugin:
claude plugin install what-if@what-if
```

Or copy the skill directly:
```bash
mkdir -p ~/.claude/skills/what-if
curl -sL https://raw.githubusercontent.com/pourmirzai/What-If/main/skills/what-if/SKILL.md -o ~/.claude/skills/what-if/SKILL.md
```

### Verify
Start a new Claude Code session and run:
```text
/what-if
```

### Update
```bash
claude plugin marketplace update what-if
claude plugin upgrade --scope user what-if@what-if
```

### Uninstall
```bash
claude plugin uninstall --scope user what-if@what-if
claude plugin marketplace remove what-if
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
