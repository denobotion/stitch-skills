# Stitch Agent Skills

A library of Agent Skills designed to work with the Stitch MCP server. Each skill follows the Agent Skills open standard, for compatibility with coding agents such as Antigravity, Gemini CLI, Claude Code, Cursor.

## Installation & Discovery

Install any skill from this repository using the `skills` CLI. This command will automatically detect your active coding agents and place the skill in the appropriate directory.

```bash
# List all available skills in this repository
npx skills add google-labs-code/stitch-skills --list

# Install a specific skill
npx skills add google-labs-code/stitch-skills --skill react:components --global
```

## Available Skills

### stitch-design
Unified entry point for Stitch design work. Handles prompt enhancement (UI/UX keywords, atmosphere), design system synthesis (.stitch/DESIGN.md), and high-fidelity screen generation/editing via Stitch MCP.

```bash
npx skills add google-labs-code/stitch-skills --skill stitch-design --global
```

### stitch-loop
Generates a complete multi-page website from a single prompt using Stitch, with automated file organization and validation.

```bash
npx skills add google-labs-code/stitch-skills --skill stitch-loop --global
```

### design-md
Analyzes Stitch projects and generates comprehensive DESIGN.md files documenting design systems in natural, semantic language optimized for Stitch screen generation.

```bash
npx skills add google-labs-code/stitch-skills --skill design-md --global
```

### enhance-prompt
Transforms vague UI ideas into polished, Stitch-optimized prompts. Enhances specificity, adds UI/UX keywords, injects design system context, and structures output for better generation results.

```bash
npx skills add google-labs-code/stitch-skills --skill enhance-prompt --global
```

### react-components
Converts Stitch screens to React component systems with automated validation and design token consistency.

```bash
# Note: use `react-components` (not `react:components`) if the colon causes shell issues
npx skills add google-labs-code/stitch-skills --skill react:components --global
```

### remotion
Generates walkthrough videos from Stitch projects using Remotion with smooth transitions, zooming, and text overlays to showcase app screens professionally.

```bash
npx skills add google-labs-code/stitch-skills --skill remotion --global
```

### shadcn-ui
Expert guidance for integrating and building applications with shadcn/ui components. Helps discover, install, customize, and optimize shadcn/ui components with best practices for React applications.

```bash
npx skills add google-labs-code/stitch-skills --skill shadcn-ui --global
```

## Repository Structure

Every directory within `skills/` or at the root level follows a standardized structure to ensure the AI agent has everything it needs to perform "few-shot" learning and automated quality checks.

```text
skills/[category]/
├── SKILL.md           — The "Mission Control" for the agent
├── scripts/           — Executable enforcers (Validation & Networking)
├── resources/         — The knowledge
```
