import { useState } from "react";
import { DragEndEvent, DragStartEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { StatusEnum } from "../types/status.type";
import { UserType } from "../types/user.type";

export const useDragAndDrop = (setUserData: React.Dispatch<React.SetStateAction<UserType[]>>) => {
    const [activeId, setActiveId] = useState<string | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        })
    );

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over) {
            setActiveId(null);
            return;
        }

        const userId = active.id as string;
        const newStatus = over.id as StatusEnum;

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
