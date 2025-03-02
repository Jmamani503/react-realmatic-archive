import { useModalContext } from "@/components/Modal/context/ModalContext"
import supabase from "@/helpers/api"
import { useUserStore } from "@/store/useUserStore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const useRegister = () => {

    const navigate = useNavigate()
    const { setIsOpen } = useModalContext()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const { setToken, setUserinfo } = useUserStore()    
    
    const register = async (email: string, password: string, username: string) => {
        setError(null)
        setLoading(true)
        try {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
            })
            if(error) {
                setError(error.message)
                return 
            }
            if(data.session){
                setToken(data.session.access_token)
                const { data: user, error: userError } = await supabase
                    .from('users_info')
                    .insert([
                        { username: username, user_id: data.user?.id},
                    ])
                    .select()
                    .single()
                
                if(userError) setError(userError.message)
                
                console.log('info del user_info', user)
                localStorage.setItem('userinfo', JSON.stringify(user))
                setUserinfo(user)
                setIsOpen(false)
                navigate("/profile")

            }

        } catch (error) {
            console.log(error)
            setError('Ups something went wrong try again')
        } finally {
            setLoading(false)
        }
    }

    return { register, loading, error}
}
