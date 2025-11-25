import { UserType } from "../types/user.type";
import { StatusEnum } from "../types/status.type";

export const useUserListHook = (userData: UserType[]) => {
    const applicationUsers = userData?.filter(user => user.currentStatus === StatusEnum.APPLICATION) || [];
    const taUsers = userData?.filter(user => user.currentStatus === StatusEnum.TA);
    const interviewFirstUsers = userData?.filter(user => user.currentStatus === StatusEnum.INTERVIEW_FIRST);
    const codingTestUsers = userData?.filter(user => user.currentStatus === StatusEnum.CODING_TEST);
    const interviewSecondUsers = userData?.filter(user => user.currentStatus === StatusEnum.INTERVIEW_SECOND);
    const confirmationUsers = userData?.filter(user => user.currentStatus === StatusEnum.CONFIRMATION);

    return {
        applicationUsers,
        taUsers,
        interviewFirstUsers,
        codingTestUsers,
        interviewSecondUsers,
        confirmationUsers
    }
}