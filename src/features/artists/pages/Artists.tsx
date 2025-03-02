import { ArtistCard } from "../components/ArtistCard"
import { useArtistsStore } from "../../../store/useArtistsStore"
import { useGetArtists } from "../services/useGetArtists"
import { LoadingIcon } from "@/components/icons/LoadingIcon"

export const Artists = () => {

    const { artists } = useArtistsStore()
    const { loading } = useGetArtists()

    return (
        <main className="bg-[#132F3D] flex-grow">
            <div className="max-w-6xl mx-auto flex flex-col gap-6 p-6">
                <h1 className="text-[#FAF5DE] font-semibold text-xl font-lora">Artists</h1>
                { loading ? 
                    <div className="flex justify-center">
                        <div className="w-12 h-12">
                            <LoadingIcon height={42} width={42} stroke="#E3C485" />
                        </div>
                    </div>
                    :
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 ">
                        {artists.map((artist) => (
                            <ArtistCard key={artist.id} artist={artist} />
                        ))}
                    </div>
                }
            </div>
        </main>
    )
}