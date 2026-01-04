#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_DIR=$(dirname "$DIR")

echo "Installing gemini-proxy to /usr/local/bin..."
sudo ln -sf "$PROJECT_DIR/bin/gemini-proxy" /usr/local/bin/gemini-proxy

echo "Installation complete! You can now run 'gemini-proxy' from anywhere."
