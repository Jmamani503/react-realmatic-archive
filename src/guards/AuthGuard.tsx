import { useUserStore } from "@/store/useUserStore"
import { Navigate, Outlet } from "react-router-dom"

export const AuthGuard = () => {
  
    const { access_token, userinfo } = useUserStore()
    const isAuthenticated = access_token && userinfo?.user_id

    return isAuthenticated ? <Outlet /> : <Navigate to={"/home"} replace/>  
}
