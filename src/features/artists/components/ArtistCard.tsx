import { Link } from "react-router-dom"
import { Artist } from "../../../models/artist"
import { ImageIcon } from "@/components/icons/ImageIcon"
import { HeartIcon } from "@/components/icons/HeartIcon"

interface Props {
    artist: Artist
}

export const ArtistCard = ({artist}: Props) => {

    return (
        <div className="border border-[#E3C485] p-4 flex flex-col gap-4 rounded-md justify-center items-center">
            <div className="max-w-fit flex justify-center items-center">
                <img src={artist.profile_picture} alt="" className="w-32 h-32 rounded-full " />
            </div>
            <div className="flex-grow flex flex-col gap-2 w-full">
                <h1 className="text-[#FAF5DE] font-bold text-lg text-center font-lora">{artist.name}</h1>
                <div className="flex justify-center">
                    <div className="flex gap-2 justify-center flex-grow">
                        <div className="flex gap-1 items-center">
                            <ImageIcon stroke="#E3C485"/>
                            <span className="text-[#E3C485] font-light text-sm">{artist.fanarts_count}</span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <HeartIcon fill="#E3C485" stroke="#E3C485"/>
                            <span className="text-[#E3C485] font-light text-sm">{artist.likes_count}</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 justify-end mt-2">
                    <Link 
                        to={`/artists/${artist.slug}`}
                        className="border border-[#E3C485] px-4 py-2  text-[#E3C485] cursor-pointer text-sm md:text-base hover:bg-[#E3C485] hover:text-[#172937] transition duration-300 ease-in-out font-semibold hover:scale-105 w-full rounded-sm font-lora text-center"
                        >View Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}