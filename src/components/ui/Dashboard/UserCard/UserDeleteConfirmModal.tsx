import { Modal, Button, Box } from "@mui/material";
import { IconUser, IconMail, IconPhone, IconProgress } from "@tabler/icons-react";
import { UserType } from "../../../../types/user.type";
import { useTheme } from "../../../../contexts/ThemeContext";
import { getStatusLabel, StatusEnum } from "../../../../types/status.type";

interface UserDeleteConfirmModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: (userId: string) => void;
    user: UserType;
}

export const UserDeleteConfirmModal = ({
    open,
    onClose,
    onConfirm,
    user,
}: UserDeleteConfirmModalProps) => {
    const { isDarkMode } = useTheme();

    const handleConfirm = () => {
        onConfirm(user.userId);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] p-4 rounded-lg shadow-lg transition-colors ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
                <h2 className="text-xl font-bold mb-4">삭제</h2>
                <div className="flex flex-col gap-4 mt-[8px]">
                    <p>아래 사용자를 삭제하시겠습니까?</p>
                    <div className="py-[12px] px-[16px] border-[1px] rounded-[8px]">
                        <div className="flex items-center gap-[4px] text-[14px] font-semibold">
                            <IconUser size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                            {user.userName}
                        </div>
                        <div className="flex items-center gap-[4px] text-[14px] font-semibold">
                            <IconMail size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                            {user.userEmail}
                        </div>
                        <div className="flex items-center gap-[4px] text-[14px] font-semibold">
                            <IconPhone size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                            {user.userPhone}
                        </div>
                        <div className="flex items-center gap-[4px] text-[14px] font-semibold">
                            <IconProgress size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                            {getStatusLabel(user.currentStatus)} 단계
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 justify-end mt-[16px]">
                    <Button variant="outlined" onClick={onClose}>취소</Button>
                    <Button variant="contained" onClick={handleConfirm}>확인</Button>
                </div>
            </Box>
        </Modal>
    );
};

