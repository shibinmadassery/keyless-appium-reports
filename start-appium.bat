@echo off
title Appium Server
echo Connecting Oppo wirelessly...
adb connect 192.168.0.140:5555
adb devices
echo.

echo Starting Lock Dashboard...
start "Lock Dashboard" cmd /k "cd /d "C:\Users\shibi\OneDrive - SIRA.Gov.AE\lock-dashboard\lock-dashboard" && npm start"

timeout /t 3 /nobreak > nul
start http://localhost:3030

echo.
echo Starting Appium on localhost:4723...
npx appium
pause