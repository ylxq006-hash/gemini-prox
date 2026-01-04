# Gemini-Proxy 代理工具

@google/gemini-cli 的专业代理包装器。它通过拦截 Google Generative AI 的 API 调用，将其透明地转发到您自定义的代理后端。

## 核心特性
- **无缝集成**: 完美包装原生的 Gemini CLI，使用体验保持一致。
- **自定义后端**: 轻松将请求重定向到您的私有代理（默认地址: http://192.168.2.138:8317）。
- **开箱即用**: 无需复杂配置，支持通过环境变量进行覆盖。

## 目录结构
- `bin/`: 存放可执行脚本 (`gemini-proxy`)。
- `src/`: 存放核心拦截逻辑。
- `scripts/`: 存放安装等辅助脚本。
- `logs/`: 存放运行日志。

## 安装方法
要将 `gemini-proxy` 安装到系统全局路径：
```bash
./scripts/install.sh
```

## 使用说明
您可以像使用原始 CLI 一样运行它：
```bash
gemini-proxy --help
```

### 环境变量配置
- `GEMINI_PROXY_URL`: 覆盖目标代理地址 (例如: `export GEMINI_PROXY_URL=http://localhost:8317`)。
