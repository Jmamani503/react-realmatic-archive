import { Link } from "react-router-dom"
import { Fanart } from "@/models/fanart"
import { useModalContext } from "../Modal/context/ModalContext"
import { useUserStore } from "@/store/useUserStore"
import { AuthManager } from "@/features/auth/pages/AuthManager"
import { toggleLike } from "@/features/fanarts/services/toggleLike"

interface Props {
    fanart: Fanart
    showArtist: boolean
}

export const FanartCard = ({ fanart, showArtist }: Props) => {

    const {userinfo} = useUserStore()
    const { setIsOpen, setContent } = useModalContext()

    const openFanart = () => {
        setContent(
            <img src={fanart.image_url} className="max-w-full max-h-[80vh] object-contain rounded-md break-inside-avoid" alt={fanart.title}></img>
        )
        setIsOpen(true)
    }

    const handleLike = () => {
        if(userinfo){
            toggleLike(fanart.id, userinfo.user_id, fanart.liked)
        }else{
            setContent(<AuthManager />)
            setIsOpen(true)
        }
    }
    
    return (
        <div className={`relative overflow-hidden rounded-lg  border border-[#E3C485] max-h-fit ${fanart.isVertical ? "col-span-1" : "col-span-1 sm:col-span-2"}`} >
            <button className="w-full cursor-pointer overflow-hidden" onClick={openFanart}>
                <img 
                    className={`hover:scale-105 transition-transform duration-300 ease-in-out h-96 object-cover w-full rouded-md ${fanart.isSpoiler ? 'blur-xl' : 'blur-none'}`}
                    src={fanart.image_url} alt="" 
                />
            </button>
            <div className="flex flex-col p-4">
                <div className="flex justify-between">
                    <h3 className="text-[#FDFDFB] font-light text-sm font-lora min-h-10">{fanart.book.title}</h3>
                    <div className="flex items-center self-start gap-1">
                        <button className="cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out" onClick={handleLike}>
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  className={fanart.liked && userinfo ? "fill-[#E3C485] stroke-[#E3C485]" : "stroke-[#E3C485]" } stroke="none" fill="none" strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                        </button>
                        <span className="text-[#E3C485]">{fanart.likes_count}</span>
                    </div>
                </div>
                {/* <h3 className="text-[#F9F5DF] font-light text-sm font-lora">{fanart.book.title}</h3> */}
                { showArtist && 
                
                <Link to={`/artists/${fanart.artist.slug}`} className="flex items-center self-end gap-2 hover:scale-105 transition duration-300 ease-in-out">
                    <h3 
                        className="text-[#E3C485] font-semibold text-sm font-lora"
                        >{fanart.artist.name}
                    </h3>
                    <img src={fanart.artist.profile_picture} alt="" className="w-8 h-8 rounded-full" />
                </Link>
                }
            </div>
        </div>
    )
}
