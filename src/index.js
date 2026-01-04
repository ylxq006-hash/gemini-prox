import { readFileSync, appendFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 初始化日志
const now = new Date();
const dateStr = now.getFullYear() + '-' + (now.getMonth()+1) + '-' + now.getDate();
const timeStr = now.getHours() + '-' + now.getMinutes() + '-' + now.getSeconds();
const logPath = join(__dirname, '../logs/proxy_' + dateStr + '_' + timeStr + '.log');

function log(msg) {
    const line = `[${new Date().toLocaleString()}] ${msg}
`;
    // 移除了 console.error(msg)，现在控制台将保持干净
    try { appendFileSync(logPath, line); } catch (e) {}
}

// 加载配置
let config = {};
try {
    config = JSON.parse(readFileSync(join(__dirname, '../config/config.json'), 'utf8'));
} catch (e) {
    config = { proxyHost: '192.168.2.138', proxyPort: 8317 };
}

log('--- Gemini-Proxy Session Started ---');

const originalFetch = global.fetch;

global.fetch = async (input, init = {}) => {
    let urlStr = typeof input === 'string' ? input : input.toString();
    const oldUrl = urlStr;
    
    if (urlStr.includes('generativelanguage.googleapis.com')) {
        const newBase = `http://${config.proxyHost}:${config.proxyPort}`;
        urlStr = urlStr.replace(/https:\/\/generativelanguage\.googleapis\.com/, newBase);
        if (config.apiVersion) urlStr = urlStr.replace(/\/v1(beta)?\//, `/${config.apiVersion}/`);
    }

    if (config.apiKey && init.headers) {
        const headers = init.headers;
        if (headers instanceof Headers) {
            headers.set('x-goog-api-key', config.apiKey);
            headers.set('authorization', `Bearer ${config.apiKey}`);
        } else {
            headers['x-goog-api-key'] = config.apiKey;
            headers['authorization'] = `Bearer ${config.apiKey}`;
        }
    }

    if (config.overrideModel && urlStr.includes('models/')) {
        urlStr = urlStr.replace(/models\/[^?:]+/, `models/${config.targetModel}`);
    }

    if (urlStr !== oldUrl) {
        log(`Redirect: ${init.method || 'GET'} ${oldUrl} -> ${urlStr}`);
    }

    return originalFetch(urlStr, init);
};

const tryImport = async () => {
    const paths = ['@google/gemini-cli/dist/index.js', '/root/.nvm/versions/node/v22.12.0/lib/node_modules/@google/gemini-cli/dist/index.js'];
    for (const path of paths) {
        try { await import(path); return; } catch (e) {}
    }
    process.exit(1);
};
tryImport();
