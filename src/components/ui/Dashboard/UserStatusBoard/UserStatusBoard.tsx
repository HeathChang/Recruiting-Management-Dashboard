import { useState, useEffect } from "react";
import { Button, CircularProgress } from "@mui/material";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { StatusEnum } from "../../../../types/status.type";
import { UserType } from "../../../../types/user.type";
import { UserCardContainer } from "../UserCardContainer/UserCardContainer";
import { UserCard } from "../UserCard/userCard";
import { useUserListHook } from "../../../../hooks/useUserListHook";
import { useDragAndDrop } from "../../../../hooks/useDragAndDrop";
import { useTheme } from "../../../../contexts/ThemeContext";

interface UserStatusBoardProps {
    searchText: string;
    searchCategory: string;
    data: UserType[];
}

export const UserStatusBoard = ({
    searchText,
    searchCategory,
    data
}: UserStatusBoardProps) => {
    const { isDarkMode } = useTheme();
    const [userData, setUserData] = useState<UserType[]>([]);

    useEffect(() => {
        if (data && data.length > 0) {
            setUserData(data);
        }
    }, [data]);

    const {
        activeId,
        sensors,
        handleDragStart,
        handleDragEnd,
    } = useDragAndDrop(setUserData);

    const { applicationUsers, taUsers, interviewFirstUsers, codingTestUsers, interviewSecondUsers, confirmationUsers } = useUserListHook(userData, (user: UserType) => {
        if (!searchText) return true;
        const searchLower = searchText.toLowerCase();

        switch (searchCategory) {
            case '이름':
                return user.userName.toLowerCase().includes(searchLower);
            case '이메일':
                return user.userEmail.toLowerCase().includes(searchLower);
            case '전화번호':
                return user.userPhone.toLowerCase().includes(searchLower);
            default:
                return true;
        }
    });

    const handleAddUser = (newUser: UserType) => {
        setUserData(prev => [...prev, newUser]);
    };

    const handleDeleteUser = (userId: string) => {
        setUserData(prev => prev.filter(user => user.userId !== userId));
    };

    return (
        <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className="grid grid-cols-3 web:grid-cols-6 mt-[16px] gap-[8px]">
                <div className={`border-[1px] rounded-[4px] px-[4px] transition-colors ${isDarkMode
                    ? 'border-gray-600 bg-gray-800'
                    : 'border-gray-300 bg-gray-200'
                    }`}>
                    <UserCardContainer type={StatusEnum.APPLICATION} userList={applicationUsers} onAddUser={handleAddUser} onDeleteUser={handleDeleteUser} />
                </div>
                <div className={`border-[1px] rounded-[4px] px-[4px] transition-colors ${isDarkMode
                    ? 'border-gray-600 bg-gray-800'
                    : 'border-gray-300 bg-gray-200'
                    }`}>
                    <UserCardContainer type={StatusEnum.TA} userList={taUsers} onAddUser={handleAddUser} onDeleteUser={handleDeleteUser} />
                </div>
                <div className={`border-[1px] rounded-[4px] px-[4px] transition-colors ${isDarkMode
                    ? 'border-gray-600 bg-gray-800'
                    : 'border-gray-300 bg-gray-200'
                    }`}>
                    <UserCardContainer type={StatusEnum.INTERVIEW_FIRST} userList={interviewFirstUsers} onAddUser={handleAddUser} onDeleteUser={handleDeleteUser} />
                </div>
                <div className={`border-[1px] rounded-[4px] px-[4px] transition-colors ${isDarkMode
                    ? 'border-gray-600 bg-gray-800'
                    : 'border-gray-300 bg-gray-200'
                    }`}>
                    <UserCardContainer type={StatusEnum.CODING_TEST} userList={codingTestUsers} onAddUser={handleAddUser} onDeleteUser={handleDeleteUser} />
                </div>
                <div className={`border-[1px] rounded-[4px] px-[4px] transition-colors ${isDarkMode
                    ? 'border-gray-600 bg-gray-800'
                    : 'border-gray-300 bg-gray-200'
                    }`}>
                    <UserCardContainer type={StatusEnum.INTERVIEW_SECOND} userList={interviewSecondUsers} onAddUser={handleAddUser} onDeleteUser={handleDeleteUser} />
                </div>
                <div className={`border-[1px] rounded-[4px] px-[4px] transition-colors ${isDarkMode
                    ? 'border-gray-600 bg-gray-800'
                    : 'border-gray-300 bg-gray-200'
                    }`}>
                    <UserCardContainer type={StatusEnum.CONFIRMATION} userList={confirmationUsers} onAddUser={handleAddUser} onDeleteUser={handleDeleteUser} />
                </div>
            </div>
            <DragOverlay>
                {activeId ? (
                    <div className={`gap-[8px] border-[1px] rounded-[8px] !p-[2px] shadow-lg transition-colors ${isDarkMode
                        ? 'border-gray-600 bg-gray-700'
                        : 'border-gray-300 bg-gray-200'
                        }`}>
                        <UserCard user={userData.find(user => user.userId === activeId)!} />
                    </div>
                ) : null}
            </DragOverlay>
        </DndContext>
    );
};
