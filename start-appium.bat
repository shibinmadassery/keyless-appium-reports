@REM @echo off
@REM title Appium + All Servers
@REM echo Connecting Oppo wirelessly...
@REM adb connect 192.168.0.140:5555
@REM adb devices
@REM echo.

@REM echo Starting Lock Dashboard (3030)...
@REM start "Lock Dashboard" cmd /k "cd /d "C:\Users\shibi\OneDrive - SIRA.Gov.AE\lock-dashboard\lock-dashboard" && npm start"

@REM echo Starting Results API (3001)...
@REM start "Results API" cmd /k "cd /d "C:\Projects\smart-lock-dashboard\smart-lock-dashboard\results-api" && npm start"

@REM echo Starting Project Dashboard (5173)...
@REM start "Project Dashboard" cmd /k "cd /d "C:\Projects\smart-lock-dashboard\smart-lock-dashboard" && npm run dev"

@REM echo Waiting for servers to start...
@REM echo.
@REM echo Waiting for servers to initialize...
@REM timeout /t 5 /nobreak > nul

@REM echo Opening dashboards in browser...
@REM start http://localhost:3030
@REM start http://localhost:3001
@REM start http://localhost:5173

@REM echo.
@REM echo ============================================
@REM echo  Starting Appium on localhost:4723...
@REM echo ============================================
@REM echo.
@REM npx appium
@REM pause
@echo off
@echo off
title Appium Server
echo Connecting Oppo...

REM Try tls device first
adb -s adb-f64e330e-DH4V1R._adb-tls-connect._tcp tcpip 5555 2>nul

REM Connect on fixed port
adb connect 192.168.0.140:5555

adb devices
echo.

echo Starting Lock Dashboard (3030)...
start "Lock Dashboard" cmd /k "cd /d "C:\Users\shibi\OneDrive - SIRA.Gov.AE\lock-dashboard\lock-dashboard" && npm start"

echo Starting Results API (3001)...
start "Results API" cmd /k "cd /d "C:\Projects\smart-lock-dashboard\smart-lock-dashboard\results-api" && npm start"

echo Starting Project Dashboard (5173)...
start "Project Dashboard" cmd /k "cd /d "C:\Projects\smart-lock-dashboard\smart-lock-dashboard" && npm run dev"

timeout /t 4 /nobreak > nul

start http://localhost:3030
start http://localhost:3001
start http://localhost:5173

echo.
echo Starting Appium on localhost:4723...
npx appium
pause