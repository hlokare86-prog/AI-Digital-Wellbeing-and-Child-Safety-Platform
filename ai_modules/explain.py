def explain_prediction(data):

    reasons = []

    if data["total_screen_time_min"] > 300:
        reasons.append(
            f"High screen time ({data['total_screen_time_min']} minutes)."
        )

    if data["gaming_time_min"] > 180:
        reasons.append(
            f"Gaming activity is excessive ({data['gaming_time_min']} minutes)."
        )

    if data["social_media_time_min"] > 180:
        reasons.append(
            f"Heavy social media usage ({data['social_media_time_min']} minutes)."
        )

    if data["late_night_usage_min"] > 60:
        reasons.append(
            f"High late-night device usage ({data['late_night_usage_min']} minutes)."
        )

    if data["sleep_hours"] < 7:
        reasons.append(
            f"Sleep duration is low ({data['sleep_hours']} hours)."
        )

    if data["physical_activity_min"] < 30:
        reasons.append(
            f"Low physical activity ({data['physical_activity_min']} minutes)."
        )

    if data["cyberbullying_risk_score"] > 70:
        reasons.append(
            f"Cyberbullying risk score is high ({data['cyberbullying_risk_score']})."
        )

    if data["predator_risk_score"] > 70:
        reasons.append(
            f"Online predator risk score is high ({data['predator_risk_score']})."
        )

    if data["search_toxicity_score"] > 70:
        reasons.append(
            f"Search toxicity score is high ({data['search_toxicity_score']})."
        )

    if len(reasons) == 0:
        reasons.append(
            "No significant behavioural risks detected."
        )

    return reasons