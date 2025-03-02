import { HeartIcon } from "@/components/icons/HeartIcon"
import { ImageIcon } from "@/components/icons/ImageIcon"
import { LinkIcon } from "@/components/icons/LinkIcon"
import { Artist } from "@/models/artist"

interface Props {
    artist: Artist|null
}
export const ArtistInfo = ({artist}: Props) => {

    return (
        <div className="border border-[#E3C485] rounded-lg flex flex-col p-4 gap-4 sm:flex-row">
					<div className="flex justify-center min-w-fit">
						<img src={artist?.profile_picture} alt="" className="rounded-full w-72 h-72" />
					</div>
					<div className="flex flex-col justify-center gap-4">
						<h3 className="text-3xl text-[#E3C485] font-lora font-bold">{artist?.name}</h3>
						<p className="text-xl text-[#FAF5DE] font-lora font-light">{artist?.bio}</p>
						<div className="flex gap-2">
							<div className="flex gap-1 items-center">
								
								<ImageIcon stroke="#E3C485"/>
								<span className="text-[#E3C485] font-light text-base">{artist?.fanarts_count}</span>
							</div>
							<div className="flex gap-1 items-center">
								<HeartIcon stroke="#E3C485" fill="#E3C485"/>
								<span className="text-[#E3C485] font-light text-base">{artist?.likes_count}</span>
							</div>
						</div>
						<div className="flex gap-4">
							<LinkIcon stroke="#E3C485"/>
							<div className="flex gap-2">
								<div className="text-[#E3C485] ">
									Twitter
								</div>
								<div className="text-[#E3C485] ">
									Linkein
								</div>
								<div className="text-[#E3C485] ">
									Instagram
								</div>
							</div>
						</div>
					</div>
				</div>
    )
}