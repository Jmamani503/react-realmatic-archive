import { create } from "zustand";
import { Artist } from "../models/artist";

interface ArtistsState {
    artists: Artist[]
    setArtists: (artists: Artist[]) => void
}

export const useArtistsStore = create<ArtistsState>((set) => ({
    artists: [],
    setArtists: (artists) => set(() => ({artists}))
}))