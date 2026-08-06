def get_recommendation(prediction):

    if prediction == "Benign":
        return [
            "Allow access to the website."
        ]

    elif prediction == "Suspicious":
        return [
            "Review the website before allowing access.",
            "Monitor future DNS requests."
        ]

    elif prediction == "Policy_Block":
        return [
            "Block access because the website violates browsing policy."
        ]

    elif prediction == "Malicious":
        return [
            "Immediately block access.",
            "Alert the administrator or parent.",
            "Recommend a malware scan if the user attempted repeated access."
        ]

    return ["No recommendation available."]