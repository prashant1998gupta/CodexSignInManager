# Contributing to Codex Sign-In Manager

Thank you for your interest in contributing! 🎉 Here's how you can help.

## 🚀 Getting Started

1. **Fork** this repository.
2. **Clone** your fork:
   ```bash
   git clone https://github.com/<your-username>/CodexSignInManager.git
   cd CodexSignInManager
   ```
3. **Set up** your Firebase credentials:
   ```bash
   # Windows
   setup.bat
   
   # Mac/Linux
   chmod +x setup.sh && ./setup.sh
   ```
4. Open `firebase-env.js` and add your Firebase keys.
5. Open `index.html` in your browser to test locally.

## 📝 How to Contribute

### Reporting Bugs
- Open an [Issue](https://github.com/prashant1998gupta/CodexSignInManager/issues) with:
  - A clear title and description
  - Steps to reproduce the bug
  - Expected vs actual behavior
  - Browser name and version
  - Screenshots if applicable

### Suggesting Features
- Open an Issue with the `enhancement` label.
- Describe the feature and why it would be useful.

### Submitting Code Changes
1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes.
3. Test thoroughly in at least **Chrome** and **Firefox**.
4. Commit with a clear message:
   ```bash
   git commit -m "feat: add your feature description"
   ```
5. Push and open a Pull Request:
   ```bash
   git push origin feature/your-feature-name
   ```

## 🏗️ Project Architecture

This is intentionally a **zero-dependency, single-file** web app. Please keep it that way:

- **No npm packages** — all libraries are loaded via CDN.
- **No build tools** — no webpack, vite, or bundlers.
- **One HTML file** — all CSS and JS live inside `index.html`.
- **Firebase only** — the only external service is Firebase (Auth + Firestore).

## ✅ Commit Message Format

We follow a simple convention:

| Prefix | Usage |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation changes |
| `style:` | CSS/UI changes (no logic change) |
| `refactor:` | Code restructuring |
| `chore:` | Maintenance (gitignore, configs, etc.) |

Example: `feat: add dark/light theme toggle`

## 🤝 Code of Conduct

- Be respectful and constructive.
- Welcome newcomers.
- Focus on the problem, not the person.

---

Thank you for helping make Codex Sign-In Manager better! ⚡
