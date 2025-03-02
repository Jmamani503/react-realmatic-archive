import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./features/home/Home"
import { Fanarts } from "./features/fanarts/pages/Fanarts"
import { Profile } from "./features/users/pages/Profile"
import { ArtistProfile } from "./features/artists/pages/ArtistProfile"
import { Artists } from "./features/artists/pages/Artists"
import { AuthGuard } from "./guards/AuthGuard"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/home"}/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/fanarts" element={<Fanarts />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/artists/:slug" element={<ArtistProfile />} />
            <Route element={<AuthGuard />}>
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    )
}