import { useState } from "react"
import { Login, Register } from "@/features/auth/components"

export const AuthManager = () => {

    const [ isLogin, setIsLogin ] = useState(true)
    
    return (
        <div className="p-6">
            <div className="flex justify-between pt-4">
                <button 
                    className={`font-bold text-xl cursor-pointer pb-4 ${isLogin ? 'text-[#E3C485]' : 'text-gray-500' }`}
                    onClick={() => setIsLogin(true)}
                    >Login
                </button>
                <button 
                    className={`font-bold text-xl cursor-pointer pb-4 ${isLogin ? 'text-gray-500' : 'text-[#E3C485]' }`}
                    onClick={() => setIsLogin(false)}    
                    >Register
                </button>
            </div>
            { 
                isLogin ? 
                <Login />
                : 
                <Register />
            }
        </div>
    )

}