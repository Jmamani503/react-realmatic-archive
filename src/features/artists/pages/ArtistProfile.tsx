import { useParams } from "react-router-dom"
import { useArtistProfileStore } from "../../../store/useArtistProfileStore";
import { useUserStore } from "../../../store/useUserStore";
import { useGetArtistBySlug } from "@/features/artists/services/useGetArtistBySlug";
import { useGetFanartsByArtist } from "../services/useGetFanartsByArtist";
import { ArtistInfoSkeleton } from "../components/ArtistInfoSkeleton";
import { ArtistInfo } from "../components/ArtistInfo";
import { useState } from "react";
import { FanartList } from "@/components/common/FanartList";

export const ArtistProfile = () => {

	const { slug } = useParams()
	const [ page, setPage] = useState(0);
	const { fanarts, artist  } = useArtistProfileStore()
	const { userinfo } = useUserStore()
	const { loading : loadingArtist } = useGetArtistBySlug(slug)
	const { loading: loadingFanarts, hasMore } = useGetFanartsByArtist(slug, userinfo?.user_id,page)

	if (!artist && !loadingArtist) return <p>Artista no encontrado</p>;

	const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1)
    } 
	
	return (
		<section className="bg-[#172937] flex-grow">
			<main className="max-w-6xl mx-auto flex flex-col gap-6 p-6">
				{ 
					loadingArtist 
					? <ArtistInfoSkeleton />	
					:<ArtistInfo artist={artist}/>
				}
				<FanartList 
					fanarts={fanarts} 
					hasMore={hasMore} 
					loading={loadingFanarts} 
					loadMore={handleLoadMore}
					message="No fan art from this artist yet. Check back later!"
				/>
			</main>
		</section>
	)
}