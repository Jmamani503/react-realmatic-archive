import { ReactNode, createContext, useContext, useState } from "react";

export const ModalContext = createContext<{
    isOpen: boolean
    setIsOpen:  React.Dispatch<React.SetStateAction<boolean>>
    content: ReactNode
    setContent: React.Dispatch<React.SetStateAction<ReactNode>>
}>({
    isOpen: false,
    setIsOpen: () => null,
    content: null,
    setContent: () => null
}) 

interface ModalProviderProps {
    children: ReactNode
}

export const ModalProvider = ({children}: ModalProviderProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [content, setContent] = useState<ReactNode>(null)

    return (
        <ModalContext.Provider value={{isOpen, setIsOpen, content, setContent}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    const context = useContext(ModalContext)

    if(!context){
        throw new Error("Modal outside of provider")
    }

    return context
}