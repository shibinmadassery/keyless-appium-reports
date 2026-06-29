@echo off
title Appium + All Servers
echo Connecting Oppo wirelessly...
adb connect 192.168.0.140:5555
adb devices
echo.

echo Starting Lock Dashboard (3030)...
start "Lock Dashboard" cmd /k "cd /d "C:\Users\shibi\OneDrive - SIRA.Gov.AE\lock-dashboard\lock-dashboard" && npm start"

echo Starting Results API (3001)...
start "Results API" cmd /k "cd /d "C:\Projects\smart-lock-dashboard\smart-lock-dashboard\results-api" && npm start"

echo Starting Project Dashboard (5173)...
start "Project Dashboard" cmd /k "cd /d "C:\Projects\smart-lock-dashboard\smart-lock-dashboard" && npm run dev"

echo Waiting for servers to start...
echo.
echo Waiting for servers to initialize...
timeout /t 5 /nobreak > nul

echo Opening dashboards in browser...
start http://localhost:3030
start http://localhost:3001
start http://localhost:5173

echo.
echo ============================================
echo  Starting Appium on localhost:4723...
echo ============================================
echo.
npx appium
pause