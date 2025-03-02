import { ReactNode } from "react"
import { Footer } from "./components/layout/Footer"
import { Navbar } from "./components/layout/Navbar"
import { BrowserRouter } from "react-router-dom"

interface Props {
  children: ReactNode
}

function App({ children }: Props) {

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen"> 
        <Navbar />
        {children}
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
