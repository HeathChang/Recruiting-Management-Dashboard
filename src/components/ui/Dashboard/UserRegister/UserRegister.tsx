import { Box, TextField, Button, MenuItem, Select, FormControl, InputLabel } from "@mui/material"
import { useState } from "react"
import { UserType, RegisterMethod } from "../../../../types/user.type"
import { StatusEnum } from "../../../../types/status.type"
import { useUserForm } from "../../../../hooks/useUserForm"
import { validateUserForm } from "./utils/validateUserForm"
import { useTheme } from "../../../../contexts/ThemeContext"

interface UserRegisterProps {
    currentStatus: StatusEnum
    onClose: () => void
    onAddUser?: (newUser: UserType) => void
}

export const UserRegister = ({
    onClose,
    currentStatus,
    onAddUser
}: UserRegisterProps) => {
    const { isDarkMode } = useTheme();
    const { formData, handleInputChange, resetForm } = useUserForm();
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleClose = () => {
        resetForm();
        setErrors({});
        onClose();
    };

    const handleSubmit = () => {
        const validationErrors = validateUserForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        onAddUser?.({
            userId: `USER_${Date.now()}`,
            userName: formData.userName.trim(),
            registerMethod: formData.registerMethod,
            registerDate: new Date().toISOString(),
            userEmail: formData.userEmail.trim(),
            userPhone: formData.userPhone.trim(),
            currentStatus: currentStatus,
        });
        handleClose();
    };

    return (
        <Box className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] p-4 rounded-lg shadow-lg transition-colors ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-50 text-gray-900'
            }`}>
            <h2 className="text-xl font-bold mb-4">새로운 지원자 추가</h2>

            <div className="flex flex-col gap-4">
                <TextField
                    label="이름"
                    fullWidth
                    value={formData.userName}
                    onChange={(e) => handleInputChange('userName', e.target.value)}
                    error={!!errors.userName}
                    helperText={errors.userName}
                    required
                />

                <FormControl fullWidth error={!!errors.registerMethod}>
                    <InputLabel>등록 방법</InputLabel>
                    <Select
                        value={formData.registerMethod}
                        label="등록 방법"
                        onChange={(e) => handleInputChange('registerMethod', e.target.value as RegisterMethod)}
                    >
                        <MenuItem value={RegisterMethod.DIRECT}>{RegisterMethod.DIRECT}</MenuItem>
                        <MenuItem value={RegisterMethod.PERSONAL}>{RegisterMethod.PERSONAL}</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    label="이메일"
                    fullWidth
                    type="email"
                    value={formData.userEmail}
                    onChange={(e) => handleInputChange('userEmail', e.target.value)}
                    error={!!errors.userEmail}
                    helperText={errors.userEmail}
                    placeholder="example@email.com"
                    required
                />

                <TextField
                    label="전화번호"
                    fullWidth
                    value={formData.userPhone}
                    onChange={(e) => handleInputChange('userPhone', e.target.value)}
                    error={!!errors.userPhone}
                    helperText={errors.userPhone}
                    placeholder="010-1234-5678"
                    required
                />

                <div className="flex gap-2 justify-end mt-4">
                    <Button onClick={handleClose} variant="outlined">
                        취소
                    </Button>
                    <Button onClick={handleSubmit} variant="contained">
                        확인
                    </Button>
                </div>
            </div>
        </Box>
    )
}

