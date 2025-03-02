import supabase from "@/helpers/api"
import { Artist } from "@/models/artist"
import { useArtistProfileStore } from "@/store/useArtistProfileStore"
import { useCallback, useEffect, useState } from "react"

export const useGetArtistBySlug = (slug: string|undefined) => {

    const [loading, setLoading] = useState(false)

    const getArtist = useCallback(async () => {
        setLoading(true)

        try {
            const { data, error } = await supabase
            .rpc('get_artist_by_slug', { artist_slug: slug })
            .single() 

            if (error) throw error
            useArtistProfileStore.getState().setArtist(data as Artist)
        } catch (error) {
            console.error(error)
            
        } finally {
            setLoading(false)
        }
    },[slug])

    useEffect(() => {
        if(slug) getArtist()
    },[getArtist, slug])
    
    return { loading}
}