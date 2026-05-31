REM Tools used: Appium, Nightwatch, ADB
REM Languages used: JavaScript
REM Devices used: Android device with serial number 3576a3d8

@echo off
cd /d "C:\Users\shibi\OneDrive - SIRA.Gov.AE\keyless-appium\"

:: Check if the specific USB device is connected
adb devices | findstr "3576a3d8" > nul
if %errorlevel% neq 0 (
    echo Device is not connected. Exiting...
    exit /b 1
)

echo Device detected. Starting Appium...
start /B npx appium --allow-cors

timeout /t 5 /nobreak >nul

:: Re-check device is still connected before running tests
adb devices | findstr "3576a3d8" > nul
if %errorlevel% neq 0 (
    echo Device disconnected before tests could run. Exiting...
    exit /b 1
)

echo Running Nightwatch tests...
npx nightwatch --test-workers false