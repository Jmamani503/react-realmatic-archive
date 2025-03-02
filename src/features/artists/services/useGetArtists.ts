import supabase from "@/helpers/api"
import { useArtistsStore } from "@/store/useArtistsStore"
import { useCallback, useEffect, useState } from "react"

export const useGetArtists = () => {

    const [loading, setLoading] = useState(false)

    const getArtists = useCallback( async() => {
        setLoading(true)
        try {
            const { data, error } = await supabase
                .rpc('get_artists_with_counts')
                .select('*')

            if (error) throw error
            useArtistsStore.getState().setArtists(data)

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    },[])

    useEffect(() => {
        getArtists()
    },[getArtists])

    return { loading }
}