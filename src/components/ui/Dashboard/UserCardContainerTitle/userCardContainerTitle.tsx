import { IconDotsVertical, IconPlus } from "@tabler/icons-react"
import { getStatusLabel, StatusEnum } from "../../../../types/status.type"

interface UserCardContainerTitleProps {
    type: StatusEnum
    onAdd?: (type: StatusEnum) => void
    // onMore?: (type: StatusEnum) => void
}

export const UserCardContainerTitle = ({ type, onAdd, onMore }: UserCardContainerTitleProps) => {
    return (
        <div className='px-[8px] py-[12px] flex justify-between items-center '>
            <span className='font-semibold text-[14px] text-gray-800'>{getStatusLabel(type)}</span>
            <div className='flex items-center gap-[4px]'>
                <IconPlus size={16} className='cursor-pointer' onClick={() => onAdd && onAdd?.(type)} />
                {/* <IconDotsVertical size={16} className='cursor-pointer' onClick={() => onMore && onMore?.(type)} /> */}
            </div>
        </div>
    )
}