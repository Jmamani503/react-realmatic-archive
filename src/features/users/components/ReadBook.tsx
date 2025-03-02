import { useGetReadBooks } from "@/features/users/services/useGetReadBooks"
import { Book } from "@/models/book"
import { useUserStore } from "@/store/useUserStore"
import { useEffect, useState } from "react"
import { useUpdateReadBooks } from "../services/useUpdateReadBooks"
import { LoadingIcon } from "@/components/icons/LoadingIcon"

interface Props {
  user_id: string
}

export const ReadBook = ({user_id}: Props) => {
    const { userinfo } = useUserStore()
    const { data, loading } = useGetReadBooks(user_id)
    const { loading: loaddingUpdate, updateReadBooks }  = useUpdateReadBooks()
    const [updatedBooks, setUpdatedBooks] = useState<Book[]>([]);

    useEffect(() => {
      setUpdatedBooks(data);
      console.log('data upt', data)
    }, [data]);

    const handleCheckboxChange = (bookId: string) => {
      setUpdatedBooks(updatedBooks.map(book =>
        book.id === bookId ? { ...book, is_read: !book.is_read } : book
      ));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
      e.preventDefault()
      console.log(updatedBooks)
      updateReadBooks(updatedBooks, user_id)
    }

  return (
    <div className="text-[#E3C485] p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl font-bold text-center">Read Books</h1>
        <div className="">

        { loading 
          ? <LoadingIcon /> 
        : updatedBooks.map(book => (
          <div key={book.id} className="flex gap-2">
            <input
              type="checkbox"
              id={book.id}
              name={book.id}
              value={book.id}
              checked={book.is_read}
              onChange={() => handleCheckboxChange(book.id)} 
              />
            <label htmlFor={book.id}>{book.title}</label>
          </div>
        ))}
        </div>  
          <button 
            className="border border-[#E3C485] px-4 py-2  text-[#E3C485] cursor-pointer text-sm hover:bg-[#E3C485] hover:text-[#172937] transition duration-300 ease-in-out font-semibold hover:scale-105 w-full rounded-sm font-lora text-center"
            type="submit"
            >{loaddingUpdate
                ? <LoadingIcon stroke="#E3C485"/>
                : 'Save'
              }
          </button>
      </form>
      </div>
  )
}
