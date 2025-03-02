import { useState } from "react"
import { useLogin } from "../services/useLogin"
import { LoadingIcon } from "@/components/icons/LoadingIcon"

export const Login = () => {

    const [ email, setEmail ] = useState("jmamani@gmail.com")
    const [ password, setPassword ] = useState('jmamani')
    const { error, loading, login } = useLogin()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        login(email, password) 
    }

    return (
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
                {error && <span className="text-red-400 text-sm">{error}</span>}
                <div className="flex flex-col items-start w-full">
                    <label className="text-[#E3C485]" htmlFor="">Email :</label>
                    <input 
                        className="bg-white rounded-md pl-2 text-base" 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="flex flex-col items-start w-full">
                    <label className="text-[#E3C485]" htmlFor="">Password :</label>
                    <input 
                        className="bg-[#FDFDFB] rounded-md pl-2 text-base" 
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <button 
                    className="mt-2 border border-[#E3C485] px-4 py-1 text-[#E3C485] font-bold hover:cursor-pointer w-full rounded-sm hover:bg-[#E3C485] hover:text-[#16171F] transition duration-300 ease-in-out flex justify-center"
                    >{loading
                        ? <LoadingIcon stroke="#E3C485"/>
                        : 'Login'
                    }
                </button>
            </form>
    )
}