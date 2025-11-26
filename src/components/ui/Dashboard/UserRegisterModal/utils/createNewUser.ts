import { UserType } from "../../../../../types/user.type"
import { StatusEnum } from "../../../../../types/status.type"
import { UserFormData } from "../hooks/useUserForm"

export const createNewUser = (
    formData: UserFormData,
    currentStatus: StatusEnum
): UserType => {
    return {
        userId: `USER_${Date.now()}`,
        userName: formData.userName.trim(),
        registerMethod: formData.registerMethod,
        registerDate: new Date().toISOString(),
        userEmail: formData.userEmail.trim(),
        userPhone: formData.userPhone.trim(),
        currentStatus: currentStatus,
    };
};

