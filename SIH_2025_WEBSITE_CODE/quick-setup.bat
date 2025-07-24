@echo off
echo ==========================================
echo   SIH 2025 Website - Quick Setup Script
echo ==========================================
echo.

echo Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo Building the frontend...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Failed to build the frontend
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   Setup Complete! 
echo ==========================================
echo.
echo The website is ready to run!
echo.
echo To start the development server:
echo   npm run dev
echo.
echo Then open: http://localhost:5000
echo.
pause