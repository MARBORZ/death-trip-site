import styles from './home-page.module.scss'
import { motion } from 'motion/react'

export default function HomePage() {
    const textAnimation = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: .5 },
    }

    return (
        <>
            <div className={styles.sectionWrapper}>
                <section className={styles.section} id='hero'>
                    <div className={styles.containerImg}>
                        <img src="https://picsum.photos/1920/1080?random=1" alt="hero" />
                    </div>
                    <div className={styles.overlay} />
                    <motion.div {...textAnimation} className={styles.textBlock}>
                        <h1 className={styles.title}>SISTE STORY</h1>
                    </motion.div>
                </section>
            </div>

            <div className={styles.sectionWrapper}>
                <section className={styles.section} id='characters'>
                    <div className={styles.containerImg}>
                        <img src="https://picsum.photos/1920/1080?random=2" alt="characters" />
                    </div>
                    <div className={styles.overlay} />
                    <motion.div {...textAnimation} className={styles.textBlock}>
                        <p className={styles.description}>To venner. En kveld. Et valg.</p>
                    </motion.div>
                </section>
            </div>

            <div className={styles.sectionWrapper}>
                <section className={styles.section} id='evening'>
                    <div className={styles.containerImg}>
                        <img src="https://picsum.photos/1920/1080?random=3" alt="evening" />
                    </div>
                    <div className={styles.overlay} />
                    <motion.div {...textAnimation} className={styles.textBlock}>
                        <p className={styles.description}>Kvelden startet som alle andre.</p>
                    </motion.div>
                </section>
            </div>

            <div className={styles.sectionWrapper}>
                <section className={styles.section} id='crash'>
                    <div className={styles.containerImg}>
                        <img src="https://picsum.photos/1920/1080?random=4" alt="crash" />
                    </div>
                    <div className={styles.overlay} />
                    <motion.div {...textAnimation} className={styles.textBlock}>
                        <p className={styles.description}>Så tok det bare sekunder.</p>
                    </motion.div>
                </section>
            </div>

            <div className={styles.sectionWrapper}>
                <section className={styles.section} id='aftermath'>
                    <div className={styles.containerImg}>
                        <img src="https://picsum.photos/1920/1080?random=5" alt="aftermath" />
                    </div>
                    <div className={styles.overlay} />
                    <motion.div {...textAnimation} className={styles.textBlock}>
                        <p className={styles.description}>Livet endret seg for alltid.</p>
                    </motion.div>
                </section>
            </div>
        </>
    )
}