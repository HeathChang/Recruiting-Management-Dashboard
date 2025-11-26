import { UserType } from "../types/user.type";
import { StatusEnum } from "../types/status.type";

export const useUserListHook = (
    userData: UserType[] = [],
    filterFn?: (user: UserType) => boolean
) => {
    const data = filterFn ? userData.filter(filterFn) : userData;

    const applicationUsers = data.filter(user => user.currentStatus === StatusEnum.APPLICATION);
    const taUsers = data.filter(user => user.currentStatus === StatusEnum.TA);
    const interviewFirstUsers = data.filter(user => user.currentStatus === StatusEnum.INTERVIEW_FIRST);
    const codingTestUsers = data.filter(user => user.currentStatus === StatusEnum.CODING_TEST);
    const interviewSecondUsers = data.filter(user => user.currentStatus === StatusEnum.INTERVIEW_SECOND);
    const confirmationUsers = data.filter(user => user.currentStatus === StatusEnum.CONFIRMATION);

    return {
        applicationUsers,
        taUsers,
        interviewFirstUsers,
        codingTestUsers,
        interviewSecondUsers,
        confirmationUsers
    };
};
