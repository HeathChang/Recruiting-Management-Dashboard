import type { StoryObj } from '@storybook/react';
import { UserCard } from './userCard';
import { RegisterMethod } from '../../../../types/user.type';

const meta = {
  title: 'Dashboard/UserCard',
  component: UserCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onDeleteUser: { action: 'deleted' },
  },
  decorators: [
    (Story: any) => {
      return (
        <div className='gap-[8px] border-[1px] rounded-[8px] !p-[2px] cursor-pointer transition-colors border-gray-300 bg-gray-50 hover:bg-gray-100 min-w-[200px]'>
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      userId: '1',
      userName: '김민수',
      registerMethod: RegisterMethod.DIRECT,
      registerDate: '2025-11-20',
      userEmail: 'minsu.kim@example.com',
      userPhone: '010-1234-5678',
      currentStatus: 'APPLICATION' as any,
    },
  },
};

export const LongName: Story = {
  args: {
    user: {
      userId: '3',
      userName: '아주아주아주아주긴이름을가진지원자',
      registerMethod: RegisterMethod.DIRECT,
      registerDate: '2025-11-22',
      userEmail: 'longname@example.com',
      userPhone: '010-1111-2222',
      currentStatus: 'INTERVIEW_FIRST' as any,
    },
  },
};

