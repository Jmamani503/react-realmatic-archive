import { NavLink } from "react-router"
import { useState } from "react";
import { OpenMenuIcon } from "../icons/OpenMenuIcon";
import { CloseMenuIcon } from "../icons/CloseMenuIcon";
import { useUserStore } from "@/store/useUserStore";
import { useModalContext } from "../Modal/context/ModalContext";
import { AuthManager } from "../../features/auth/pages/AuthManager";
import { LogoutIcon } from "../icons/LogoutIcon";
import { useLogout } from "@/hooks/useLogout";

export const Navbar = () => {
    
    const [menuOpen, setMenuOpen] = useState(false)  
    const { userinfo } = useUserStore()
    const { setIsOpen, setContent } = useModalContext()
    const { logout} = useLogout()
    
    const getNavLinkClass = ({ isActive }: { isActive: boolean }): string =>
        `font-semibold font-cinzel text-lg  hover:text-[#E3C485] transition duration-300 ease-and-out ${
          isActive ? "text-[#E3C485]" : "text-[#FAF5DE]"
        }`
    
    const openModal = () => {
        setContent(<AuthManager />)
        setIsOpen(true);
    }
    
    return (
        <nav className="w-full bg-[#172937] border-b border-[#E3C485]">
            <div className="flex mx-auto justify-between items-center max-w-6xl p-6 ">
                <div>
                    <NavLink to='/home' className='text-[#E3C485] font-black text-md font-cinzel xs:text-xl sm:text-2xl '>Realmatic Archive</NavLink>
                </div>
                <ul className="hidden lg:flex gap-6">
                    <NavLink 
                        to='/home'
                        className={getNavLinkClass} 
                        >Home
                    </NavLink>
                    <NavLink 
                        to='/fanarts'
                        className={getNavLinkClass} 
                        >Fanarts
                    </NavLink>
                    <NavLink 
                        className={getNavLinkClass} 
                        to='/artists'
                        >Artists
                    </NavLink>
                    {
                        userinfo 
                        ?   <>
                                <NavLink 
                                    className={getNavLinkClass} 
                                    to='/profile'
                                    >{userinfo.username}
                                </NavLink>
                                <button 
                                    className="cursor-pointer hover:scale-110 transition duration-200 ease-in-out"
                                    onClick={logout}
                                    >
                                    <LogoutIcon stroke="#E3C485" />
                                </button>
                                {/* <SessionManager /> */}
                            </>
                        :   <button
                                onClick={openModal}
                                className="text-[#E3C485] font-semibold text-lg cursor-pointer font-cinzel"
                            >Login
                            </button> 
                    }
                </ul>
                <button 
                    className="lg:hidden text-[#E3C485] cursor-pointer hover:scale-110 transform duration-300 ease-in-out" 
                    onClick={() => setMenuOpen(!menuOpen)}
                    >
                    {
                        menuOpen 
                        ? <CloseMenuIcon />
                        : <OpenMenuIcon />
                    }
                </button>
            </div>

            {menuOpen && (
                <ul className="lg:hidden flex flex-col items-center gap-4 py-4 border-t border-[#E3C485] bg-[#172937]">
                    <NavLink 
                        to='/home'
                        className={getNavLinkClass}
                        onClick={() => setMenuOpen(false)} 
                        >Home
                    </NavLink>
                    <NavLink 
                        to='/fanarts'
                        className={getNavLinkClass} 
                        onClick={() => setMenuOpen(false)}
                        >Fanarts
                    </NavLink>
                    <NavLink 
                        className={getNavLinkClass} 
                        to='/artists'
                        onClick={() => setMenuOpen(false)}
                        >Artists
                    </NavLink>
                    {
                        userinfo 
                        ?   <>
                                <NavLink 
                                    className={getNavLinkClass} 
                                    to='/profile'
                                    >{userinfo.username}
                                </NavLink>
                                <button 
                                    className="cursor-pointer hover:scale-110 transition duration-200 ease-in-out"
                                    onClick={logout}
                                    >
                                    <LogoutIcon stroke="#E3C485" />
                                </button>
                                {/* <SessionManager /> */}
                            </>
                        :   <button
                                onClick={openModal}
                                className="text-[#E3C485] font-semibold text-lg cursor-pointer font-cinzel"
                            >Login
                            </button> 
                    }
                </ul>
            )}
        </nav>
    )
}