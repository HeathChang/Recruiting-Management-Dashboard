import { Divider, Modal } from "@mui/material"
import { useState } from "react"
import { UserCardContainerTitle } from "../UserCardContainerTitle/userCardContainerTitle"
import { UserType } from "../../../../types/user.type"
import { StatusEnum } from "../../../../types/status.type"
import { UserCard } from "../UserCard/userCard"
import { useDroppable } from "@dnd-kit/core"
import { UserRegister } from "../UserRegister/UserRegister"
import { useTheme } from "../../../../contexts/ThemeContext"
import { EXTERNAL_URLS, RESUME_PATHS } from "../../../../constants/urls"
import { downloadFile, openFileInNewTab } from "../../../../utils/file/fileDownload"

interface UserCardContainerProps {
    type: StatusEnum
    userList: UserType[]
    onAddUser?: (newUser: UserType) => void
    onDeleteUser?: (userId: string) => void
}

export const UserCardContainer = ({ type, userList, onAddUser, onDeleteUser }: UserCardContainerProps) => {
    const { isDarkMode } = useTheme();
    const { setNodeRef, isOver } = useDroppable({ id: type });
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

    const handleCardClick = () => {
        window.open(EXTERNAL_URLS.CAREER_PAGE, '_blank');
    };

    const handleResumeView = () => {
        openFileInNewTab(RESUME_PATHS.SAMPLE);
    };

    const handleResumeDownload = () => {
        downloadFile(RESUME_PATHS.SAMPLE, 'sample_resume.pdf');
    };

    return (
        <>
            <UserCardContainerTitle type={type} onAdd={() => setRegisterModalOpen(true)} />
            <Divider />
            <div
                ref={setNodeRef}
                className={`flex flex-col gap-[8px] mt-[8px] relative h-[640px] overflow-y-auto scrollbar-tiny cursor-pointer transition-colors ${isOver
                    ? isDarkMode
                        ? 'bg-blue-900/30 border-2 border-blue-400 border-dashed'
                        : 'bg-blue-50 border-2 border-blue-400 border-dashed'
                    : ''
                    }`}
            >
                {userList.length === 0
                    ? (<div className={`flex items-center justify-center text-center w-full h-full text-[12px] ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                        지원자 없음
                    </div>)
                    : (
                        userList.map((user) => (
                            <div key={user.userId} className={`gap-[8px] border-[1px] rounded-[8px] !p-[2px] cursor-pointer transition-colors ${isDarkMode
                                ? 'border-gray-600 bg-gray-700 hover:bg-gray-650'
                                : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
                                }`}>
                                <UserCard
                                    user={user}
                                    onCardClick={handleCardClick}
                                    onViewResume={handleResumeView}
                                    onDownloadResume={handleResumeDownload}
                                    onDeleteUser={(userId) => onDeleteUser?.(userId)}
                                />
                            </div>
                        ))
                    )}
            </div>
            <Modal open={isRegisterModalOpen} onClose={() => setRegisterModalOpen(false)}>
                <div>
                    <UserRegister
                        onClose={() => setRegisterModalOpen(false)}
                        currentStatus={type}
                        onAddUser={(newUser: UserType) => onAddUser?.(newUser)}
                    />
                </div>
            </Modal>
        </>
    )
}