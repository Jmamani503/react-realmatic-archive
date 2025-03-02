import { useFanartsStore } from "../../../store/useFanartStore"
import { useUserStore } from "@/store/useUserStore"
import { useGetFanarts } from "../services/useGetFanarts"
import { useState } from "react"
import { SearchIcon } from "@/components/icons/Searchicon"
import { FanartList } from "@/components/common/FanartList"

export const Fanarts = () => {

    const { userinfo } = useUserStore()
    const { query, setQuery, fanarts } = useFanartsStore()
    const [ page, setPage] = useState(0);
    const [ search, setSearch] = useState(query)
    const { loading, hasMore } = useGetFanarts(query, userinfo?.user_id, page)

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setQuery(search)
        setPage(0)
    }
    
    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1)
    }

    return (
        <main className="bg-[#132F3D] flex-grow">
            <div className="max-w-6xl mx-auto flex flex-col gap-6 p-6">
                <section className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                    <h3 className="text-[#FDFDFB] font-semibold text-xl font-lora">Latest Fanarts added</h3>
                    <form className="flex items-center h-8" onSubmit={handleSearch}>
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            className='bg-[#FDFDFB] rounded-l-2xl pl-4 h-full  w-full sm:min-w-xs pb-0.5 font-lora text-[#172937] focus:outline-none cursor-text caret-[#132F3D] text-sm'
                            type="text"
                            placeholder="Search a character or book..."
                        />
                        <button
                            type="submit"
                            className="border border-[#E3C485] px-4 py-1 text-[#E3C485] font-bold hover:cursor-pointer w-full rounded-r-2xl hover:bg-[#172937]  transition duration-300 ease-in-out h-full max-w-fit"
                        >
                           <SearchIcon />
                        </button>
                    </form>
                </section>
                <FanartList loading={loading} fanarts={fanarts} hasMore={hasMore} loadMore={handleLoadMore} message="No results found. Try searching for something else or check back later!"/>
            </div>
        </main>
    )
}