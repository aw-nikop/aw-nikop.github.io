@echo off
REM Ensure Node.js and npm are installed
where node >nul 2>nul || (
    echo Node.js is not installed. Please install Node.js and npm.
    exit /b 1
)
where npm >nul 2>nul || (
    echo npm is not installed. Please install npm.
    exit /b 1
)

REM Install dependencies
echo Installing dependencies...
CALL npm install
if errorlevel 1 (
    echo npm install failed.
    exit /b 1
)

REM Run tests
echo Running tests...
CALL npm run test
if errorlevel 1 (
    echo Tests failed.
    exit /b 1
)

REM Build the project
echo Building the project...
CALL npm run build
if errorlevel 1 (
    echo Build failed.
    exit /b 1
)

REM Push changes to git
echo Pushing changes to git...
CALL git add .
CALL git commit -m "Automated publish"
CALL git push
if errorlevel 1 (
    echo Git push failed.
    exit /b 1
)

REM Publish
echo Publishing...
CALL npm run publish
if errorlevel 1 (
    echo Publish failed.
    exit /b 1
)

echo Publish completed successfully.
