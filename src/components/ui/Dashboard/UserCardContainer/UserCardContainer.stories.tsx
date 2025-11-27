import type { StoryObj } from '@storybook/react';
import { UserCardContainer } from './UserCardContainer';
import { StatusEnum } from '../../../../types/status.type';
import { RegisterMethod } from '../../../../types/user.type';

const meta = {
  title: 'Dashboard/UserCardContainer',
  component: UserCardContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onAddUser: { action: 'user added' },
    onDeleteUser: { action: 'user deleted' },
  },
  decorators: [
    (Story: any) => {
      return (
        <div className="border-[1px] rounded-[4px] px-[4px] transition-color min-w-[240px]">
          <Story />
        </div>
      );
    },
  ],
}

export default meta;
type Story = StoryObj<typeof meta>;

const mockUsers = [
  {
    userId: '1',
    userName: '김민수',
    registerMethod: RegisterMethod.DIRECT,
    registerDate: '2025-11-20',
    userEmail: 'minsu.kim@example.com',
    userPhone: '010-1234-5678',
    currentStatus: StatusEnum.APPLICATION,
  },
  {
    userId: '2',
    userName: '이영희',
    registerMethod: RegisterMethod.PERSONAL,
    registerDate: '2025-11-21',
    userEmail: 'younghee.lee@example.com',
    userPhone: '010-9876-5432',
    currentStatus: StatusEnum.APPLICATION,
  },
  {
    userId: '3',
    userName: '박철수',
    registerMethod: RegisterMethod.DIRECT,
    registerDate: '2025-11-22',
    userEmail: 'chulsoo.park@example.com',
    userPhone: '010-1111-2222',
    currentStatus: StatusEnum.APPLICATION,
  },
];

export const EmptyContainer: Story = {
  args: {
    type: StatusEnum.APPLICATION,
    userList: [],
  },
};

export const WithUsers: Story = {
  args: {
    type: StatusEnum.APPLICATION,
    userList: mockUsers,
  },
};