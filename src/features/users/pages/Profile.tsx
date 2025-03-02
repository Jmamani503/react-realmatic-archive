import { FanartList } from "@/components/common/FanartList"
import { useModalContext } from "@/components/Modal/context/ModalContext"
import { ReadBook } from "@/features/users/components/ReadBook"
import { useGetLikedFanarts } from "@/features/users/services/useGetLikedFanarts"
import { useUserStore } from "@/store/useUserStore"
import { useState } from "react"

export const Profile = () => {

    const [page, setPage] = useState(0);
    const { userinfo, fanarts } = useUserStore()
    const { loading, hasMore } = useGetLikedFanarts(userinfo?.user_id, page)
    const { setIsOpen, setContent } = useModalContext()
    

    if(!userinfo){
        return null
    }

    const handleClick = () => {
        setContent(<ReadBook user_id={userinfo?.user_id}></ReadBook>)
        setIsOpen(true)
    }

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1)
    }

    return (
        <main className="bg-[#132F3D] flex-grow">
            <div className="max-w-6xl mx-auto flex flex-col gap-4 p-6">
                <div className=" border-[#E3C485] rounded-lg flex flex-col items-center justify-center gap-4">
					<div className="flex min-w-fit">
						<img src={userinfo?.picture} alt="" className="w-32 h-32 rounded-full" />
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="text-xl text-[#E3C485] font-lora font-bold">{userinfo?.username}</h3>
                        <button 
                            className="border border-[#E3C485] px-4 py-2  text-[#E3C485] cursor-pointer text-sm hover:bg-[#E3C485] hover:text-[#172937] transition duration-300 ease-in-out font-semibold hover:scale-105 w-full rounded-sm font-lora text-center"
                            onClick={handleClick}
                            >Edit
                        </button>
					</div>
				</div>
                <FanartList 
                    fanarts={fanarts} 
                    hasMore={hasMore} 
                    loadMore={handleLoadMore} 
                    loading={loading}
                    message="You haven’t liked any fan art yet. Start exploring and save your favorites!"
                />
            </div>
        </main>
    )
}