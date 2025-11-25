import { Divider } from "@mui/material"
import { UserCardContainerTitle } from "../UserCardContainerTitle/userCardContainerTitle"
import { UserType } from "../../../../types/user.type"
import { StatusEnum } from "../../../../types/status.type"
import { UserCard } from "../UserCard/userCard"


interface UserCardContainerProps {
    type: StatusEnum
    userList: UserType[]
}

export const UserCardContainer = ({ type, userList }: UserCardContainerProps) => {
    return (
        <>
            <UserCardContainerTitle type={type} />
            <Divider />
            <div className='flex flex-col gap-[8px] mt-[8px] relative h-[640px] overflow-y-auto scrollbar-tiny'>
                {userList.length === 0
                    ? (<div className='flex items-center justify-center text-center w-full h-full text-[12px] text-gray-500'>
                        데이터가 없습니다.
                    </div>)
                    : (
                        userList.map((user) => (
                            <div key={user.userId} className='gap-[8px] border-[1px] border-gray-300 rounded-[8px] !p-[2px] bg-white cursor-pointer'>
                                <UserCard user={user} />
                            </div>
                        ))
                    )}
            </div>
        </>
    )
}