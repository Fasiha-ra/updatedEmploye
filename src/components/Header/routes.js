import { FiHome } from "react-icons/fi";
import { MdOutlineFeed } from "react-icons/md";
import { SlGraduation } from "react-icons/sl";
import { LuCalendarDays } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineSupport } from "react-icons/hi";


const navLinks= [
    {
        title:'Home',
        icon:<FiHome /> ,
        link:'/dashboard',
    },
    {
        title:'Support',
        icon:<HiOutlineSupport />,
        link:'/support',
    },
    {
        title:'Feeds',
        icon:<MdOutlineFeed />,
        link:'/feed',
    },
    {
        title:'Sessions',
        icon:<SlGraduation /> ,
        link:'/session',
    },
    {
        title:'Calendar',
        icon:<LuCalendarDays /> ,
        link:'/calendar',
    },
    {
        title:'Notification',
        icon:<IoIosNotificationsOutline />,
        link:'/notification',
    },
    
]
export default navLinks;