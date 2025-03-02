import supabase from "@/helpers/api"
import { Fanart } from "@/models/fanart"
import { useUserStore } from "@/store/useUserStore"
import { useCallback, useEffect, useState } from "react"

export const useGetLikedFanarts = (user_id: string|undefined, page: number) => {

  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const PAGE_QUANTITY = 4

  const getLikedFanarts = useCallback(async() => {
    setLoading(true)
    setError(null)
    setHasMore(true) 
    try {
      const { data, error } = await supabase
        .rpc('get_fanarts_liked_by_user', 
          {
            p_user_id: user_id,
            p_offset: page * PAGE_QUANTITY , 
            p_limit: PAGE_QUANTITY
          })
        
      if (error) throw error

      const fanarts: Fanart[] = data.data
      console.log(data.data)
      useUserStore.getState().setFanarts(fanarts, page)
      if(data.quantity <= page * PAGE_QUANTITY + PAGE_QUANTITY){
        setHasMore(false)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [user_id, page])

  useEffect(() => {
    // if(useUserStore.getState().fanarts.length < 1){

      getLikedFanarts()
    // }
  }, [getLikedFanarts])

  return { loading, error, hasMore }
}
