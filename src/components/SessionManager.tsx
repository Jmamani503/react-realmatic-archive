import { useEffect, useRef, useState } from "react";
import supabase from "../helpers/api";
import { AuthManager } from "../features/auth/pages/AuthManager";
import { useModalContext } from "./Modal/context/ModalContext";
import { useUserStore } from "../store/useUserStore";
import { NavLink } from "react-router-dom";

export const SessionManager = () => {

  const { setIsOpen, setContent } = useModalContext();
  const [open, setOpen] = useState(false);
  const { access_token, removeToken, userinfo, removeUserinfo } = useUserStore();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setOpen(false);
        }
      }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    let { error } = await supabase.auth.signOut();
    console.log(error)
    removeToken()
    removeUserinfo()
    setOpen(false)
  };

  const getNavLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `font-semibold font-cinzel text-lg  hover:text-[#E3C485] transition duration-300 ease-and-out ${
      isActive ? "text-[#E3C485]" : "text-[#FAF5DE]"
  }`

  const openModal = () => {
    setContent(<AuthManager />)
    setIsOpen(true);
  };

  return (
    <div className="relative " ref={dropdownRef}>
      {access_token ? (
        <button
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="text-[#E3C485] font-semibold font-cinzel text-lg ">
            {userinfo?.username}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="#E3C485"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>
      ) : (
        <button
          onClick={openModal}
          className="text-[#E3C485] font-semibold text-lg cursor-pointer font-cinzel"
        >
          Login
        </button>
      )}

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-[#22232B] border border-[#E3C485] rounded-lg shadow-lg">
          <ul className="flex flex-col">
            <li>
              <button
                className="text-[#E3C485] font-semibold text-lg block w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white transition cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
