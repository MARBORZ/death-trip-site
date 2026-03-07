import NavArrows from '@/shared/ui/NavArrows'
import styles from './home-page.module.scss'
import { motion } from 'motion/react'
import { useLenis } from '@/app/providers'
import { useEffect, useState } from 'react'

const sections = ['hero', 'characters', 'evening', 'crash', 'aftermath']

export default function HomePage() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const lenis = useLenis()

    const textAnimation = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    }

    // Wheel event Function
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY > 0 && currentIndex >= sections.length - 1) return
            e.preventDefault()
            const nextIndex =
                e.deltaY > 0
                    ? Math.min(currentIndex + 1, sections.length - 1)
                    : Math.max(currentIndex - 1, 0)

            lenis?.scrollTo(nextIndex * window.innerHeight * 2, {
                duration: 2.5,
                easing: (t) => 1 - Math.pow(1 - t, 5),
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
            <div className={styles.sectionWrapper}>
                <section className={styles.section} id="hero">
                    <div className={styles.containerImg}>
                        <img
                            src="https://picsum.photos/1920/1080?random=1"
                            alt="hero"
                        />
                    </div>
                    <div className={styles.overlay} />
                    <motion.div {...textAnimation} className={styles.textBlock}>
                        <h1 className={styles.title}>SISTE STORY</h1>
                    </motion.div>
                </section>
            </div>

            <div className={styles.sectionWrapper}>
                <section className={styles.section} id="characters">
                    <div className={styles.containerImg}>
                        <img
                            src="https://picsum.photos/1920/1080?random=2"
                            alt="characters"
                        />
                    </div>
                    <div className={styles.overlay} />
                    <motion.div {...textAnimation} className={styles.textBlock}>
                        <p className={styles.description}>
                            To venner. En kveld. Et valg.
                        </p>
                    </motion.div>
                </section>
            </div>

            <div className={styles.sectionWrapper}>
                <section className={styles.section} id="evening">
                    <div className={styles.containerImg}>
                        <img
                            src="https://picsum.photos/1920/1080?random=3"
                            alt="evening"
                        />
                    </div>
                    <div className={styles.overlay} />
                    <motion.div {...textAnimation} className={styles.textBlock}>
                        <p className={styles.description}>
                            Kvelden startet som alle andre.
                        </p>
                    </motion.div>
                </section>
            </div>

            <div className={styles.sectionWrapper}>
                <section className={styles.section} id="crash">
                    <div className={styles.containerImg}>
                        <img
                            src="https://picsum.photos/1920/1080?random=4"
                            alt="crash"
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

            <div className={styles.sectionWrapper}>
                <section className={styles.section} id="aftermath">
                    <div className={styles.containerImg}>
                        <img
                            src="https://picsum.photos/1920/1080?random=5"
                            alt="aftermath"
                        />
                    </div>
                    <div className={styles.overlay} />
                    <motion.div {...textAnimation} className={styles.textBlock}>
                        <p className={styles.description}>
                            Livet endret seg for alltid.
                        </p>
                    </motion.div>
                </section>
            </div>
        </>
    )
}
