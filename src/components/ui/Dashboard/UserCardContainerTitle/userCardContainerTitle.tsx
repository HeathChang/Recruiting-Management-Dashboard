import { IconPlus } from "@tabler/icons-react"
import { getStatusLabel, StatusEnum } from "../../../../types/status.type"
import { Tooltip } from "@mui/material"
import { useTheme } from "../../../../contexts/ThemeContext"

interface UserCardContainerTitleProps {
    type: StatusEnum
    onAdd?: (type: StatusEnum) => void
}

export const UserCardContainerTitle = ({ type, onAdd }: UserCardContainerTitleProps) => {
    const { isDarkMode } = useTheme();

    return (
        <div className='px-[8px] py-[12px] flex justify-between items-center'>
            <span className={`font-semibold text-[14px] transition-colors ${isDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>
                {getStatusLabel(type)}
            </span>
            <div className='flex items-center gap-[4px]'>
                <Tooltip title="신규 지원자 등록">
                    <IconPlus
                        size={16}
                        className={`cursor-pointer transition-colors ${isDarkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-700 hover:text-gray-900'
                            }`}
                        onClick={() => onAdd?.(type)}
                    />
                </Tooltip>
            </div>
        </div>
    )
}