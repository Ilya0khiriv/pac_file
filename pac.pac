function FindProxyForURL(url, host) {
    // Exclude *.gosuslugi.ru from using the SOCKS proxy
    if (shExpMatch(host, "*.gosuslugi.ru")) {
        return "DIRECT";
    }

    // Use the SOCKS proxy for all other domains
    return "SOCKS5 192.168.38.232:9050";
}
