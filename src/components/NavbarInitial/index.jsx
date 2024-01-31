import { FaHome } from "react-icons/fa";
import { IoBookmarks } from "react-icons/io5";
import { IoRocketSharp } from "react-icons/io5";
import { TbCreditCardFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function NavbarInitial(){
    let activeStyle = "bg-[#818FB4] p-2 rounded-l p-2 w-[113%] "
    return(
        <ul className="flex flex-col gap-5 w-full">
            <NavLink className={({isActive}) => isActive ? activeStyle : ''}>
                <li className="font-ibm font-medium cursor-pointer text-[1.1rem] flex gap-4 items-center text-white">
                <FaHome/> Home
                </li>
            </NavLink>
            <NavLink>
                <li className="font-ibm font-medium cursor-pointer text-[1.1rem] flex gap-4 items-center text-[#818FB4]">
                <IoBookmarks/>About
                </li>
            </NavLink>
           <NavLink>
                <li className=" font-ibm font-medium cursor-pointer text-[1.1rem] flex gap-4 items-center text-[#818FB4]">
                <IoRocketSharp/>Experience
                </li>
           </NavLink>
           <NavLink>
                <li className=" font-ibm font-medium cursor-pointer text-[1.1rem] flex gap-4 items-center text-[#818FB4]">
                <TbCreditCardFilled/>Plans
                </li>
           </NavLink>
        </ul>
    )
}

export { NavbarInitial }