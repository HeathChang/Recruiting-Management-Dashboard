import { Chip, Tooltip, MenuItem, ListItemIcon, ListItemText, Divider } from "@mui/material"
import { RegisterMethod, UserType } from "../../../../types/user.type"
import { IconCalendar, IconDots, IconFileText, IconDownload, IconTrash } from "@tabler/icons-react"
import moment from "moment"
import { useDraggable } from "@dnd-kit/core"
import { useState } from "react"
import { Menu } from "../../../common/Menu/Menu"
import { useTheme } from "../../../../contexts/ThemeContext"

const RESUME_URL = '/resumes/sample_resume.pdf';

interface UserCardProps {
    user: UserType
    onDeleteUser?: (userId: string) => void
}

export const UserCard = ({ user, onDeleteUser }: UserCardProps) => {
    const { isDarkMode } = useTheme();
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: user.userId,
    });

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClickCard = () => {
        window.open("https://interxlab.career.greetinghr.com/ko/interxlab", "_blank");
    }

    const handleClickMore = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    }

    const handleCloseMenu = () => {
        setAnchorEl(null);
    }

    const handleViewResume = () => {
        window.open(RESUME_URL, '_blank');
        handleCloseMenu();
    }

    const handleDownloadResume = () => {
        const filename = `sample_resume.pdf`;
        const link = document.createElement('a');
        link.href = RESUME_URL;
        link.download = filename;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        handleCloseMenu();
    }

    const handleReject = () => {
        onDeleteUser?.(user.userId);
        handleCloseMenu();
    }

    return (
        <>
            <div
                ref={setNodeRef}
                style={{ opacity: isDragging ? 0.3 : 1 }}
                {...listeners}
                {...attributes}
                className={`px-[6px] py-[8px] transition-colors ${isDarkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}
                onClick={handleClickCard}
            >
                <div className='flex justify-between pl-[4px]'>
                    <Tooltip title={user.userId}>
                        <div className='truncate font-[16px] font-bold'>{user.userName}</div>
                    </Tooltip>
                    <div onClick={handleClickMore} className='cursor-pointer'>
                        <Tooltip title="더보기">
                            <IconDots size={16} />
                        </Tooltip>
                    </div>
                </div>
                <div className='mt-[8px]'>
                    <Chip label={user.registerMethod} variant="outlined" size="small" color={user.registerMethod === RegisterMethod.DIRECT ? 'success' : 'primary'} />
                </div>
                <div className='flex items-center gap-[4px] pl-[4px] mt-[8px]'>
                    <IconCalendar size={12} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`text-[12px] ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {moment(user.registerDate).format('YYYY-MM-DD')}
                    </span>
                </div>
            </div>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMenu}
            >
                <MenuItem onClick={handleViewResume}>
                    <ListItemIcon>
                        <IconFileText size={18} />
                    </ListItemIcon>
                    <ListItemText>이력서 보기</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleDownloadResume}>
                    <ListItemIcon>
                        <IconDownload size={18} />
                    </ListItemIcon>
                    <ListItemText>이력서 다운로드</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleReject} sx={{ color: 'error.main' }}>
                    <ListItemIcon>
                        <IconTrash size={18} color="red" />
                    </ListItemIcon>
                    <ListItemText>불합격 처리</ListItemText>
                </MenuItem>
            </Menu>
        </>
    )
}
