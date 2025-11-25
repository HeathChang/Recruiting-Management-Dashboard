export enum StatusEnum {
    APPLICATION = 'APPLICATION',
    TA = 'TA',
    INTERVIEW_FIRST = 'INTERVIEW_FIRST',
    CODING_TEST = 'CODING_TEST',
    INTERVIEW_SECOND = 'INTERVIEW_SECOND',
    CONFIRMATION = 'CONFIRMATION'
}


export const getStatusLabel = (status: keyof typeof StatusEnum) => {
    switch (status) {
        case StatusEnum.APPLICATION:
            return '지원'
        case StatusEnum.TA:
            return 'TA'
        case StatusEnum.INTERVIEW_FIRST:
            return '1차인터뷰'
        case StatusEnum.CODING_TEST:
            return '코딩테스트'
        case StatusEnum.INTERVIEW_SECOND:
            return '2차인터뷰'
        case StatusEnum.CONFIRMATION:
            return '입사확정'
    }
}