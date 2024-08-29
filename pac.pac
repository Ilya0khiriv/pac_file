function FindProxyForURL(url, host) {
    // List of domains to exclude from the SOCKS proxy
    var excludedDomains = [
        "vk.ru",
        "gosuslugi.ru"

    ];

    // Check if the host is in the excluded domains list
    for (var i = 0; i < excludedDomains.length; i++) {
        if (shExpMatch(host, "*." + excludedDomains[i]) || shExpMatch(host, excludedDomains[i])) {
            return "DIRECT";
        }
    }

    // Use the SOCKS proxy for all other domains
    return "SOCKS5 192.168.38.232:9050";
}
