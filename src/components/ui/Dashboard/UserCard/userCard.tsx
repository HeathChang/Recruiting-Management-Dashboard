import { Chip, Tooltip, MenuItem, ListItemIcon, ListItemText, Divider } from "@mui/material"
import { RegisterMethod, UserType } from "../../../../types/user.type"
import { IconCalendar, IconDots, IconFileText, IconDownload, IconTrash, IconMail, IconPhone } from "@tabler/icons-react"
import moment from "moment"
import { useDraggable } from "@dnd-kit/core"
import { useState } from "react"
import { Menu } from "../../../common/Menu/Menu"
import { useTheme } from "../../../../contexts/ThemeContext"
import { UserDeleteConfirmModal } from "./UserDeleteConfirmModal"

interface UserCardProps {
    user: UserType
    onCardClick?: () => void
    onViewResume?: () => void
    onDownloadResume?: () => void
    onDeleteUser?: (userId: string) => void
}

export const UserCard = ({
    user,
    onCardClick,
    onViewResume,
    onDownloadResume,
    onDeleteUser
}: UserCardProps) => {
    const { isDarkMode } = useTheme();
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: user.userId,
    });
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const handleMenuViewResume = () => {
        onViewResume?.();
        setAnchorEl(null);
    };

    const handleMenuDownloadResume = () => {
        onDownloadResume?.();
        setAnchorEl(null);
    };

    const handleMenuDeleteModal = () => {
        setDeleteModalOpen(true);
        setAnchorEl(null);
    };


    return (
        <>
            <div
                ref={setNodeRef}
                style={{ opacity: isDragging ? 0.3 : 1 }}
                {...listeners}
                {...attributes}
                className={`px-[6px] py-[8px] transition-colors ${isDarkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}
                onClick={onCardClick}
            >
                <div className='flex justify-between pl-[4px]'>
                    <Tooltip title={user.userId}>
                        <div className='truncate font-[14px] font-bold'>{user.userName}</div>
                    </Tooltip>
                    <div onClick={handleMenuOpen} className='cursor-pointer'>
                        <Tooltip title="더보기">
                            <IconDots size={16} />
                        </Tooltip>
                    </div>
                </div>
                <div className={`mt-[4px] text-[14px] font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <div className='flex items-center gap-[4px]'>
                        <IconMail size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                        <span className="truncate">{user.userEmail}</span>
                    </div>
                    <div className='flex items-center gap-[4px]'>
                        <IconPhone size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                        <span className="truncate">{user.userPhone}</span>
                    </div>
                </div>
                <div className='mt-[8px] text-[14px] font-bold'>
                    <Chip label={user.registerMethod} variant="outlined" size="small" color={user.registerMethod === RegisterMethod.DIRECT ? 'success' : 'primary'} />
                </div>
                <div className='flex items-center gap-[4px] mt-[4px] text-[14px] font-bold'>
                    <IconCalendar size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {moment(user.registerDate).format('YYYY-MM-DD')}
                    </span>
                </div>
            </div>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem onClick={handleMenuViewResume}>
                    <ListItemIcon>
                        <IconFileText size={18} />
                    </ListItemIcon>
                    <ListItemText>이력서 보기</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleMenuDownloadResume}>
                    <ListItemIcon>
                        <IconDownload size={18} />
                    </ListItemIcon>
                    <ListItemText>이력서 다운로드</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleMenuDeleteModal} sx={{ color: 'error.main' }}>
                    <ListItemIcon>
                        <IconTrash size={18} color="red" />
                    </ListItemIcon>
                    <ListItemText>삭제</ListItemText>
                </MenuItem>
            </Menu>

            <UserDeleteConfirmModal
                open={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={(userId) => onDeleteUser?.(userId)}
                user={user}
            />
        </>
    )
}
