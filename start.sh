#!/bin/sh

set -e

echo "--------------------------------------------------"
echo "  Node.js Startup Script (volume-managed)"
echo "--------------------------------------------------"
echo "Working directory: $(pwd)"
echo "Node version: $(node -v)"
echo "NPM version:  $(npm -v)"
echo "--------------------------------------------------"

# 1) Ensure node_modules exists
if [ ! -d "node_modules" ]; then
  echo "[INIT] node_modules missing → installing dependencies..."
  npm install --no-fund --no-audit
fi

# 2) Reinstall if package.json / lockfile changed
if [ -f ".package_hash" ]; then
  OLD_HASH=$(cat .package_hash)
else
  OLD_HASH=""
fi

NEW_HASH=$(cat package.json package-lock.json 2>/dev/null | sha256sum | awk '{print $1}')

if [ "$OLD_HASH" != "$NEW_HASH" ]; then
  echo "[INIT] Detected change in dependency manifest → reinstalling..."
  npm install --no-fund --no-audit
  echo "$NEW_HASH" > .package_hash
else
  echo "[INIT] No change in dependency manifest → skipping reinstall."
fi

# 3) Optional build step
if npm run | grep -q "build"; then
  echo "[INIT] Build script detected → running npm run build"
  npm run build || {
    echo "[ERROR] Build failed. Exiting."
    exit 1
  }
else
  echo "[INIT] No build script found → skipping build."
fi

# 4) Start application
if npm run | grep -q "start"; then
  echo "[INIT] Launching: npm start"
  echo "--------------------------------------------------"
  npm start
elif npm run | grep -q "dev"; then
  echo "[INIT] No 'start' script found → using 'npm run dev'"
  echo "--------------------------------------------------"
  npm run dev
else
  echo "[ERROR] No start or dev script found in package.json"
  exit 1
fi
