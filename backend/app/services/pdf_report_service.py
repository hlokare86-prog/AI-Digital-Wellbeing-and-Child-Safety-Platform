from io import BytesIO

from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Paragraph, SimpleDocTemplate

from app.services.report_service import get_daily_report


def generate_pdf_report(
    db,
    child_id: int
):
    report = get_daily_report(
        db,
        child_id
    )

    buffer = BytesIO()

    doc = SimpleDocTemplate(buffer)

    styles = getSampleStyleSheet()

    story = []

    story.append(
        Paragraph(
            "<b>MindShield AI Daily Report</b>",
            styles["Title"]
        )
    )

    story.append(
        Paragraph(
            f"Child ID : {report['child_id']}",
            styles["BodyText"]
        )
    )

    story.append(
        Paragraph(
            f"Total Requests : {report['total_requests']}",
            styles["BodyText"]
        )
    )

    story.append(
        Paragraph(
            f"Allowed Requests : {report['allowed_requests']}",
            styles["BodyText"]
        )
    )

    story.append(
        Paragraph(
            f"Blocked Requests : {report['blocked_requests']}",
            styles["BodyText"]
        )
    )

    story.append(
        Paragraph(
            f"Screen Time Used : {report['screen_time_used']} minutes",
            styles["BodyText"]
        )
    )

    story.append(
        Paragraph(
            f"Safety Score : {report['safety_score']}",
            styles["BodyText"]
        )
    )

    doc.build(story)

    buffer.seek(0)

    return buffer