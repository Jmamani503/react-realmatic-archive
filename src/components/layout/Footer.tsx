import { Link } from "react-router-dom"

export const Footer = () => {

    return (
        <section className="bg-[#172937] text-[#FAF5DE] border-t border-[#E3C485]">
            <main className="max-w-6xl mx-auto p-6">
                <div className="flex flex-col gap-4 justify-center sm:flex-row sm:gap-16 ">
                    <div>
                        <h3 className="font-black text-[#E3C485] font-cinzel text-base sm:text-xl">Realmatic Archive</h3>
                        <span className="font-lora text-sm sm:text-base">Your worlds inspire us, our art brings them to life.</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-[#E3C485] font-lora text-base sm:text-lg">Navigation</h3>
                        <ul className="mt-2">
                            <li><Link to="/fanarts" className="hover:underline font-lora text-sm sm:text-base">Explore Fanarts</Link></li>
                            <li><Link to="/artists" className="hover:underline font-lora text-sm sm:text-base">Artists</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-[#E3C485] font-lora text-base sm:text-lg">Community & Resources</h3>
                        <ul className="mt-2">
                            <li><a href="https://www.brandonsanderson.com" target="_blank" className="hover:underline font-lora text-sm sm:text-base">Official Sanderson Website</a></li>
                            <li><a href="https://www.17thshard.com" target="_blank" className="hover:underline font-lora text-sm sm:text-base">The 17th Shard</a></li>
                            <li><a href="https://coppermind.net" target="_blank" className="hover:underline font-lora text-sm sm:text-base">Coppermind Wiki</a></li>
                            <li><a href="https://cosmere.es/" target="_blank" className="hover:underline font-lora text-sm sm:text-base">Cosmere.es</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-sm mt-6 font-lora">
                    <p>© 2025 Realmatic Archive. Fan-made project inspired by the Cosmere.</p>
                </div>
            </main>
        </section>
    )
}