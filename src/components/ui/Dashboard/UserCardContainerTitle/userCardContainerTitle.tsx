import { IconPlus } from "@tabler/icons-react"
import { getStatusLabel, StatusEnum } from "../../../../types/status.type"
import { Tooltip } from "@mui/material"

interface UserCardContainerTitleProps {
    type: StatusEnum
    onAdd?: (type: StatusEnum) => void
}

export const UserCardContainerTitle = ({ type, onAdd }: UserCardContainerTitleProps) => {
    return (
        <div className='px-[8px] py-[12px] flex justify-between items-center '>
            <span className='font-semibold text-[14px] text-gray-800'>{getStatusLabel(type)}</span>
            <div className='flex items-center gap-[4px]'>
                <Tooltip title="신규 지원자 등록">
                    <IconPlus size={16} className='cursor-pointer' onClick={() => onAdd?.(type)} />
                </Tooltip>
            </div>
        </div>
    )
}