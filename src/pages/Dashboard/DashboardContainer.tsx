import { IconSearch, IconMoon, IconSun } from '@tabler/icons-react'
import { Button, InputAdornment, MenuItem, Select, TextField, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material'
import { useState } from 'react'
import { UserStatusBoard } from '../../components/ui/Dashboard/UserStatusBoard/UserStatusBoard'
import { useTheme } from '../../contexts/ThemeContext';

export const DashboardContainer = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [selected, setSelected] = useState('지원자')
    const [searchCategory, setSearchCategory] = useState('이름');
    const [searchText, setSearchText] = useState('');

    const handleChange = (_event: React.MouseEvent<HTMLElement>, value: string) => {
        if (value !== null) setSelected(value)
    }

    return (
        <div className={`min-h-screen py-[32px] px-[32px] min-w-[674px] transition-colors ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
            }`}>
            {/* Header */}
            <div className="w-full flex justify-between items-center">
                <div className={`font-[16px] font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    프론트엔드 (Frontend) 개발자 - 데이터스페이스 (Dataspace)
                </div>
                <div className='flex gap-[8px]'>
                    <Tooltip title={isDarkMode ? '라이트 모드' : '다크 모드'}>
                        <Button
                            variant="outlined"
                            className='!px-[8px] !py-[4px] !min-w-0'
                            onClick={toggleDarkMode}
                        >
                            {isDarkMode ? <IconSun size={18} /> : <IconMoon size={18} />}
                        </Button>
                    </Tooltip>
                    <ToggleButtonGroup value={selected} onChange={handleChange} exclusive>
                        <ToggleButton value="지원자" className='!px-[6px] !py-[4px]'>지원자</ToggleButton>
                        <Tooltip title="메일함">
                            <ToggleButton value="메일함" className='!px-[6px] !py-[4px]' disabled={true}>메일함</ToggleButton>
                        </Tooltip>
                    </ToggleButtonGroup>

                    <Button variant="outlined" className='!px-[4px] !py-[2px]'>채용팀</Button>
                </div>
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
                        className='!w-[400px] !text-red-500'
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
            </div>
            {/* Main Area */}
            <UserStatusBoard
                searchText={searchText}
                searchCategory={searchCategory}
            />
        </div>


    )
}


