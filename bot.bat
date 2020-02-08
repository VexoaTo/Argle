@echo off
title Argle
cls
node index.js
:main
cls
node index.js
echo Restarting index.js
goto main
