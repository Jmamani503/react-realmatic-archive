import { useModalContext } from "@/components/Modal/context/ModalContext"
import supabase from "@/helpers/api"
import { useUserStore } from "@/store/useUserStore"
import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {
  
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const { setToken, setUserinfo } = useUserStore()    
    const { setIsOpen } = useModalContext()

    const login = useCallback(async(email: string, password: string) => {
        setLoading(true)
        setError(null)
        try {
            const { data, error } = await supabase.auth.signInWithPassword({email,password})
            if(error) {
                setError(error.message)
                return
            }
            if(data) {
                setToken(data.session.access_token)
                const { data: userInfo, error: userInfoError } = await supabase
                .from("users_info")
                .select("*")
                .eq('user_id', data.user.id)
                .single()

                if(userInfoError) setError(userInfoError.message)
                
                localStorage.setItem('userinfo', JSON.stringify(userInfo))
                setUserinfo(userInfo)
                setIsOpen(false)
                navigate("/fanarts")
            }

        } catch (error) {
            console.log(error)
            setError('Ups something went wrong try again')
        } finally {
            setLoading(false)
        }

    }, [])

    return { login, loading, error }
}
