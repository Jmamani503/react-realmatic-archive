import { useCallback, useEffect, useState } from "react"
import supabase from "../../../helpers/api"
import { useFanartsStore } from "../../../store/useFanartStore"
import { Fanart } from "@/models/fanart"

export const useGetFanarts = (query: string, user_id: string|undefined, page: number) => {

    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const PAGE_QUANTITY = 4

    const getData = useCallback( async () => {
        setLoading(true)
        setError(null)
        setHasMore(true)  
        try {
            const { data, error } = await supabase
            .rpc(
                'get_fanarts_searched',
                {   
                    p_user_id: user_id ?? null
                    , p_search_term: query, 
                    p_offset: page * PAGE_QUANTITY , 
                    p_limit: PAGE_QUANTITY
                }
            )

            if (error) throw error
            const fanarts: Fanart[] = data.data
            useFanartsStore.getState().setFanarts(fanarts, page)
            if(data.quantity <= page * PAGE_QUANTITY + PAGE_QUANTITY){
                setHasMore(false)
            }
        } catch (error) {
            console.error(error)
            //handle error
        } finally {
            setLoading(false)
        }
    },[query, user_id, page])

    useEffect(() => {
        getData();
    },[getData])

    return { getData, error, loading, hasMore }
}