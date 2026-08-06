from ml_service import predict_dns

sample = {
    "device_type": "Android",
    "network_type": "Home WiFi",
    "country_code": "IN",
    "domain_length": 18,
    "subdomain_count": 1,
    "digit_ratio": 0.12,
    "hyphen_count": 1,
    "suspicious_tld": 0,
    "query_type": "A",
    "protocol": "UDP",
    "response_code": "NOERROR",
    "response_time_ms": 42,
    "answer_count": 2,
    "ttl_seconds": 3600,
    "query_frequency_5min": 8,
    "unique_domains_1hr": 15,
    "domain_age_days": 1200,
    "entropy_score": 3.8,
    "is_dga_like": 0,
    "uses_punycode": 0,
    "known_blocklist_match": 0,
    "threat_score": 12
}

result = predict_dns(sample)

print(result)