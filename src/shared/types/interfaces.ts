import type Lenis from "lenis"

export interface INavArrowsProps {
    sections: string[]
    lenis: Lenis | null
    currentIndex: number
    scrollStep? : number
    onIndexChange: (index: number) => void
}


