#!/bin/bash
# ============================================
#  Codex Sign-In Manager — Quick Setup Script
#  Run this after cloning the repository.
# ============================================

echo ""
echo " ⚡ Codex Sign-In Manager — Setup"
echo " ================================"
echo ""

# Check if firebase-env.js already exists
if [ -f "firebase-env.js" ]; then
    echo " ✅ firebase-env.js already exists."
    echo "    If you need to update your keys, edit it manually."
    echo ""
    exit 0
fi

# Copy the example file
if [ -f "firebase-env.example.js" ]; then
    cp firebase-env.example.js firebase-env.js
    echo " ✅ Created firebase-env.js from template."
    echo ""
    echo " ⚠️  NEXT STEP: Open firebase-env.js and replace the"
    echo "    placeholder values with your real Firebase credentials."
    echo ""
    echo "    You can find your keys at:"
    echo "    Firebase Console → Project Settings → General → Your apps (Web)"
    echo ""
else
    echo " ❌ firebase-env.example.js not found!"
    echo "    Make sure you are running this from the project root."
    echo ""
    exit 1
fi

echo " 📖 Full setup guide: https://github.com/prashant1998gupta/CodexSignInManager#readme"
echo ""
