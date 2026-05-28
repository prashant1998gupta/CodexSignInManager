# Changelog

All notable changes to Codex Sign-In Manager will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [1.3.0] — 2026-05-28

### Added
- 📖 Comprehensive README with live demo link, hosting guide, and mobile instructions
- 📄 MIT License file
- 🔒 Firestore security rules file (`firestore.rules`)
- 🛠️ Quick setup scripts (`setup.bat` for Windows, `setup.sh` for Mac/Linux)
- 🤝 Contributing guidelines (`CONTRIBUTING.md`)
- 📋 This changelog (`CHANGELOG.md`)
- 🎨 Proper favicon and app icons (`icons/` directory)

### Fixed
- 🐛 Fixed corrupted `.gitignore` file (null bytes in `.firebase/` rule)

---

## [1.2.0] — 2026-05-27

### Added
- 📱 PWA support — installable on mobile home screens (`manifest.json`, `sw.js`)
- ⏳ Full-screen loading spinner while syncing data from Firestore
- 🔔 On-page error banners for all Firebase errors (no more needing DevTools)
- 📋 Click-to-copy email button on account cards

### Fixed
- 🐛 Login modal can no longer be dismissed by clicking outside or pressing Escape
- 🔄 Switched to `signInWithRedirect` for better mobile browser compatibility

---

## [1.1.0] — 2026-05-26

### Added
- ☁️ Firebase Firestore integration for cloud data persistence
- 🔐 Google Sign-In authentication
- 🌐 Firebase Hosting deployment support
- 📤 Offline fallback — saves to localStorage when cloud is unavailable
- 🔄 Real-time sync across devices via Firestore snapshots

---

## [1.0.0] — 2026-05-25

### Added
- 🎨 Dark glassmorphism UI with animated gradient background
- 🟢 Status glow cards (Green/Red/Amber)
- ⏱️ Live countdown timers with auto-recovery
- 📊 Stats dashboard (Total, Available, Exhausted, Resetting)
- 🔍 Search and filter by status
- ✏️ Full CRUD — add, edit, delete accounts
- 📋 Per-account usage log with timestamps
- 📤 Export / Import data as JSON
- 📅 Custom reset date entry from Codex UI
- 📱 Responsive design for desktop, tablet, and mobile
