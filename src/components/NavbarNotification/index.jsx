import { NavLink } from "react-router-dom"

function NavbarNotification (){
    return(
        <ul className="flex w-full justify-end gap-4 py-2 px-3">
            <NavLink to="/SingIn">
                <li className="font-ibmMono font-medium py-1 px-2 cursor-pointer hover:bg-[#818FB4] hover:text-white duration-300 hover:rounded">
                    Sing In
                </li>
            </NavLink>
            <NavLink to="SingUp" className="font-ibmMono bg-[#818FB4] text-white py-1 px-2 rounded cursor-pointer">
                <li >Sing Up</li>
            </NavLink>
        </ul>
    )
}

export { NavbarNotification }