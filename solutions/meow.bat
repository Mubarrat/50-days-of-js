@echo off
setlocal

for /d %%i in (*) do (
    del /q "%%i\cdmrc.txt" 2>nul
)

endlocal
