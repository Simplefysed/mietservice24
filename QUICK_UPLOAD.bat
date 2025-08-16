@echo off
echo ========================================
echo 🚀 Mietservice24 GitHub Upload Script
echo ========================================
echo.

echo Checking if Git is installed...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    echo Then run this script again.
    pause
    exit /b 1
)

echo ✅ Git is installed!
echo.

echo Initializing Git repository...
git init

echo Adding remote origin...
git remote add origin https://github.com/Simplefysed/mietservice24.git

echo Adding all files...
git add .

echo Creating initial commit...
git commit -m "🚀 Initial commit: Mietservice24 Next.js Application

✨ Features:
- Next.js 14 with App Router & TypeScript
- Interactive calendar booking system
- Service detail pages for equipment rental
- Responsive design with Tailwind CSS
- Complete error handling components

🎯 Services:
- LKW mit Kran und Kipper
- Hebebühnen  
- Grabenfräsen
- Häcksler

🛠️ Tech Stack:
- Next.js 14, TypeScript, Tailwind CSS, Lucide React"

echo Setting main branch...
git branch -M main

echo Pushing to GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo ✅ SUCCESS! Project uploaded to GitHub!
    echo ========================================
    echo.
    echo Your project is now available at:
    echo https://github.com/Simplefysed/mietservice24
    echo.
) else (
    echo.
    echo ========================================
    echo ❌ Upload failed! Please check:
    echo ========================================
    echo - Internet connection
    echo - GitHub credentials
    echo - Repository permissions
    echo.
)

pause
