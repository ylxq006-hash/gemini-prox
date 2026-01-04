# Gemini-Proxy

A professional proxy wrapper for @google/gemini-cli.

## Configuration
You can configure the proxy URL in `config/config.json`:
```json
{
  "proxyUrl": "http://192.168.2.138:8317"
}
```

You can also override this using the `GEMINI_PROXY_URL` environment variable.

## Installation
```bash
./scripts/install.sh
```

## Usage
```bash
gemini-proxy
```
