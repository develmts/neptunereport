#!/bin/sh
set -e

APP_DIR="/usr/src/app"
IMAGE_COPY_DIR="/image-app"

echo "--------------------------------------------------"
echo "  Bootstrap: copy app from image to volume (if empty)"
echo "--------------------------------------------------"

# If volume is empty, copy app from image snapshot
if [ -z "$(ls -A "$APP_DIR" 2>/dev/null)" ]; then
  echo "[BOOT] Empty app directory → copying from image template..."
  mkdir -p "$APP_DIR"
  cp -R "$IMAGE_COPY_DIR"/. "$APP_DIR"/
else
  echo "[BOOT] App directory already populated → skipping copy."
fi

cd "$APP_DIR"

if [ ! -f "./start.sh" ]; then
  echo "[ERROR] start.sh not found in $APP_DIR"
  exit 1
fi

chmod +x ./start.sh

echo "[BOOT] Handing over to start.sh..."
exec sh ./start.sh
