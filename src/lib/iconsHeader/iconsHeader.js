import { BiHomeAlt, BiMessageSquareDots, BiTimeFive } from 'react-icons/bi';
import { BsPeople, BsFlag } from 'react-icons/bs';
import { RiSettingsLine } from 'react-icons/ri';


export const iconsHeader = [
    {
        name: <BiHomeAlt size={22} />,
        title: 'Trang chủ',
        patch: '/'
    },
    {
        name: <BsPeople size={22} />,
        title: 'Mọi người',
        patch: '/people'
    },
    {
        name: <BiMessageSquareDots size={22} />,
        title: 'Tin nhắn',
        patch: '/messenger'
    },
    {
        name: <BiTimeFive size={22} />,
        title: 'Hoạt động',
        patch: '/'

    },
    {
        name: <BsFlag size={22} />,
        title: 'Gắn cờ',
        patch: '/'

    },
    {
        name: <RiSettingsLine size={22} />,
        title: 'Cài đặt',
        patch: '/'

    },

]