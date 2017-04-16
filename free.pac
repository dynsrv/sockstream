function FindProxyForURL(url, host) {
 
// If the hostname matches, send direct.
if (dnsDomainIs(host, ".id") ||
        shExpMatch(host, "(*.detik.com|detik.com)") ||
        shExpMatch(host, "(*.inafile.com|inafile.com)") ||
        shExpMatch(host, "(*.indowebster.com|indowebster.com)"))
        return "DIRECT";
 
// If the requested website is hosted within the internal network, send direct.
if (isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "172.16.0.0",  "255.240.0.0") ||
        isInNet(dnsResolve(host), "192.168.0.0",  "255.255.0.0") ||
        isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0"))
        return "DIRECT";
 
// If the IP address of the local machine is within a defined
 
// DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
return "PROXY 128.199.216.206:22; PROXY 128.199.216.206:3127";
 
}
