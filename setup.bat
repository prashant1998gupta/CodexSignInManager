@echo off
REM ============================================
REM  Codex Sign-In Manager — Quick Setup Script
REM  Run this after cloning the repository.
REM ============================================

echo.
echo  ⚡ Codex Sign-In Manager — Setup
echo  ================================
echo.

REM Check if firebase-env.js already exists
if exist "firebase-env.js" (
    echo  ✅ firebase-env.js already exists.
    echo     If you need to update your keys, edit it manually.
    echo.
    goto :done
)

REM Copy the example file
if exist "firebase-env.example.js" (
    copy "firebase-env.example.js" "firebase-env.js" >nul
    echo  ✅ Created firebase-env.js from template.
    echo.
    echo  ⚠️  NEXT STEP: Open firebase-env.js and replace the
    echo     placeholder values with your real Firebase credentials.
    echo.
    echo     You can find your keys at:
    echo     Firebase Console → Project Settings → General → Your apps (Web)
    echo.
) else (
    echo  ❌ firebase-env.example.js not found!
    echo     Make sure you are running this from the project root.
    echo.
    goto :done
)

:done
echo  📖 Full setup guide: https://github.com/prashant1998gupta/CodexSignInManager#readme
echo.
pause
