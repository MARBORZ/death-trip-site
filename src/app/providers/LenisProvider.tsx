import Lenis from 'lenis'
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

import { LenisContext } from '../context/useLenis'

export default function LenisProvider({ children }: { children: ReactNode }) {
    const [lenis] = useState<Lenis | null>(() => new Lenis())

    useEffect(() => {
        if (!lenis) return;

        function raf(time: number) {
            lenis?.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)


        return () => lenis.destroy()
    }, [lenis])

    return (
        <LenisContext.Provider value={lenis}>
            {children}
        </LenisContext.Provider>
    )
}