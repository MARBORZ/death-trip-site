import NavArrows from '@/shared/ui/NavArrows'
import styles from './home-page.module.scss'
import { motion } from 'motion/react'
import { useLenis } from '@/app/providers'
import { useEffect, useState, useRef } from 'react'
import mainVideo from '../../assets/videos/main.mp4'
import bar from '@/assets/videos/bar.mp4'
import car from '@/assets/videos/car.mp4'
import drink from '@/assets/videos/drink.mp4'
import crash from '@/assets/videos/crash.mp4'


const sections = [
    'hero',
    'characters',
    'evening',
    'crash',
    'aftermath',
    'footer',
]

export default function HomePage() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const lenis = useLenis()

    const textAnimation = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
    }

    // Wheel event Function
    const isScrolling = useRef(false)

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY > 0 && currentIndex >= sections.length - 1) return
            e.preventDefault()
            if (isScrolling.current) return // блокируем пока идёт анимация

            const nextIndex =
                e.deltaY > 0
                    ? Math.min(currentIndex + 1, sections.length - 1)
                    : Math.max(currentIndex - 1, 0)

            const el = document.getElementById(sections[nextIndex])
            isScrolling.current = true
            lenis?.scrollTo(el ?? 0, {
                duration: 2.5,
                easing: (t) => 1 - Math.pow(1 - t, 5),
                onComplete: () => {
                    isScrolling.current = false
                },
            })
            setCurrentIndex(nextIndex)
        }

        window.addEventListener('wheel', handleWheel, { passive: false })
        return () => window.removeEventListener('wheel', handleWheel)
    }, [currentIndex, lenis])

    return (
        <>
            <NavArrows
                sections={sections}
                lenis={lenis}
                currentIndex={currentIndex}
                onIndexChange={setCurrentIndex}
            />
            <div className={styles.sectionWrapper} id="hero">
                <section className={styles.section}>
                    <div className={styles.containerImg}>
                        <video
                            src={mainVideo}
                            autoPlay
                            loop
                            muted
                        />
                    </div>
                    <div className={styles.overlay} />
                    <motion.div {...textAnimation} className={styles.textBlock}>
                        <h1 className={styles.title}>HOLD DEG UNNA FLASKA NÅR DU SKAL KJØRE</h1>
                    </motion.div>
                </section>
            </div>

            <div className={styles.sectionWrapper} id="characters">
                <section className={styles.section}>
                    <div className={styles.containerImg}>
                        <video
                            src={bar}
                            autoPlay
                            loop
                            muted
                        />
                    </div>
                    <div className={styles.overlay} />
                    <motion.div {...textAnimation} className={styles.textBlock}>
                        <p className={styles.description}>
                            Fire venner. En dag. Et valg.
                        </p>
                    </motion.div>
                </section>
            </div>

            <div className={styles.sectionWrapper} id="evening">
                <section className={styles.section}>
                    <div className={styles.containerImg}>
                        <video
                            src={car}
                            autoPlay
                            loop
                            muted
                        />
                    </div>
                    <div className={styles.overlay} />
                    <motion.div {...textAnimation} className={styles.textBlock}>
                        <p className={styles.description}>
                            Dagen startet som alle andre.
                        </p>
                    </motion.div>
                </section>
            </div>

            <div className={styles.sectionWrapper} id="crash">
                <section className={styles.section}>
                    <div className={styles.containerImg}>
                         <video
                            src={drink}
                            autoPlay
                            loop
                            muted
                        />
                    </div>
                    <div className={styles.overlay} />
                    <motion.div {...textAnimation} className={styles.textBlock}>
                        <p className={styles.description}>
                            Så tok det bare sekunder.
                        </p>
                    </motion.div>
                </section>
            </div>

            <div className={styles.sectionWrapper} id="aftermath">
                <section className={styles.section}>
                    <div className={styles.containerImg}>
                        <video
                            src={crash}
                            autoPlay
                            loop
                            muted
                        />
                    </div>
                    <div className={styles.overlay} />
                    <motion.div {...textAnimation} className={styles.textBlock}>
                        <p className={styles.description}>
                            Døden er for alltid.
                        </p>
                    </motion.div>
                </section>
            </div>
        </>
    )
}
