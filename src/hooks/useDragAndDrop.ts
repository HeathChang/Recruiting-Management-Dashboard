import { useState } from "react";
import { DragEndEvent, DragStartEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { StatusEnum } from "../types/status.type";
import { UserType } from "../types/user.type";

export const useDragAndDrop = (setUserData: React.Dispatch<React.SetStateAction<UserType[]>>) => {
    const [activeId, setActiveId] = useState<string | null>(null);

    // 드래그 센서 설정
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        })
    );

    // 드래그 시작 핸들러
    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    // 드래그 종료 핸들러
    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        // over가 null이면 유효한 드롭 영역이 아님
        if (!over) {
            setActiveId(null);
            return;
        }

        const userId = active.id as string; // 드래그된 카드의 userId
        const newStatus = over.id as StatusEnum; // 드롭된 영역의 status

        setUserData(prevData =>
            prevData.map(user =>
                user.userId === userId
                    ? { ...user, currentStatus: newStatus }
                    : user
            )
        );

        setActiveId(null);
    };

    return {
        activeId,
        sensors,
        handleDragStart,
        handleDragEnd,
    };
};
