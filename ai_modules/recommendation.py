def get_recommendations(data):

    recommendations = []

    # Screen Time
    if data["total_screen_time_min"] > 300:
        recommendations.append(
            "Reduce total daily screen time to under 5 hours."
        )

    # Gaming
    if data["gaming_time_min"] > 180:
        recommendations.append(
            "Limit gaming sessions and take regular breaks."
        )

    # Social Media
    if data["social_media_time_min"] > 180:
        recommendations.append(
            "Reduce social media usage and enable app time limits."
        )

    # Sleep
    if data["sleep_hours"] < 7:
        recommendations.append(
            "Maintain at least 7-8 hours of sleep every night."
        )

    # Education
    if data["educational_time_min"] < 60:
        recommendations.append(
            "Increase educational app usage to at least 60 minutes."
        )

    # Physical Activity
    if data["physical_activity_min"] < 30:
        recommendations.append(
            "Spend at least 30 minutes in physical activity."
        )

    # Study Time
    if data["study_time_min"] < 60:
        recommendations.append(
            "Increase daily study time."
        )

    # Cyberbullying
    if data["cyberbullying_risk_score"] > 70:
        recommendations.append(
            "Review online interactions and report abusive behaviour."
        )

    # Predator Risk
    if data["predator_risk_score"] > 70:
        recommendations.append(
            "Enable parental monitoring and avoid unknown contacts."
        )

    # Toxic Search
    if data["search_toxicity_score"] > 70:
        recommendations.append(
            "Avoid harmful searches and use safe search filters."
        )

    if len(recommendations) == 0:
        recommendations.append(
            "Excellent digital wellbeing habits. Keep it up!"
        )

    return recommendations