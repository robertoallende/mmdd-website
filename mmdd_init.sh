#!/bin/sh
set -e

BASE_URL="https://mmdd.dev"
TARGET_DIR="dev_log"

echo "MMDD: Initializing project..."

# Check if dev_log already exists
if [ -d "$TARGET_DIR" ]; then
  echo "ERROR: Directory '$TARGET_DIR' already exists." >&2
  echo "       MMDD may already be initialized in this project." >&2
  exit 1
fi

# Detect download tool
if command -v curl >/dev/null 2>&1; then
  DOWNLOADER="curl"
elif command -v wget >/dev/null 2>&1; then
  DOWNLOADER="wget"
else
  echo "ERROR: Neither 'curl' nor 'wget' found." >&2
  echo "       Please install one of them and try again." >&2
  exit 1
fi

echo "MMDD: Using $DOWNLOADER for downloads."

# Download helper
download() {
  url="$1"
  dest="$2"
  echo "MMDD: Downloading $url ..."
  if [ "$DOWNLOADER" = "curl" ]; then
    if ! curl -fsSL "$url" -o "$dest"; then
      echo "ERROR: Failed to download $url" >&2
      echo "       Check your internet connection and that the URL is reachable." >&2
      exit 1
    fi
  else
    if ! wget -q "$url" -O "$dest"; then
      echo "ERROR: Failed to download $url" >&2
      echo "       Check your internet connection and that the URL is reachable." >&2
      exit 1
    fi
  fi
}

# Create dev_log directory
echo "MMDD: Creating $TARGET_DIR/ directory..."
if ! mkdir "$TARGET_DIR"; then
  echo "ERROR: Failed to create '$TARGET_DIR' directory." >&2
  echo "       Check file permissions in the current directory." >&2
  exit 1
fi

# Download core files
download "$BASE_URL/00_mmdd.md" "$TARGET_DIR/00_mmdd.md"
download "$BASE_URL/00_kanban.md" "$TARGET_DIR/00_kanban.md"

echo "MMDD: Setup complete!"
echo "      Created $TARGET_DIR/00_mmdd.md"
echo "      Created $TARGET_DIR/00_kanban.md"
echo ""
echo "Next step: Tell your AI to read dev_log/00_mmdd.md and create a 00_main.md for your project."

# Self-delete
rm -- "$0" 2>/dev/null || true
