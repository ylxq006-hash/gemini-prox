# Gemini-Proxy

A professional proxy wrapper for @google/gemini-cli. It intercepts API calls to Google's Generative AI endpoint and redirects them to a custom proxy backend.

## Features
- **Seamless Integration**: Wraps the original Gemini CLI transparently.
- **Custom Endpoints**: Easily redirect calls to your own proxy (default: http://127.0.0.1:8317).
- **Zero Config**: Works out of the box, with optional environment variable overrides.

## Structure
- `bin/`: Executable wrapper (`gemini-proxy`).
- `src/`: Core interception logic.
- `scripts/`: Helper scripts (e.g., installation).
- `logs/`: Directory for runtime logs.

## Installation
To make `gemini-proxy` available globally:
```bash
./scripts/install.sh
```

## Usage
Run the proxy just like you would run the original CLI:
```bash
gemini-proxy --help
```

### Environment Variables
- `GEMINI_PROXY_URL`: Override the target proxy address (e.g., `export GEMINI_PROXY_URL=http://localhost:8317`).
