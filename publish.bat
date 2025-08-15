@echo off
REM Ensure Node.js and npm are installed
where node >nul 2>nul || (
    CALL powershell -c "irm https://community.chocolatey.org/install.ps1|iex"

    CALL choco install nodejs --version="22.18.0"
    if errorlevel 1 (
        echo Node.js installation failed.
        exit /b 1
    )
)
where npm >nul 2>nul || (
    echo npm is not installed. Please install npm.
    exit /b 1
)

where git >nul 2>nul || (
    CALL choco install git.install --version 2.50.1 -y
    if errorlevel 1 (
        echo Git installation failed.
            exit /b 1
    )

)

where gh >nul 2>nul || (
    CALL choco install gh --version 2.76.2 -y
    if errorlevel 1 (
        echo GitHub CLI installation failed.
        exit /b 1
    )
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
CALL git commit

call git push --set-upstream origin master

echo Publish completed successfully.
