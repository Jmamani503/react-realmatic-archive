import { Fanart } from "@/models/fanart"
import { create } from "zustand"

interface UserInfoState {
    id: number
    picture: string
    user_id: string
    username: string
    created_at: string
}

interface  UserState  {
    access_token: string
    setToken: (token: string) => void
    removeToken: () => void
    userinfo: UserInfoState | null
    setUserinfo: (userinfo: UserInfoState) => void
    removeUserinfo: () => void
    fanarts: Fanart[]
    setFanarts: (updatedFanarts: Fanart[], page:number) => void
    toggleLike: (fanartId: string, liked: boolean) => void
}

const currentToken = localStorage.getItem('sb-thmpqgqdvhnifchysldc-auth-token')
const userinfo = localStorage.getItem('userinfo')

export const useUserStore = create<UserState> ((set) => ({
    access_token: currentToken ?  JSON.parse(currentToken).access_token : '',
    setToken: (token) => set(() => ({ access_token: token})),
    removeToken: () => set(() => ({access_token: ''})),
    userinfo: userinfo ?  JSON.parse(userinfo) : null,
    setUserinfo: (userinfo) => set(() => ({userinfo: userinfo})) ,
    removeUserinfo: () => {
        localStorage.removeItem('userinfo')        
        set(() => ({userinfo: null}))
    },
    fanarts: [],
    setFanarts: (updatedFanarts, page) => set(state => {
        return { fanarts : page === 0 ? updatedFanarts : [...state.fanarts, ...updatedFanarts]}
      }),
      toggleLike: (fanartId, liked) => set(state => {
        const updatedFanarts = state.fanarts.map(fanart =>
            fanart.id === fanartId ? { 
              ...fanart, 
              liked: !fanart.liked, 
              likes_count: liked ? fanart.likes_count - 1 : fanart.likes_count + 1  
            } : fanart
        );
        return { fanarts: updatedFanarts };
    }),
}))