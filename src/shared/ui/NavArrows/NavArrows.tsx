import { useEffect, useState } from "react"



export default function NavArrows({ sections }: { sections: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY

            let closest = 0
            let minDiff = Infinity

            sections.forEach((id, index) => {
                const el = document.getElementById(id)
                if (!el) return

                const wrapper = el.closest('[class*="sectionWrapper"]') as HTMLElement
                if (!wrapper) return

                const wrapperTop = wrapper.offsetTop
                const diff = Math.abs(scrollY - wrapperTop)
                if (diff < minDiff) {
                    minDiff = diff
                    closest = index
                }
            })

            setCurrentIndex(closest)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [sections])

    const handleClick = () => {
        const nextIndex = currentIndex >= sections.length - 1 ? 0 : currentIndex + 1
        const el = document.getElementById(sections[nextIndex])
        const wrapper = el?.closest('[class*="sectionWrapper"]') as HTMLElement
        window.scrollTo({ top: wrapper?.offsetTop, behavior: 'smooth' })
        setCurrentIndex(nextIndex)
    }

    const isLast = currentIndex === sections.length - 1

    return (
        <button
            onClick={handleClick}
            style={{
                position: 'fixed',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                zIndex: 100,
                color: 'white',
                transition: 'transform 0.3s ease',
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