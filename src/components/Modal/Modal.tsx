import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { useModalContext } from "./context/ModalContext"

export const Modal = () => {

    const { isOpen, setIsOpen, content, setContent } = useModalContext()
    const modalRef = useRef<HTMLDivElement>(null)
    const modalRoot = document.getElementById("modal")

    useEffect(() => {
        const handleEscKey = (e: KeyboardEvent) => {
            if(e.key === 'Escape'){
                setIsOpen(false)
            }
        }
        if(isOpen) {
            document.addEventListener("keydown", handleEscKey)
        }
        return () => {
            document.removeEventListener("keydown", handleEscKey)
        }
    }, [isOpen, setIsOpen])
    
    const handlePropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    const closeModal = () => {
        setIsOpen(false)
        setContent(null)
    }

    if(!isOpen || !modalRoot || !content){
        return null
    }

    return createPortal(
        <div 
            className="fixed inset-0 w-full h-full flex justify-center items-center bg-[#16171F]/80 max-h-screen" 
            onClick={closeModal}
            >
            <div 
                onClick={handlePropagation}
                className="bg-[#172937] border border-[#E3C485] rounded-md relative max-h-full"  
                ref={modalRef}
            >
                <button 
                    className="absolute top-2 right-4 text-[#E3C485] font-bold text-xl hover:cursor-pointer hover:scale-110 transition-transform ease-in-out" 
                    onClick={closeModal}
                    >&times;
                </button>
                {content}
            </div>
        </div>  
        , modalRoot
    )


}