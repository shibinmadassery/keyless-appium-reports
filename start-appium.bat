@echo off
title Appium Server
echo Auto-connecting Oppo...

REM Use paired tls device to set fixed port 5555
adb -s adb-f64e330e-DH4V1R._adb-tls-connect._tcp tcpip 5555
adb connect 192.168.0.140:5555

adb devices
echo.
echo Starting Appium on localhost:4723...
npx appium
pause