import { IconCheck, IconFilter, IconFlag, IconPlus, IconSearch, IconSortAscending } from '@tabler/icons-react'
import { Button, Divider, InputAdornment, MenuItem, Select, TextField, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material'
import { useState } from 'react'
import { useUserQuery } from '../../quries/UserQuery';
import { useUserListHook } from '../../hooks/useUserListHook';
import { StatusEnum } from '../../types/status.type';
import { UserCardContainerTitle } from '../../components/ui/Dashboard/UserCardContainerTitle/userCardContainerTitle';
import { UserCard } from '../../components/ui/Dashboard/UserCard/userCard';
import { UserType } from '../../types/user.type';
import { UserCardContainer } from '../../components/ui/Dashboard/UserCardContainer/UserCardContainer';

export const DashboardContainer = () => {
    const [selected, setSelected] = useState('지원자')
    const [searchCategory, setSearchCategory] = useState('이름');
    const [searchText, setSearchText] = useState('');
    const { data, isLoading } = useUserQuery();

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="text-xl">로딩 중...</div>
            </div>
        );
    }

    if (data?.length === 0) {
        return (
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-[16px]">
                <div className="text-xl">데이터가 없습니다. </div>
                <div>
                    <Button variant="outlined" className='!px-[4px] !py-[2px]' onClick={() => document.location.reload()}>
                        새로고침
                    </Button>
                </div>
            </div >
        );
    }

    // 검색 필터링
    const filteredData = data?.filter((user: UserType) => {
        if (!searchText) return true;
        const searchLower = searchText.toLowerCase();

        switch (searchCategory) {
            case '이름':
                return user.userName.toLowerCase().includes(searchLower);
            case '이메일':
                return user.userEmail.toLowerCase().includes(searchLower);
            case '전화번호':
                return user.userPhone.toLowerCase().includes(searchLower);
            default:
                return true;
        }
    });

    const { applicationUsers, taUsers, interviewFirstUsers, codingTestUsers, interviewSecondUsers, confirmationUsers } = useUserListHook(filteredData!);



    const handleChange = (_event: React.MouseEvent<HTMLElement>, value: string) => {
        if (value !== null) setSelected(value)
    }


    const handleClick = (type: StatusEnum) => {
        console.log('handleClick:::: ', type)
    }

    return (
        <div className="min-h-screen bg-gray-100 py-[32px] px-[32px] min-w-[720px]">
            {/* Header */}
            <div className="w-full flex justify-between items-center">
                <div className='font-[16px] font-bold'>프론트엔드 (Frontend) 개발자 - 데이터스페이스 (Dataspace)</div>
                <div className='flex gap-[8px]'>
                    <ToggleButtonGroup value={selected} onChange={handleChange} exclusive>
                        <ToggleButton value="지원자" className='!px-[6px] !py-[4px]'>지원자</ToggleButton>
                        <ToggleButton value="메일함" className='!px-[6px] !py-[4px]'>메일함</ToggleButton>
                    </ToggleButtonGroup>

                    <Button variant="outlined" className='!px-[4px] !py-[2px]'>채용팀</Button>
                </div>
            </div>
            {/* Sub-Header */}
            <div className="flex gap-[8px] mt-[8px]">
                <Button variant="outlined" className='!px-[4px] !py-[2px]'>활성화</Button>
                <Button className='!px-[4px] !py-[2px]' variant="text">
                    <IconPlus size={16} />
                    <span>메모추가</span>
                </Button>
            </div>

            {/* Search Area */}
            <div className="grid grid-cols-1 web:grid-cols-2  justify-between mt-[8px] items-center py-[8px] gap-[18px] web:gap-0">
                <div className='flex gap-[8px] items-center'>
                    <Select
                        value={searchCategory}
                        onChange={(e) => setSearchCategory(e.target.value)}
                        size="small"
                        variant="outlined"
                    >
                        <MenuItem value="이름">이름</MenuItem>
                        <MenuItem value="이메일">이메일</MenuItem>
                        <MenuItem value="전화번호">전화번호</MenuItem>
                    </Select>
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="이름, 이메일, 전화번호로 검색"
                        className='!w-[400px]'
                        onChange={(event) => setSearchText(event.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconSearch size={16} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                <div className='flex gap-[8px] items-center web:justify-end justify-start'>
                    <IconPlus size={16} />
                    <IconFilter size={16} />
                    <IconSortAscending size={16} />
                    <Button variant="outlined" className='!px-[4px] !py-[2px]'>대량 업데이트</Button>
                    <Button variant="outlined" className='!px-[4px] !py-[2px]'>
                        <IconCheck size={16} />
                        <span>다중선택</span>
                    </Button>
                    <Button variant="outlined" className='!px-[4px] !py-[2px]'>
                        <IconFlag size={16} />
                        <span>합격: 0</span>
                    </Button>
                    <div>두개</div>
                </div>
            </div>
            {/* Main Area */}
            <div className="grid grid-cols-3 web:grid-cols-6 mt-[32px] gap-[8px]">
                <div className="border-[1px] border-gray-300 rounded-[4px] px-[4px] bg-gray-200">
                    <UserCardContainer type={StatusEnum.APPLICATION} userList={applicationUsers} />
                </div>
                <div className="border-[1px] border-gray-300 rounded-[4px] px-[4px] bg-gray-200">
                    <UserCardContainer type={StatusEnum.TA} userList={taUsers} />
                </div>
                <div className="border-[1px] border-gray-300 rounded-[4px] px-[4px] bg-gray-200">
                    <UserCardContainer type={StatusEnum.INTERVIEW_FIRST} userList={interviewFirstUsers} />
                </div>
                <div className="border-[1px] border-gray-300 rounded-[4px] px-[4px] bg-gray-200">
                    <UserCardContainer type={StatusEnum.CODING_TEST} userList={codingTestUsers} />
                </div>
                <div className="border-[1px] border-gray-300 rounded-[4px] px-[4px] bg-gray-200">
                    <UserCardContainer type={StatusEnum.INTERVIEW_SECOND} userList={interviewSecondUsers} />
                </div>
                <div className="border-[1px] border-gray-300 rounded-[4px] px-[4px] bg-gray-200">
                    <UserCardContainer type={StatusEnum.CONFIRMATION} userList={confirmationUsers} />
                </div>
            </div>


        </div>
    )
}


