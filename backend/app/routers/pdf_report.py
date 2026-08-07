from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.services.pdf_report_service import generate_pdf_report

router = APIRouter(
    prefix="/report",
    tags=["PDF Report"]
)


@router.get("/pdf/{child_id}")
def download_pdf_report(
    child_id: int,
    db: Session = Depends(get_db)
):
    pdf = generate_pdf_report(
        db,
        child_id
    )

    return StreamingResponse(
        pdf,
        media_type="application/pdf",
        headers={
            "Content-Disposition":
            f'attachment; filename="mindshield_report_{child_id}.pdf"'
        }
    )