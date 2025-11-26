import { UserFormData } from "../../../../../hooks/useUserForm"

export const validateUserForm = (formData: UserFormData): Record<string, string> => {
    const errors: Record<string, string> = {};

    // 이름 검증
    if (!formData.userName.trim()) {
        errors.userName = '이름을 입력해주세요.';
    } else if (formData.userName.trim().length < 2) {
        errors.userName = '이름은 최소 2자 이상이어야 합니다.';
    }

    // 이메일 검증
    if (!formData.userEmail.trim()) {
        errors.userEmail = '이메일을 입력해주세요.';
    } else if (!isValidEmail(formData.userEmail)) {
        errors.userEmail = '올바른 이메일 형식을 입력해주세요.';
    }

    // 전화번호 검증
    if (!formData.userPhone.trim()) {
        errors.userPhone = '전화번호를 입력해주세요.';
    } else if (!isValidPhoneNumber(formData.userPhone)) {
        errors.userPhone = '올바른 전화번호 형식을 입력해주세요. (예: 010-1234-5678)';
    }

    return errors;
};

const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isValidPhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
    return phoneRegex.test(phone);
};

