import Lenis from 'lenis'
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { LenisContext } from '../context/useLenis'

export default function LenisProvider({ children }: { children: ReactNode }) {
    const [lenis, setLenis] = useState<Lenis | null>(null)

    useEffect(() => {
        const lenis = new Lenis({
            smoothWheel: true,
            lerp: 0.1,
            overscroll: false,
        })
        setLenis(lenis)

        let rafId: number

        function raf(time: number) {
            lenis.raf(time)
            rafId = requestAnimationFrame(raf)
        }

        rafId = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(rafId)
            lenis.destroy()
        }
    }, [])

    return (
        <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
    )
}
