@echo off
title Appium Server
echo Reconnecting Oppo...
adb connect 192.168.0.140:5555
adb devices
echo.
echo Starting Appium on localhost:4723...
npx appium
pause