import { create } from "zustand";
import { Fanart } from "../models/fanart";
import { Artist } from "../models/artist";

interface ArtistProfileState {
    artist: Artist | null
    setArtist: (artist: Artist) => void
    fanarts: Fanart[]
    setFanarts: (updatedFanarts: Fanart[], page: number) => void
    like : (fanart_id: string) => void
    unlike: (fanart_id: string) => void
    toggleLike: (fanartId: string, like: boolean) => void
}

export const useArtistProfileStore = create<ArtistProfileState>((set) => ({
    artist: null,
    setArtist: (artist) => set({artist}),
    fanarts: [],
    setFanarts: (updatedFanarts, page) => set(state => {
      return { fanarts : page === 0 ? updatedFanarts : [...state.fanarts, ...updatedFanarts]}
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
      })),
      toggleLike: (fanartId, liked) => set(state => {
        const updatedFanarts = state.fanarts.map(fanart =>
            fanart.id === fanartId ? { 
              ...fanart, 
              liked: !fanart.liked, 
              likes_count: liked ? fanart.likes_count - 1 : fanart.likes_count + 1  
            } : fanart
        );
        return { fanarts: updatedFanarts };
    })
    
}))