# Development Guide - tourjs

This guide covers development workflows, code quality standards, and release procedures for tourjs.

## Table of Contents

- [Setup](#setup)
- [Code Quality](#code-quality)
- [Git Workflow](#git-workflow)
- [Release Process](#release-process)
- [Scripts Reference](#scripts-reference)
- [Commit Conventions](#commit-conventions)

---

## Setup

### Initial Installation

```bash
# Install dependencies
npm install

# Setup git hooks (Husky)
npm run prepare
```

This will install all development tools and configure git hooks for automatic code quality checks.

### Development Tools Installed

- **ESLint** - Code linting and style enforcement
- **Prettier** - Code formatting
- **Husky** - Git hooks management
- **Lint-Staged** - Run linters on staged files
- **Standard-Version** - Semantic versioning and changelog generation

---

## Code Quality

### Linting

ESLint checks for code quality issues and enforces style rules.

```bash
# Check for linting errors
npm run lint

# Automatically fix linting errors
npm run lint:fix
```

**Configuration:** `.eslintrc.json`

### Formatting

Prettier automatically formats code to maintain consistent style.

```bash
# Format all files
npm run format

# Check formatting without making changes
npm run format:check
```

**Configuration:** `.prettierrc.json`

### Automatic Pre-Commit Checks

When you commit code, git hooks automatically:

1. **Run ESLint** on JavaScript files
2. **Run Prettier** on all code files
3. **Prevent commits** if there are linting errors

This happens automatically - no manual action needed!

---

## Git Workflow

### Commit Message Convention

tourjs uses **Conventional Commits** format for automatic changelog generation.

#### Commit Format

```
type(scope): short description

longer explanation (optional)

BREAKING CHANGE: description (if applicable)
```

#### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation updates
- **style**: Code style changes (formatting, semicolons, etc.)
- **refactor**: Code refactoring without changing functionality
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Build process, dependencies, or other maintenance
- **ci**: CI/CD configuration changes

#### Examples

```bash
# Feature commit
git commit -m "feat: add keyboard navigation support"

# Bug fix commit
git commit -m "fix: resolve memory leak in overlay rendering"

# Documentation commit
git commit -m "docs: update API reference for popup configuration"

# Breaking change
git commit -m "feat!: redesign popup positioning system

BREAKING CHANGE: popupOffset parameter now accepts object instead of number"
```

### Workflow Steps

1. **Create a feature branch**

   ```bash
   git checkout -b feature/my-feature
   ```

2. **Make changes**
   - Code will be automatically linted and formatted on commit
   - Fix any linting errors if prompted

3. **Commit changes**

   ```bash
   git commit -m "feat: add new feature"
   ```

4. **Push to remote**

   ```bash
   git push origin feature/my-feature
   ```

5. **Create Pull Request**
   - Follow the PR template in `.github/pull_request_template.md`

---

## Release Process

### Automatic Version & Changelog Updates

tourjs uses **Standard-Version** for semantic versioning and automatic changelog generation.

#### Release Commands

```bash
# Automatic patch release (e.g., 1.0.0 → 1.0.1)
npm run release:patch

# Automatic minor release (e.g., 1.0.0 → 1.1.0)
npm run release:minor

# Automatic major release (e.g., 1.0.0 → 2.0.0)
npm run release:major

# Release with custom version
npm run release -- --release-as 1.2.3
```

#### What Happens During Release

1. **Analyzes commits** since last release
2. **Determines version** based on commit types:
   - `fix:` → Patch (0.0.x)
   - `feat:` → Minor (0.x.0)
   - `BREAKING CHANGE:` → Major (x.0.0)
3. **Updates** `package.json` version
4. **Generates/Updates** `CHANGELOG.md` automatically
5. **Creates git tag** for the release
6. **Commits** changes automatically

#### Release Example

```bash
# Before release
# package.json version: 1.0.0
# CHANGELOG.md: Current entries

# Run release
npm run release:minor

# After release
# package.json version: 1.1.0
# CHANGELOG.md: Updated with new version and commits
# Git tag: v1.1.0 created
# Changes committed automatically
```

#### Publishing to npm

After running release command:

```bash
# Push the release commit and tag
git push origin main --follow-tags

# Publish to npm
npm publish
```

---

## Scripts Reference

### Available npm Scripts

| Script                  | Purpose                               |
| ----------------------- | ------------------------------------- |
| `npm run lint`          | Check for linting errors              |
| `npm run lint:fix`      | Automatically fix linting errors      |
| `npm run format`        | Format all code files                 |
| `npm run format:check`  | Check formatting without changes      |
| `npm run release`       | Release with semantic versioning      |
| `npm run release:patch` | Release patch version (1.0.0 → 1.0.1) |
| `npm run release:minor` | Release minor version (1.0.0 → 1.1.0) |
| `npm run release:major` | Release major version (1.0.0 → 2.0.0) |
| `npm run prepare`       | Install git hooks                     |
| `npm test`              | Run tests (not configured yet)        |

---

## Commit Conventions

### Why Conventional Commits?

- ✅ Automatically determine semantic versioning bumps
- ✅ Generate meaningful changelogs
- ✅ Write more communicative commit history
- ✅ Trigger automated workflows

### Commit Type Guidelines

#### `feat` - New Features

```bash
git commit -m "feat: add dark mode support"
git commit -m "feat(ui): add new popup animation effect"
```

**Generates:** Minor version bump (x.1.0)

#### `fix` - Bug Fixes

```bash
git commit -m "fix: resolve popup positioning issue on mobile"
git commit -m "fix(overlay): fix overlay opacity calculation"
```

**Generates:** Patch version bump (x.x.1)

#### `BREAKING CHANGE` - Breaking Changes

```bash
git commit -m "feat!: redesign API

BREAKING CHANGE: ztTour constructor now requires options object"
```

**Generates:** Major version bump (x.0.0)

#### `docs` - Documentation

```bash
git commit -m "docs: update README with new examples"
```

**Not in changelog** (documentation-only changes)

#### `style` - Code Style

```bash
git commit -m "style: fix indentation in jstour.js"
```

**Not in changelog** (style-only changes)

#### `refactor` - Refactoring

```bash
git commit -m "refactor: optimize overlay rendering performance"
```

**In changelog** (functionality maintained, code improved)

---

## Continuous Integration

### Git Hooks

Husky automatically runs code quality checks:

**Pre-commit hook:**

- Runs ESLint on staged files
- Runs Prettier on staged files
- Prevents commits with linting errors

**Pre-push hook:**

- Could run additional tests before pushing

---

## Troubleshooting

### Husky hook not running

```bash
# Reinstall Husky
npm run prepare

# Make sure hook is executable
chmod +x .husky/pre-commit
```

### ESLint errors won't fix

```bash
# Check your ESLint configuration
npm run lint

# Manually review the errors
# Then fix manually or use --fix flag
npm run lint:fix
```

### Prettier conflicts with ESLint

```bash
# This should be resolved in configuration, but if issues persist:
npm run format
npm run lint:fix
```

### Can't commit because of hooks

**Option 1:** Fix the errors

```bash
npm run lint:fix
npm run format
```

**Option 2:** Bypass hooks (not recommended)

```bash
git commit --no-verify
```

---

## Best Practices

1. **Always run format before committing**

   ```bash
   npm run format
   npm run lint:fix
   ```

2. **Use meaningful commit messages**
   - Good: `feat: add keyboard navigation for tour steps`
   - Bad: `fix stuff`, `update code`

3. **Include breaking change info**

   ```bash
   git commit -m "feat!: change constructor signature

   BREAKING CHANGE: ztTour now requires an options object"
   ```

4. **Review changes before committing**

   ```bash
   git diff
   git add .
   git commit -m "..."
   ```

5. **Keep commits atomic**
   - One feature per commit
   - One bug fix per commit
   - Makes history cleaner

---

## Resources

- [ESLint Documentation](https://eslint.org/docs/rules/)
- [Prettier Documentation](https://prettier.io/docs/en/index.html)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [Standard-Version Documentation](https://github.com/conventional-changelog/standard-version)
- [Husky Documentation](https://typicode.github.io/husky/)

---

## Quick Start Example

```bash
# 1. Install dependencies
npm install

# 2. Create feature branch
git checkout -b feature/new-animation

# 3. Make changes
# - Edit jstour.js

# 4. Check code quality (optional, happens on commit anyway)
npm run lint:fix
npm run format

# 5. Commit with conventional message
git commit -m "feat: add fade-in animation for popups"

# 6. Push changes
git push origin feature/new-animation

# 7. Create Pull Request on GitHub

# 8. After merge, create release (on main branch)
npm run release:minor

# 9. Push release
git push origin main --follow-tags

# 10. Publish to npm
npm publish
```

---

For more information, see the main [README.md](./README.md) and [CONTRIBUTING.md](./CONTRIBUTING.md).
