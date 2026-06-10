@echo off
title Appium Server
echo Enabling wireless debugging...
adb -s adb-f64e330e-DH4V1R._adb-tls-connect._tcp shell settings put global adb_wifi_enabled 1
echo Auto-connecting Oppo...
adb -s adb-f64e330e-DH4V1R._adb-tls-connect._tcp tcpip 5555
adb connect 192.168.0.140:5555
adb devices
echo.
echo Starting Appium on localhost:4723...
npx appium
pause