import type Lenis from 'lenis'
import { createContext, useContext } from 'react'

export const LenisContext = createContext<Lenis | null>(null)

export default function useLenis() {
    return useContext(LenisContext)
}



