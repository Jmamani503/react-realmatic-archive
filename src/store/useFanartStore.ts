import { create } from "zustand"
import { Fanart } from "../models/fanart"

interface SearchState {
    query: string
    setQuery: (updatedQuery: string) => void
    fanarts: Fanart[]
    setFanarts: (updatedFanarts: Fanart[], from: number) => void
    toggleLike: (fanartId: string, liked: boolean) => void
    like : (fanart_id: string) => void
    unlike: (fanart_id: string) => void
}


export const useFanartsStore = create<SearchState>((set) => ({
    query: '',
    setQuery: (updatedQuery) => set(() => ({query: updatedQuery})),
    fanarts: [],
    setFanarts: (updatedFanarts, from) => set(state => {
      return { fanarts : from === 0 ? updatedFanarts : [...state.fanarts, ...updatedFanarts]}
    }),
    toggleLike: (fanartId, liked) => set(state => {
      console.log(fanartId, liked)
      const updatedFanarts = state.fanarts.map(fanart =>
          fanart.id === fanartId ? { 
            ...fanart, 
            liked: !liked, 
            likes_count: liked ? fanart.likes_count - 1 : fanart.likes_count + 1  
          } : fanart
      );
      return { fanarts: updatedFanarts }
  }),
    like: (fanart_id) => set((state) => ({
      fanarts: state.fanarts.map((fanart) => (
        fanart.id === fanart_id ? { ...fanart, likes_count: fanart.likes_count + 1, liked: true } : fanart
      ))
    })),
    unlike: (fanart_id) => set((state) => ({
      fanarts: state.fanarts.map((fanart) => (
        fanart.id === fanart_id ? { ...fanart, likes_count: fanart.likes_count - 1, liked: false } : fanart
      ))
    }))

    }))