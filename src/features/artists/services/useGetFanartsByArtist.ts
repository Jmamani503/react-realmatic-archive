import supabase from "@/helpers/api"
import { Fanart } from "@/models/fanart"
import { useArtistProfileStore } from "@/store/useArtistProfileStore"
import { useCallback, useEffect, useState } from "react"

export const useGetFanartsByArtist = (slug: string|undefined, user_id: string|undefined, page: number) => {

    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const PAGE_QUANTITY = 4

    const getFanartsByArtist = useCallback(async() => {
        setLoading(true)
        setError(null)
        setHasMore(true) 
        try {
            const { data, error } = await supabase
            .rpc('get_fanarts_by_artist', {
                    p_user_id: user_id ?? null,
                    p_artist_slug: slug,
                    p_offset: page * PAGE_QUANTITY , 
                    p_limit: PAGE_QUANTITY
            })

            if (error) throw error
            const fanarts: Fanart[] = data.data
            useArtistProfileStore.getState().setFanarts(fanarts, page)
            if(data.quantity <= page * PAGE_QUANTITY + PAGE_QUANTITY){
                setHasMore(false)
            }
        } catch (error) {
            console.error(error)
            
        } finally {
            setLoading(false)
        }
    }, [user_id, slug, page])

    useEffect(() => {
        if(slug) getFanartsByArtist()
    }, [getFanartsByArtist, slug])

    return { loading, error, hasMore }
}