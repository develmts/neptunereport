FROM node:22-alpine

# Optional: git, curl, etc. (remove if not needed)
RUN apk add --no-cache git

# This directory holds a snapshot of the app inside the image
WORKDIR /image-app

# Copy everything into the image snapshot
COPY . /image-app

# Install bootstrap script into PATH
COPY start-bootstrap.sh /usr/local/bin/start-bootstrap.sh
RUN chmod +x /usr/local/bin/start-bootstrap.sh /image-app/start.sh

# Entrypoint always goes through the bootstrap
ENTRYPOINT ["/usr/local/bin/start-bootstrap.sh"]
