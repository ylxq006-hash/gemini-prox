# Gemini-Proxy 配置指南

您可以通过修改 `config/config.json` 来自定义代理行为：

| 配置项 | 说明 | 示例 |
| :--- | :--- | :--- |
| `proxyHost` | 代理服务器 IP 或域名 | `"192.168.2.138"` |
| `proxyPort` | 代理服务器端口 | `8317` |
| `targetModel`| 强制使用的模型名称 | `"gemini-3-pro-preview"` |
| `overrideModel`| 是否强制覆盖原请求中的模型 | `true` |
| `apiKey` | 用于代理验证的 API Key | `"sk-123456"` |
| `apiVersion` | API 版本 | `"v1beta"` |

## 快速开始
1. 修改配置：`nano config/config.json`
2. 安装命令：`./scripts/install.sh`
3. 运行：`gemini-proxy`
