<div align="center">

# ⚡ Codex Sign-In Manager
**A Beautiful Dashboard to Track & Manage Multiple OpenAI Codex Free Accounts.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[![OpenAI](https://img.shields.io/badge/OpenAI_Codex-412991?style=for-the-badge&logo=openai&logoColor=white)]()
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/logic_builder)

---

</div>

## 🚀 Overview

Codex Sign-In Manager is a **single-file web dashboard** that helps you track and manage multiple OpenAI Codex free tier accounts. Free accounts have usage limits that reset weekly — when you have 10-20 accounts, it's impossible to remember which ones are available. This tool solves that problem with a beautiful, real-time dashboard.

**No server. No dependencies. No setup.** Just open `index.html` in your browser and start managing.

## 💡 Why Do You Need This? (Use Cases)

Managing multiple Codex free accounts manually is painful. Here's why this tool exists:

- **Forgot Which Account Has Limits?** — Instantly see which accounts are available (green) and which are exhausted (red).
- **Track Reset Timers** — Live countdown timers show exactly when each account's limit resets.
- **Auto-Recovery** — Accounts automatically flip back to "Available" when the reset period expires.
- **Enter Real Reset Dates** — Copy the exact reset date from the Codex UI so timers are accurate, even if you've been using the account for days.
- **Never Waste Time** — Stop logging into account after account only to find they're all exhausted.

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Dark Glassmorphism UI** | Premium dark theme with animated gradient background and glowing cards |
| 🟢 **Status Glow Cards** | Green = Available, Red = Exhausted, Amber Pulse = Resets within 24 hours |
| ⏱️ **Live Countdown Timer** | Real-time countdown showing remaining time until limit resets (updates every second) |
| 📊 **Progress Bar + Percentage** | Visual progress bar showing how much of the reset period has elapsed |
| 🔄 **Auto-Recovery** | Accounts automatically flip to "Available" when the timer expires |
| 📅 **Custom Reset Date** | Enter the exact reset date from the Codex UI for accurate tracking |
| 📈 **Stats Dashboard** | Top bar shows Total, Available, Exhausted, and Resetting Soon counts |
| 🔍 **Search & Filter** | Search by email/label/notes, filter by status chips |
| 📋 **Usage Log** | Per-account history of all status changes with timestamps |
| ✏️ **Full CRUD** | Add, edit, delete accounts with duplicate email detection |
| 📤 **Export / Import** | Backup all data as JSON, import from JSON with duplicate skip |
| 📱 **Responsive Design** | Works on desktop, tablet, and mobile screens |
| 💾 **Local Storage** | All data persisted in browser — survives page refreshes, no server needed |

## 🖥️ How It Works

```
┌─────────────────────────────────────────────────────┐
│  📊 Total: 15  │  ✅ Available: 8  │  🚫 Exhausted: 5  │  ⏳ Resetting: 2  │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  │ 🟢 Account 1 │  │ 🟢 Account 2 │  │ 🔴 Account 3 │
│  │  Available   │  │  Available   │  │  Exhausted   │
│  │              │  │              │  │ ⏱️ 2d 5h 30m │
│  │              │  │              │  │ Weekly·24%   │
│  └──────────────┘  └──────────────┘  └──────────────┘
│                                                     │
│  ┌──────────────┐  ┌──────────────┐                 │
│  │ 🟡 Account 4 │  │ 🟢 Account 5 │                 │
│  │ Resetting    │  │  Available   │                 │
│  │ ⏱️ 0d 8h 15m│  │              │                 │
│  │ Weekly·89%   │  │              │                 │
│  └──────────────┘  └──────────────┘                 │
└─────────────────────────────────────────────────────┘
```

## 🛠️ Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- That's it! No server, no Node.js, no Python required.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/prashant1998gupta/CodexSignInManager.git
   ```

2. **Open the dashboard:**
   ```bash
   cd CodexSignInManager
   ```
   Double-click `index.html` or open it in your browser.

3. **Start adding accounts** — Click the "＋ Add Account" button and enter your Codex email.

### Usage

1. **Add Accounts** → Click "＋ Add Account", enter email and optional label/nickname.
2. **When a Limit is Hit** → Click "🚫 Mark Exhausted" on that card. Enter the reset date from the Codex UI.
3. **Find Available Accounts** → Green-glowing cards at the top are ready to use.
4. **Watch Countdowns** → Amber-pulsing cards show live countdown until reset.
5. **Auto-Recovery** → Cards automatically turn green when the reset timer expires.
6. **Backup Data** → Click "📤 Export" to save a JSON backup file.
7. **Restore Data** → Click "📥 Import" to restore from a backup.

## 📦 Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure and semantic layout |
| **CSS3** | Glassmorphism theme, animations, responsive grid |
| **JavaScript (ES6+)** | Data management, timers, localStorage, CRUD |
| **Google Fonts (Inter)** | Modern typography |
| **localStorage** | Client-side data persistence |

## 📁 Project Structure

```
CodexSignInManager/
├── index.html      # Complete dashboard (HTML + CSS + JS in one file)
└── README.md       # This file
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## ☕ Support

If you find this tool useful, consider supporting the project:

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/logic_builder)

---

<div align="center">

**Made with ❤️ by [Prashant Gupta](https://github.com/prashant1998gupta)**

</div>
