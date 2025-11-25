import { Button, Chip, Tooltip } from "@mui/material"
import { RegisterMethod, UserType } from "../../../../types/user.type"
import { IconCalendar, IconDots, IconInfoCircle } from "@tabler/icons-react"
import moment from "moment"


export const UserCard = ({ user }: { user: UserType }) => {
    const handleClick = () => {
        console.log('click')
    }
    return (
        <div className='px-[6px] py-[8px]'>
            <div className='flex justify-between pl-[4px]'>
                <Tooltip title={user.userId}>
                    <div className='truncate font-[16px] font-bold'>{user.userName}</div>
                </Tooltip>
                <IconDots size={16} className='cursor-pointer' onClick={handleClick} />


            </div>
            <div className='mt-[8px]'>
                <Chip label={user.registerMethod} variant="outlined" size="small" color={user.registerMethod === RegisterMethod.DIRECT ? 'success' : 'primary'} />

            </div>
            <div className='flex items-center gap-[4px] pl-[4px] mt-[8px]'>
                <IconCalendar size={12} className='text-gray-500' />
                <span className='text-gray-500 text-[12px]'>{moment(user.registerDate).format('YYYY-MM-DD')}</span>
            </div>

            {/* <div className='truncate'>{user.currentStatus}</div> */}
        </div>
    )
}
