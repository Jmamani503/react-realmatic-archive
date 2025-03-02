import { useModalContext } from "@/components/Modal/context/ModalContext";
import supabase from "@/helpers/api";
import { Book } from "@/models/book";
import { useCallback, useState } from "react"

export const useUpdateReadBooks = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { setIsOpen } = useModalContext()

    const updateReadBooks = useCallback(async(books: Book[], user_id: string) => {
        setLoading(true)
        setError('')
        try {
            const { error } = await supabase
            .rpc('update_read_books', {p_user_id: user_id,books: books})

            if(error) throw error
            console.log('actualizacion correcta')
            setIsOpen(false)

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }, []) 
    
    return { updateReadBooks, loading , error }
}
