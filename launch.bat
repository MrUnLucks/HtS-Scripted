@echo off
setlocal enabledelayedexpansion

:: Launch first terminal
start "" cmd /c "pnpm run dev"

:: Wait for the first terminal to start
timeout /t 2 /nobreak >nul 2>&1

:: Launch second terminal
pushd "%~dp0\frontend"
start "" cmd /c "pnpm run dev"
popd