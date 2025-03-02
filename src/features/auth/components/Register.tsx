import { useState } from "react"
import { useRegister } from "../services/useRegister"
import { LoadingIcon } from "@/components/icons/LoadingIcon"

export const Register = () => {

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState('')
    const [ username, setUsername ] = useState('')
    const { register, error, loading } = useRegister()


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // setMessage("");
        // const { data, error } = await supabase.auth.signUp({
        //   email: email,
        //   password: password,
        // });
        // if (error) {
        //   setMessage(error.message);
        //   return;
        // }
        // if (data) {
        //   setMessage("User account created!");
        // }
        // setEmail("");
        // setPassword("");

        register(email, password, username)
      };


      return (
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
                {error && <span className="text-red-400 text-sm">{error}</span>}
                <div className="flex flex-col items-start w-full">
                    <label className="text-[#E3C485]" htmlFor="">Email :</label>
                    <input 
                        className="bg-[#FDFDFB] rounded-md pl-2 text-base" 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="flex flex-col items-start w-full">
                    <label className="text-[#E3C485]" htmlFor="">Username :</label>
                    <input 
                        className="bg-[#FDFDFB] rounded-md pl-2 text-base" 
                        type="text" 
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
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
                    className="mt-2 border border-[#E3C485] px-4 py-1 text-[#E3C485] font-bold hover:cursor-pointer w-full rounded-sm hover:bg-[#E3C485] hover:text-[#16171F] transition duration-300 ease-in-out"
                    >{
                        loading
                            ? <LoadingIcon stroke="#E3C485"/>
                            : 'Register'
                    }
                </button>
            </form>
    )
}