@echo off
title Appium Server
echo Connecting Oppo wirelessly...
adb connect 192.168.0.140:5555
adb devices
echo.
echo Starting Appium on localhost:4723...
npx appium
pause