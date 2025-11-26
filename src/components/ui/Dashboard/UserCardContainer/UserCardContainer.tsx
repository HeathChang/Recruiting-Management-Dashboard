import { Divider, Modal } from "@mui/material"
import { useState } from "react"
import { UserCardContainerTitle } from "../UserCardContainerTitle/userCardContainerTitle"
import { UserType } from "../../../../types/user.type"
import { StatusEnum } from "../../../../types/status.type"
import { UserCard } from "../UserCard/userCard"
import { useDroppable } from "@dnd-kit/core"
import { UserRegister } from "../UserRegister/UserRegister"


interface UserCardContainerProps {
    type: StatusEnum
    userList: UserType[]
    onAddUser?: (newUser: UserType) => void
    onDeleteUser?: (userId: string) => void
}


export const UserCardContainer = ({ type, userList, onAddUser, onDeleteUser }: UserCardContainerProps) => {
    const { setNodeRef, isOver } = useDroppable({ id: type });
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    const handleAddUser = (newUser: UserType) => {
        onAddUser?.(newUser);
    };

    const handleDeleteUser = (userId: string) => {
        onDeleteUser?.(userId);
    }

    return (
        <>
            <UserCardContainerTitle type={type} onAdd={handleOpenModal} />
            <Divider />
            <div
                ref={setNodeRef}
                className={`flex flex-col gap-[8px] mt-[8px] relative h-[640px] overflow-y-auto scrollbar-tiny cursor-pointer transition-colors ${isOver ? 'bg-blue-50 border-2 border-blue-400 border-dashed' : ''
                    }`}
            >
                {userList.length === 0
                    ? (<div className='flex items-center justify-center text-center w-full h-full text-[12px] text-gray-500'>
                        지원자 없음
                    </div>)
                    : (
                        userList.map((user) => (
                            <div key={user.userId} className='gap-[8px] border-[1px] border-gray-300 rounded-[8px] !p-[2px] bg-white cursor-pointer'>
                                <UserCard user={user} onDeleteUser={handleDeleteUser} />
                            </div>
                        ))
                    )}
            </div>

            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="add-user-modal"
            >
                <UserRegister
                    onClose={handleCloseModal}
                    currentStatus={type}
                    onAddUser={handleAddUser}
                />
            </Modal>
        </>
    )
}