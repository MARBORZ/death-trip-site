import Lenis from 'lenis'
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { LenisContext } from '../context/useLenis'

export default function LenisProvider({ children }: { children: ReactNode }) {
    const [lenis, setLenis] = useState<Lenis | null>(null)

    useEffect(() => {
        const lenis = new Lenis()
        setLenis(lenis)

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => lenis.destroy()
    }, [])

    return (
        <LenisContext.Provider value={lenis}>
        {children}
        </LenisContext.Provider>
    )
}