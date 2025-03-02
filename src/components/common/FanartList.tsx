import { Fanart } from "@/models/fanart";
import { LoadingIcon } from "../icons/LoadingIcon";
import { FanartCard } from "./FanartCard";

interface Props {
    loading: boolean
    fanarts: Fanart[]
    loadMore: () => void
    hasMore: boolean
    message: string
}

export const FanartList = ({ loading, fanarts, hasMore, loadMore, message}: Props) => {
  
    if(loading && fanarts.length === 0) {
        return (
            <div className="flex justify-center">
                <LoadingIcon height={42} width={42} stroke="#E3C485" />
            </div>
        )
    }

    if (fanarts.length === 0) {
        return <h1 className="text-[#FDFDFB] font-lora text-center font-lg mt-6">{message}</h1>
    }    

    return (
        <>
        <section
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6"
            style={{ gridAutoFlow: "dense" }}
            >
                {
                    fanarts.map((fanart) => (
                        <FanartCard fanart={fanart} showArtist={true} key={fanart.id} />
                    ))
                }
            
        </section>
        {
            loading && fanarts.length > 0 
                ?   <div className="flex justify-center">
                        <LoadingIcon height={42} width={42} stroke="#E3C485" />
                    </div>
                : ''
                }
        {
            hasMore 
            &&  <button
                    onClick={loadMore}
                    className="border border-[#E3C485] px-4 py-2 text-[#E3C485] cursor-pointer text-sm md:text-lg hover:bg-[#E3C485] hover:text-[#172937] transition duration-300 ease-in-out font-semibold hover:scale-105 rounded-sm font-lora"
                    disabled={loading}
                    >
                        {loading ? "Cargando..." : "Load More"}
                </button> 
        }
        </>
  )
}
