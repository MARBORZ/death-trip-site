import Lenis from "lenis"

export interface INavArrowsProps {
    sections: string[]
    lenis: Lenis | null
    currentIndex: number
    onIndexChange: (index: number) => void
}


