const originalFetch = global.fetch;

global.fetch = async (input, init) => {
    let url = input;
    const TARGET_PROXY = process.env.GEMINI_PROXY_URL || 'http://192.168.2.138:8317';
    
    if (typeof input === 'string' && input.includes('generativelanguage.googleapis.com')) {
        url = input.replace('https://generativelanguage.googleapis.com', TARGET_PROXY);
    } else if (input instanceof URL && input.hostname === 'generativelanguage.googleapis.com') {
        const proxyUrl = new URL(TARGET_PROXY);
        input.protocol = proxyUrl.protocol;
        input.hostname = proxyUrl.hostname;
        input.port = proxyUrl.port;
        url = input;
    }

    if (url !== input) {
        console.error('[Gemini-Proxy] Redirecting -> ' + url);
    }

    return originalFetch(url, init);
};

import('/root/.nvm/versions/node/v22.12.0/lib/node_modules/@google/gemini-cli/dist/index.js')
    .catch(err => {
        console.error('Error loading gemini-cli:', err);
        process.exit(1);
    });
