import { RegisterMethod, UserType } from "../types/user.type"
import { StatusEnum } from "../types/status.type"

export const dummyUserData: UserType[] = [
    {
        userId: 'USER001',
        userName: '김철수',
        registerMethod: RegisterMethod.DIRECT,
        registerDate: '2024-11-20 10:30:00',
        userEmail: 'chulsoo.kim@example.com',
        userPhone: '010-1234-5678',
        currentStatus: StatusEnum.APPLICATION
    },
    {
        userId: 'USER002',
        userName: '이영희',
        registerMethod: RegisterMethod.PERSONAL,
        registerDate: '2024-11-21 14:20:00',
        userEmail: 'younghee.lee@example.com',
        userPhone: '010-2345-6789',
        currentStatus: StatusEnum.APPLICATION
    },
    {
        userId: 'USER003',
        userName: '박민수',
        registerMethod: RegisterMethod.DIRECT,
        registerDate: '2024-11-22 09:15:00',
        userEmail: 'minsoo.park@example.com',
        userPhone: '010-3456-7890',
        currentStatus: StatusEnum.APPLICATION
    },
    {
        userId: 'USER004',
        userName: '최지원',
        registerMethod: RegisterMethod.PERSONAL,
        registerDate: '2024-11-23 16:45:00',
        userEmail: 'jiwon.choi@example.com',
        userPhone: '010-4567-8901',
        currentStatus: StatusEnum.APPLICATION
    },
    {
        userId: 'USER005',
        userName: '정수진',
        registerMethod: RegisterMethod.DIRECT,
        registerDate: '2024-11-24 11:00:00',
        userEmail: 'soojin.jung@example.com',
        userPhone: '010-5678-9012',
        currentStatus: StatusEnum.APPLICATION
    },
    {
        userId: 'USER006',
        userName: '강동현',
        registerMethod: RegisterMethod.PERSONAL,
        registerDate: '2024-11-18 13:30:00',
        userEmail: 'donghyun.kang@example.com',
        userPhone: '010-6789-0123',
        currentStatus: StatusEnum.APPLICATION
    },
    {
        userId: 'USER007',
        userName: '윤서연',
        registerMethod: RegisterMethod.DIRECT,
        registerDate: '2024-11-19 15:20:00',
        userEmail: 'seoyeon.yoon@example.com',
        userPhone: '010-7890-1234',
        currentStatus: StatusEnum.APPLICATION
    },
    {
        userId: 'USER008',
        userName: '임준호',
        registerMethod: RegisterMethod.PERSONAL,
        registerDate: '2024-11-15 10:00:00',
        userEmail: 'junho.lim@example.com',
        userPhone: '010-8901-2345',
        currentStatus: StatusEnum.APPLICATION
    },
    {
        userId: 'USER009',
        userName: '한미나',
        registerMethod: RegisterMethod.DIRECT,
        registerDate: '2024-11-25 09:30:00',
        userEmail: 'mina.han@example.com',
        userPhone: '010-9012-3456',
        currentStatus: StatusEnum.APPLICATION
    },
    {
        userId: 'USER010',
        userName: '송태양',
        registerMethod: RegisterMethod.PERSONAL,
        registerDate: '2024-11-25 11:15:00',
        userEmail: 'taeyang.song@example.com',
        userPhone: '010-0123-4567',
        currentStatus: StatusEnum.APPLICATION
    },
    {
        userId: 'USER011',
        userName: '백지훈',
        registerMethod: RegisterMethod.DIRECT,
        registerDate: '2024-11-24 08:45:00',
        userEmail: 'jihoon.baek@example.com',
        userPhone: '010-1111-2222',
        currentStatus: StatusEnum.APPLICATION
    },
    {
        userId: 'USER012',
        userName: '오수민',
        registerMethod: RegisterMethod.PERSONAL,
        registerDate: '2024-11-23 13:20:00',
        userEmail: 'sumin.oh@example.com',
        userPhone: '010-2222-3333',
        currentStatus: StatusEnum.APPLICATION
    },
    {
        userId: 'USER013',
        userName: '홍성민',
        registerMethod: RegisterMethod.DIRECT,
        registerDate: '2024-11-22 16:30:00',
        userEmail: 'seongmin.hong@example.com',
        userPhone: '010-3333-4444',
        currentStatus: StatusEnum.APPLICATION
    },
    {
        userId: 'USER014',
        userName: '서하늘',
        registerMethod: RegisterMethod.PERSONAL,
        registerDate: '2024-11-21 10:15:00',
        userEmail: 'haneul.seo@example.com',
        userPhone: '010-4444-5555',
        currentStatus: StatusEnum.APPLICATION
    },
    {
        userId: 'USER015',
        userName: '안재현',
        registerMethod: RegisterMethod.DIRECT,
        registerDate: '2024-11-20 14:50:00',
        userEmail: 'jaehyun.ahn@example.com',
        userPhone: '010-5555-6666',
        currentStatus: StatusEnum.APPLICATION
    },
    {
        userId: 'USER016',
        userName: '남궁민',
        registerMethod: RegisterMethod.PERSONAL,
        registerDate: '2024-11-19 09:20:00',
        userEmail: 'min.namgung@example.com',
        userPhone: '010-6666-7777',
        currentStatus: StatusEnum.TA
    },
    {
        userId: 'USER017',
        userName: '황지수',
        registerMethod: RegisterMethod.DIRECT,
        registerDate: '2024-11-18 11:40:00',
        userEmail: 'jisoo.hwang@example.com',
        userPhone: '010-7777-8888',
        currentStatus: StatusEnum.TA
    },
    {
        userId: 'USER018',
        userName: '신동욱',
        registerMethod: RegisterMethod.PERSONAL,
        registerDate: '2024-11-17 14:15:00',
        userEmail: 'dongwook.shin@example.com',
        userPhone: '010-8888-9999',
        currentStatus: StatusEnum.INTERVIEW_FIRST
    },
    {
        userId: 'USER019',
        userName: '권은비',
        registerMethod: RegisterMethod.DIRECT,
        registerDate: '2024-11-16 10:30:00',
        userEmail: 'eunbi.kwon@example.com',
        userPhone: '010-9999-0000',
        currentStatus: StatusEnum.INTERVIEW_FIRST
    },
    {
        userId: 'USER020',
        userName: '문정훈',
        registerMethod: RegisterMethod.PERSONAL,
        registerDate: '2024-11-15 15:45:00',
        userEmail: 'junghoon.moon@example.com',
        userPhone: '010-1010-2020',
        currentStatus: StatusEnum.CODING_TEST
    },
    {
        userId: 'USER021',
        userName: '유아름',
        registerMethod: RegisterMethod.DIRECT,
        registerDate: '2024-11-14 09:00:00',
        userEmail: 'areum.yoo@example.com',
        userPhone: '010-2020-3030',
        currentStatus: StatusEnum.CODING_TEST
    },
    {
        userId: 'USER022',
        userName: '배성훈',
        registerMethod: RegisterMethod.PERSONAL,
        registerDate: '2024-11-13 13:30:00',
        userEmail: 'sunghoon.bae@example.com',
        userPhone: '010-3030-4040',
        currentStatus: StatusEnum.INTERVIEW_SECOND
    },
    {
        userId: 'USER023',
        userName: '조은영',
        registerMethod: RegisterMethod.DIRECT,
        registerDate: '2024-11-12 16:20:00',
        userEmail: 'eunyoung.cho@example.com',
        userPhone: '010-4040-5050',
        currentStatus: StatusEnum.INTERVIEW_SECOND
    },
    {
        userId: 'USER024',
        userName: '설민기',
        registerMethod: RegisterMethod.PERSONAL,
        registerDate: '2024-11-11 10:45:00',
        userEmail: 'minki.seol@example.com',
        userPhone: '010-5050-6060',
        currentStatus: StatusEnum.CONFIRMATION
    },
    {
        userId: 'USER025',
        userName: '탁소연',
        registerMethod: RegisterMethod.DIRECT,
        registerDate: '2024-11-10 14:00:00',
        userEmail: 'soyeon.tak@example.com',
        userPhone: '010-6060-7070',
        currentStatus: StatusEnum.CONFIRMATION
    },
    {
        userId: 'USER026',
        userName: '하윤서',
        registerMethod: RegisterMethod.PERSONAL,
        registerDate: '2024-11-26 08:30:00',
        userEmail: 'yoonseo.ha@example.com',
        userPhone: '010-7070-8080',
        currentStatus: StatusEnum.APPLICATION
    },
    {
        userId: 'USER027',
        userName: '옥재민',
        registerMethod: RegisterMethod.DIRECT,
        registerDate: '2024-11-26 11:20:00',
        userEmail: 'jaemin.ok@example.com',
        userPhone: '010-8080-9090',
        currentStatus: StatusEnum.TA
    },
    {
        userId: 'USER028',
        userName: '금나영',
        registerMethod: RegisterMethod.PERSONAL,
        registerDate: '2024-11-25 15:10:00',
        userEmail: 'nayoung.keum@example.com',
        userPhone: '010-9090-1010',
        currentStatus: StatusEnum.INTERVIEW_FIRST
    },
    {
        userId: 'USER029',
        userName: '노승우',
        registerMethod: RegisterMethod.DIRECT,
        registerDate: '2024-11-24 13:40:00',
        userEmail: 'seungwoo.noh@example.com',
        userPhone: '010-1212-3434',
        currentStatus: StatusEnum.CODING_TEST
    },
    {
        userId: 'USER030',
        userName: '예소희',
        registerMethod: RegisterMethod.PERSONAL,
        registerDate: '2024-11-23 09:50:00',
        userEmail: 'sohee.ye@example.com',
        userPhone: '010-3434-5656',
        currentStatus: StatusEnum.INTERVIEW_SECOND
    }
]