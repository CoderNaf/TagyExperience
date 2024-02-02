import { FaHome } from "react-icons/fa";
import { IoBookmarks } from "react-icons/io5";
import { IoRocketSharp } from "react-icons/io5";
import { TbCreditCardFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function NavbarInitial(){
    let activeStyle = "bg-[#818FB4] p-2 rounded-l p-2 w-[113%] "
    return(
        <ul className="flex flex-col gap-5 w-full">
            <NavLink className={({isActive}) => isActive ? activeStyle : ''} to="/">
                <li className="font-ibmMono font-medium cursor-pointer text-[1.1rem] flex gap-4 items-center text-white">
                <FaHome/> Home
                </li>
            </NavLink>
            <NavLink className={({isActive}) => isActive ? activeStyle : ''} to="/About">
                <li className="font-ibmMono font-medium cursor-pointer text-[1.1rem] flex gap-4 items-center text-white">
                <IoBookmarks/>About
                </li>
            </NavLink>
           <NavLink className={({isActive}) => isActive ? activeStyle : ''} to="Experience">
                <li className=" font-ibmMono font-medium cursor-pointer text-[1.1rem] flex gap-4 items-center text-white">
                <IoRocketSharp/>Experience
                </li>
           </NavLink>
           <NavLink className={({isActive}) => isActive ? activeStyle : ''} to="Plans">
                <li className=" font-ibmMono font-medium cursor-pointer text-[1.1rem] flex gap-4 items-center text-white">
                <TbCreditCardFilled/>Plans
                </li>
           </NavLink>
        </ul>
    )
}

export { NavbarInitial }