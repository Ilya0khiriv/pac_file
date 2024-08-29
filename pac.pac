var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+proxy", {
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host) || /^permkrai\.ru$/.test(host) || /^vk\.ru$/.test(host) || /^vk\.com$/.test(host) || /^gosuslugi\.ru$/.test(host) || /^deepseek\.com$/.test(host) || /^urban-university\.ru$/.test(host) || /^yandex\.ru$/.test(host)) return "DIRECT";
        return "SOCKS 192.168.38.232:9050";
    }
});
