import { useEffect, useState, useCallback } from 'react'
import styles from './nav-arrows.module.scss'
import type { INavArrowsProps } from '@/shared/types/interfaces'
import useLenis from '@/app/context'

export default function NavArrows({
    sections,
    currentIndex,
    onIndexChange,
}: INavArrowsProps) {
    const [isFooterVisible, setIsFooterVisible] = useState(false)

    const lenis = useLenis()

    useEffect(() => {
        const footer = document.querySelector('footer')
        const spectateFooter = new IntersectionObserver(
            (entries) => {
                setIsFooterVisible(entries[0].isIntersecting)
            },
            { threshold: 0.2 }
        )

        if (footer) spectateFooter.observe(footer)

        return () => spectateFooter.disconnect()
    }, [])

    // useScroll
    useEffect(() => {
        const handleScroll = ({ scroll }: { scroll: number }) => {
            const index = sections.reduce((closest, id, i) => {
                const el = document.getElementById(id)
                if (!el) return closest
                const diff = Math.abs(el.offsetTop - scroll)
                const closestEl = document.getElementById(sections[closest])
                const closestDiff = closestEl
                    ? Math.abs(closestEl.offsetTop - scroll)
                    : Infinity
                return diff < closestDiff ? i : closest
            }, 0)
            onIndexChange(index)
        }
        lenis?.on('scroll', handleScroll)
        return () => lenis?.off('scroll', handleScroll)
    }, [sections, lenis, onIndexChange])

    // handleClick
    const handleClick = useCallback(() => {
        if (isFooterVisible) {
            lenis?.scrollTo(0, {
                duration: 1,
                easing: (t) => 1 - Math.pow(1 - t, 5),
            })
            return
        }

        const nextIndex = currentIndex + 1
        if (nextIndex >= sections.length) return

        const el = document.getElementById(sections[nextIndex])
        if (!el) return

        lenis?.scrollTo(el, {
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 5),
        })
    }, [currentIndex, isFooterVisible, lenis, sections])

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
