import { Link } from "react-router-dom"
import { useModalContext } from "../../components/Modal/context/ModalContext"
import { AuthManager } from "../auth/pages/AuthManager"

export const Home = () => {

    const { setIsOpen, setContent } = useModalContext()

    const openModal = () => {
        setContent(<AuthManager />)
        setIsOpen(true)
    }

    return (
        <main className="bg-[#132F3D] flex items-center flex-grow">
            <div className="max-w-6xl mx-auto flex flex-col gap-4 p-6">
                <section className="flex flex-col gap-4">
                    <h1 className="text-[#E3C485] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-[70vw] md:max-w-[50vw] font-cinzel">The Art of the <span className="text-[#E3C485]">Cosmere</span> Awaits You</h1>
                    <p className="text-[#FAF5DE] font-light text-base max-w-4xl md:text-xl font-lora">A world of art inspired by Sanderson’s universe—spoiler-free, just for you.</p>
                    <div className="pt-8 flex flex-col gap-4 sm:flex-row">
                        <button
                            onClick={openModal} 
                            className="border border-[#E3C485] px-4 py-2  text-[#E3C485] cursor-pointer text-sm md:text-lg
                            hover:bg-[#E3C485] hover:text-[#172937] transition duration-300 ease-in-out font-semibold hover:scale-105 rounded-sm font-lora"
                            >Log in & Track Your Progress
                        </button>  
                        <Link to="/fanarts" className="border border-[#E3C485] px-4 py-2 text-[#E3C485] hover:bg-[#E3C485] hover:text-[#172937] transition duration-300 ease-in-out font-semibold hover:scale-105 text-sm md:text-lg text-center rounded-sm font-lora">I've Read Everything – Show Me All</Link>  
                    </div>
                </section>
            </div>
        </main>

    )
}