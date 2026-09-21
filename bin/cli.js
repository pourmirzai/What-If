#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const readline = require('readline');

const homeDir = os.homedir();
const cwd = process.cwd();
let skillSource = path.join(__dirname, '..', 'skills', 'what-if', 'SKILL.md');
if (!fs.existsSync(skillSource)) {
  skillSource = path.join(__dirname, '..', 'SKILL.md');
}

if (!fs.existsSync(skillSource)) {
  console.error("❌ Error: SKILL.md not found in package directory.");
  process.exit(1);
}

const skillContent = fs.readFileSync(skillSource, 'utf8');

const TARGETS = {
  antigravity: {
    name: 'Google Antigravity / Gemini CLI',
    globalPath: path.join(homeDir, '.gemini', 'config', 'skills', 'what-if', 'SKILL.md'),
    localPath: path.join(cwd, '.agent', 'skills', 'what-if', 'SKILL.md')
  },
  claude: {
    name: 'Claude Code',
    globalPath: path.join(homeDir, '.claude', 'skills', 'what-if', 'SKILL.md'),
    localPath: path.join(cwd, '.claude', 'skills', 'what-if', 'SKILL.md')
  },
  cursor: {
    name: 'Cursor',
    globalPath: path.join(homeDir, '.cursor', 'rules', 'what-if.mdc'),
    localPath: path.join(cwd, '.cursor', 'rules', 'what-if.mdc')
  },
  windsurf: {
    name: 'Windsurf (Cascade)',
    globalPath: path.join(homeDir, '.codeium', 'windsurf', 'memories', 'what-if.md'),
    localPath: path.join(cwd, '.windsurfrules')
  },
  codex: {
    name: 'OpenAI Codex / Universal AGENTS.md',
    globalPath: path.join(homeDir, '.codex', 'skills', 'what-if', 'SKILL.md'),
    localPath: path.join(cwd, 'AGENTS.md')
  }
};

function copyFile(dest, content) {
  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(dest, content, 'utf8');
  console.log(`  ✅ Installed to: ${dest}`);
}

function installTarget(targetKey, isGlobal = true) {
  const target = TARGETS[targetKey];
  if (!target) return;
  const dest = isGlobal ? target.globalPath : target.localPath;
  console.log(`\n📦 Installing for ${target.name} (${isGlobal ? 'Global' : 'Current Project'})...`);
  copyFile(dest, skillContent);
}

const args = process.argv.slice(2);
const isLocal = args.includes('--local');
const isGlobal = !isLocal;

let selectedTargets = [];
if (args.includes('--antigravity')) selectedTargets.push('antigravity');
if (args.includes('--claude')) selectedTargets.push('claude');
if (args.includes('--cursor')) selectedTargets.push('cursor');
if (args.includes('--windsurf')) selectedTargets.push('windsurf');
if (args.includes('--codex')) selectedTargets.push('codex');
if (args.includes('--all')) selectedTargets = Object.keys(TARGETS);

if (selectedTargets.length > 0) {
  console.log("\n💡 What-if Skill Installer");
  console.log("===========================");
  selectedTargets.forEach(t => installTarget(t, isGlobal));
  console.log("\n✨ Done! You can now run `What-if` in your agent sessions.\n");
  process.exit(0);
}

// Interactive menu if no arguments passed
console.log("\n💡 What-if Skill Installer");
console.log("===========================");
console.log("Select where to install the skill:\n");
console.log("  1) All supported agents (Global)");
console.log("  2) Google Antigravity / Gemini CLI");
console.log("  3) Claude Code");
console.log("  4) Cursor (.cursor/rules)");
console.log("  5) Windsurf (.windsurfrules)");
console.log("  6) Current Project (.agent/skills/what-if)");
console.log("  0) Exit\n");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter option [1-6]: ", (answer) => {
  rl.close();
  const choice = answer.trim();
  switch (choice) {
    case '1':
      Object.keys(TARGETS).forEach(t => installTarget(t, true));
      break;
    case '2':
      installTarget('antigravity', true);
      break;
    case '3':
      installTarget('claude', true);
      break;
    case '4':
      installTarget('cursor', isGlobal);
      break;
    case '5':
      installTarget('windsurf', isGlobal);
      break;
    case '6':
      installTarget('antigravity', false);
      break;
    default:
      console.log("Installation canceled.");
      process.exit(0);
  }
  console.log("\n✨ Done! You can now use `What-if` with your agent.\n");
});
