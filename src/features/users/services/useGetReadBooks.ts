import supabase from "@/helpers/api"
import { Book } from "@/models/book"
import { useCallback, useEffect, useState } from "react"

export const useGetReadBooks = (user_id: string|undefined) => {
  
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<Book[]>([])

    const getReadBooks = useCallback(async() => {
        setLoading(true)
        try {
        const { data, error } = await supabase
            .rpc('get_books_read_status', {p_user_id: user_id})

        if (error) throw error
        
        console.log(data)
        // useUserStore.getState().setFanarts(data as Fanart[])
        setData(data as Book[])
        } catch (error) {
        console.error(error)
        } finally {
        setLoading(false)
        }
    }, [user_id])

    useEffect(() => {
        getReadBooks()
    }, [getReadBooks])

  return { data,  loading }


}
