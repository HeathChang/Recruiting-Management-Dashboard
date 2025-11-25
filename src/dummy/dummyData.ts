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
    }
]