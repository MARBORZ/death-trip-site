import { useEffect, useState, useCallback } from 'react'
import type Lenis from 'lenis'
import styles from './nav-arrows.module.scss'

interface INavArrowsProps {
    sections: string[]
    lenis: Lenis | null
    currentIndex: number
    onIndexChange: (index: number) => void
}

export default function NavArrows({
    sections,
    lenis,
    currentIndex,
    onIndexChange,
}: INavArrowsProps) {
    const [isFooterVisible, setIsFooterVisible] = useState(false)

    useEffect(() => {
        const footer = document.querySelector('footer')
        const spectate = new IntersectionObserver((entries) => {
            setIsFooterVisible(entries[0].isIntersecting)
        })

        if (footer) spectate.observe(footer)

        return () => spectate.disconnect()
    }, [])

    const isLast = currentIndex === sections.length - 1

    useEffect(() => {
        const handleScroll = ({ scroll }: { scroll: number }) => {
            const index = Math.round(scroll / (window.innerHeight * 2))
            onIndexChange(Math.min(index, sections.length - 1))
        }

        lenis?.on('scroll', handleScroll)
        return () => lenis?.off('scroll', handleScroll)
    }, [sections, lenis])

    const handleClick = useCallback(() => {
        if (isFooterVisible) {
            lenis?.scrollTo(0, {
                duration: 2.5,
                easing: (t) => 1 - Math.pow(1 - t, 5),
            })
        } else if (isLast) {
            lenis?.scrollTo(document.body.scrollHeight, {
                duration: 2.5,
                easing: (t) => 1 - Math.pow(1 - t, 5),
            })
        } else {
            const nextIndex = currentIndex + 1
            lenis?.scrollTo(nextIndex * window.innerHeight * 2, {
                duration: 2,
                easing: (t) => 1 - Math.pow(1 - t, 5),
            })
        }
    }, [currentIndex, isLast, isFooterVisible, lenis])

    return (
        <button
            onClick={handleClick}
            className={styles.button}
            data-footer-visible={isFooterVisible}
            aria-label="Toggle scroll position"
            data-is-last={isLast}
        >
            <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={styles.icon}
            >
                <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
        </button>
    )
}
