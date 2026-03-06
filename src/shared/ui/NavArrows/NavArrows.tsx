import { useEffect, useState } from "react"
import type Lenis from 'lenis'

export default function NavArrows({ sections, lenis }: { sections: string[], lenis: Lenis | null }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isFooterVisible, setIsFooterVisible] = useState(false)

    useEffect(() => {
        const footer = document.querySelector('footer')
        console.log(footer)
        const spectate = new IntersectionObserver((entries) => {
            setIsFooterVisible(entries[0].isIntersecting)
        })

        if (footer) spectate.observe(footer)

        return () => spectate.disconnect()
    }, [])

    useEffect(() => {
        const handleScroll = ({ scroll }: { scroll: number }) => {
            const index = Math.round(scroll / (window.innerHeight * 2))
            setCurrentIndex(Math.min(index, sections.length - 1))
        }

        lenis?.on('scroll', handleScroll)
        return () => lenis?.off('scroll', handleScroll)
    }, [sections, lenis])

    const handleClick = () => {
        const nextIndex = currentIndex >= sections.length - 1 ? 0 : currentIndex + 1
        lenis?.scrollTo(nextIndex * window.innerHeight * 2, {
            duration: 2.5,
            easing: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2
        })
        setCurrentIndex(nextIndex)
    }

    const isLast = currentIndex === sections.length - 1

    return (
        <button
            onClick={handleClick}
            style={{
                position: 'fixed',
                bottom: '2rem',
                left: isFooterVisible ? 'calc(95% - 2rem)' : '50%',
                transform: isFooterVisible ? 'none' : 'translateX(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                zIndex: 100,
                color: 'white',
                transition: 'left 1s ease, transform 1s ease',
            }}
        >
            <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                    transform: isLast ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                }}
            >
                <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
        </button>
    )
}