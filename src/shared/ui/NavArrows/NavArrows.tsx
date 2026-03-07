import { useEffect, useState, useCallback } from 'react'
import styles from './nav-arrows.module.scss'
import type { INavArrowsProps } from '@/shared/types/interfaces'

export default function NavArrows({
    sections,
    lenis,
    currentIndex,
    scrollStep,
    onIndexChange,
}: INavArrowsProps) {
    const [isFooterVisible, setIsFooterVisible] = useState(false)

    useEffect(() => {
        const footer = document.querySelector('footer')
        const spectateFooter = new IntersectionObserver((entries) => {
            setIsFooterVisible(entries[0].isIntersecting)
        })

        if (footer) spectateFooter.observe(footer)

        return () => spectateFooter.disconnect()
    }, [])

    useEffect(() => {
        const handleScroll = ({ scroll }: { scroll: number }) => {
            const index = Math.round(
                scroll / (window.innerHeight * (scrollStep || 2))
            )
            onIndexChange(Math.min(index, sections.length - 1))
        }

        lenis?.on('scroll', handleScroll)
        return () => lenis?.off('scroll', handleScroll)
    }, [sections, lenis, onIndexChange, scrollStep])

    const handleClick = useCallback(() => {
        if (isFooterVisible) {
            lenis?.scrollTo(0, {
                duration: 1.5,
                easing: (t) => 1 - Math.pow(1 - t, 5),
            })
        } else {
            const nextIndex = currentIndex + 1
            lenis?.scrollTo(
                nextIndex * window.innerHeight * (scrollStep || 2),
                {
                    duration: 2.5,
                    easing: (t) => 1 - Math.pow(1 - t, 5),
                }
            )
        }
    }, [currentIndex, isFooterVisible, lenis])

    return (
        <button
            onClick={handleClick}
            className={styles.button}
            data-footer-visible={isFooterVisible}
            aria-label="Toggle scroll position"
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
