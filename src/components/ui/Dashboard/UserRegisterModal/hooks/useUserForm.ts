import { useState } from "react"
import { RegisterMethod } from "../../../../../types/user.type"

export interface UserFormData {
    userName: string
    registerMethod: RegisterMethod
    userEmail: string
    userPhone: string
}

const initialFormData: UserFormData = {
    userName: '',
    registerMethod: RegisterMethod.DIRECT,
    userEmail: '',
    userPhone: '',
};

export const useUserForm = () => {
    const [formData, setFormData] = useState<UserFormData>(initialFormData);

    const handleInputChange = (field: string, value: string | RegisterMethod) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const resetForm = () => {
        setFormData(initialFormData);
    };

    return {
        formData,
        handleInputChange,
        resetForm
    };
};

