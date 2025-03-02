import { useUserStore } from "@/store/useUserStore"
import supabase from "../../../helpers/api"
import { useArtistProfileStore } from "../../../store/useArtistProfileStore"
import { useFanartsStore } from "../../../store/useFanartStore"

export const toggleLike = async (fanart_id: string, user_id: string, liked: boolean) => {

    try {
        useFanartsStore.getState().toggleLike(fanart_id, liked)
        useArtistProfileStore.getState().toggleLike(fanart_id, liked)
        useUserStore.getState().toggleLike(fanart_id, liked)
        if(liked){
            const { error } = await supabase
                .from('likes')
                .delete()
                .match({ fanart: fanart_id, user: user_id });
            if (error) {
                console.log(error);
                useFanartsStore.getState().toggleLike(fanart_id, false)
                useArtistProfileStore.getState().toggleLike(fanart_id, false)
                useUserStore.getState().toggleLike(fanart_id, false)
                throw error;
            }
            if (!error) {
                console.log("Unliked successfully!")
            }

        }else{
            const { data, error } = await supabase
                .from('likes')
                .insert([{ fanart: fanart_id, user: user_id }])
                .select();
            if (error) {
                console.log(error);
                useFanartsStore.getState().toggleLike(fanart_id, true)
                useArtistProfileStore.getState().toggleLike(fanart_id, true)
                useUserStore.getState().toggleLike(fanart_id, true)

                throw error;
            }
            if (data) {
                console.log("Liked successfully!")
            }
        }   
    } catch (error) {
        // useFanartsStore.getState().toggleLike(fanart_id,!liked)
        // useArtistProfileStore.getState().toggleLike(fanart_id,!liked)
        console.error("Error toggling like:", error)

    }
}