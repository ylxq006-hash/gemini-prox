#!/bin/bash

# 获取脚本所在目录的上一级，即项目根目录
SOURCE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_DIR=$(dirname "$SOURCE_DIR")

BIN_PATH="$PROJECT_DIR/bin/gemini-proxy"

echo "Detecting project at: $PROJECT_DIR"

if [ ! -f "$BIN_PATH" ]; then
    echo "Error: Could not find executable at $BIN_PATH"
    exit 1
fi

echo "Installing gemini-proxy to /usr/local/bin..."
sudo ln -sf "$BIN_PATH" /usr/local/bin/gemini-proxy

echo "Installation complete!"
