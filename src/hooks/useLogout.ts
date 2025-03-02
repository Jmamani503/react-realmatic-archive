import supabase from "@/helpers/api";
import { useUserStore } from "@/store/useUserStore";
import { useCallback, useState } from "react";

export const useLogout = () => {

    const { removeToken, removeUserinfo } = useUserStore();
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const logout = useCallback(async() => {
        setLoading(true)
        setError(null)

        try {
            const { error } = await supabase.auth.signOut()
            if (error) {
                throw new Error(error.message)
            }
            removeToken()
            removeUserinfo()
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Error desconocido al cerrar sesión";
            setError(errorMessage);
        } finally {
            setLoading(false)
        }
    }, [])

    return { logout, error , loading } 
}