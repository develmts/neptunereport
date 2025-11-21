#!/bin/sh
set -e

APP_DIR="/usr/src/app"
IMAGE_COPY_DIR="/image-app"

echo "--------------------------------------------------"
echo "  Bootstrap: sync app from image to volume"
echo "--------------------------------------------------"
echo "APP_DIR: $APP_DIR"
echo "IMAGE_COPY_DIR: $IMAGE_COPY_DIR"
echo "--------------------------------------------------"

# Si no hi ha package.json al volum, assumim que NO s'ha desplegat la app
if [ ! -f "$APP_DIR/package.json" ]; then
  echo "[BOOT] No package.json in $APP_DIR → initial (or forced) copy from image"
  mkdir -p "$APP_DIR"
  # Esborrem contingut previ al volum per evitar barrejes rares
  rm -rf "$APP_DIR"/* "$APP_DIR"/.[!.]* "$APP_DIR"/..?* 2>/dev/null || true
  cp -R "$IMAGE_COPY_DIR"/. "$APP_DIR"/
else
  echo "[BOOT] package.json already present in $APP_DIR → skipping copy"
fi

cd "$APP_DIR"

if [ ! -f "./start.sh" ]; then
  echo "[ERROR] start.sh not found in $APP_DIR"
  ls -lah
  exit 1
fi

chmod +x ./start.sh

echo "[BOOT] Handing over to start.sh..."
exec sh ./start.sh
