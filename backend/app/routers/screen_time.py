from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
)
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.screen_time import (
    ScreenTimeCreate,
    ScreenTimeResponse,
)
from app.services.screen_time_service import (
    create_screen_time,
    delete_screen_time,
    get_child_screen_time,
)

router = APIRouter(
    prefix="/screen-time",
    tags=["Screen Time"],
)


@router.post(
    "",
    response_model=ScreenTimeResponse,
    status_code=status.HTTP_201_CREATED,
)
def create(
    screen_time: ScreenTimeCreate,
    db: Session = Depends(get_db)
):
    result = create_screen_time(
        db,
        screen_time
    )

    if result is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Child not found"
        )

    if result == "duplicate":
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Screen time already exists for this child"
        )

    return result


@router.get(
    "/child/{child_id}",
    response_model=ScreenTimeResponse,
)
def get_child(
    child_id: int,
    db: Session = Depends(get_db)
):
    result = get_child_screen_time(
        db,
        child_id
    )

    if result is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Screen time not found"
        )

    return result


@router.delete("/{screen_time_id}")
def delete(
    screen_time_id: int,
    db: Session = Depends(get_db)
):
    result = delete_screen_time(
        db,
        screen_time_id
    )

    if result is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Screen time not found"
        )

    return {
        "message": "Screen time deleted successfully"
    }