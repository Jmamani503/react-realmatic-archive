import supabase from "../../../helpers/api"
import { Artist } from "../../../models/artist"   
import { Fanart } from "../../../models/fanart"
import { useArtistProfileStore } from "../../../store/useArtistProfileStore";


export const getArtists = async () => {

    try {
        const { data, error } = await supabase.rpc('get_artists_with_counts').select('*')

        if(error) console.log(error)

        if(data){
            console.log(data)
        }
    } catch (error) {
        console.error(error)
        
    }
}

export const getArtistBySlug = async (slug: string) => {
    try {
        const { data, error } = await supabase
            .rpc('get_artist_by_slug', { artist_slug: slug })
            .single()
            
        if(error) console.log(error)

        if(data){
            console.log(data)
            useArtistProfileStore.getState().setArtist(data as Artist)
        }
    } catch (error) {
        console.error(error)
        
    }
}

export const getFanartsByArtist = async (slug: string, user_id: string|undefined) => {
    try {
        const { data, error } = await supabase
            .rpc('get_fanarts_by_artist', { p_user_id: user_id, p_artist_slug: slug})

        if (error) console.log(error)

        if (data) {
            
            console.log(data)
            useArtistProfileStore.getState().setFanarts(data as Fanart[])
        }
    } catch (error) {
        console.error(error)

    }
}
