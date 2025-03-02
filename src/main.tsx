import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppRouter } from './AppRouter.tsx'
import { ModalProvider } from './components/Modal/context/ModalContext.tsx'
import { Modal } from './components/Modal/Modal.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <App>
        <AppRouter/>
        <Modal></Modal>
      </App>
    </ModalProvider>
  </StrictMode>,
)
