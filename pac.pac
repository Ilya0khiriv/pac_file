function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.gosuslugi.ru")) {
        return "DIRECT";  // No proxy for *.gosuslugi.ru
    }

    // Return different proxies for debugging
    if (url.indexOf("test1") !== -1) {
        return "SOCKS5 192.168.38.232:9050";  // Test proxy 1
    }
    if (url.indexOf("test2") !== -1) {
        return "PROXY 192.168.38.232:8080";  // Test proxy 2
    }

    // Default proxy
    return "SOCKS5 192.168.38.232:9050";
}
