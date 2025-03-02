import { Artist } from "./artist"
import { Book } from "./book"
import { Like } from "./like"

export interface Fanart {
    id: string
    title: string
    image_url: string
    book: Book
    artist: Artist
    isSpoiler: boolean
    likes: Like[]
    likes_count: number
    liked: boolean
    isVertical: boolean
}