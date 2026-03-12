import styles from './contact-page.module.scss'
import { motion } from 'motion/react'
import contact from '@/assets/images/contact.jpg'
import ContactForm from '@/features/contact-form/ui'

export default function ContactPage() {
    const heroAnimation = {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1.2, ease: 'easeOut' as const },
        viewport: { once: true },
    }

    const contentAnimation = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.2 },
        viewport: { once: true, margin: '-100px' },
    }

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroImage}>
                    <img
                        src={contact}
                        alt="Kontakt"
                    />
                </div>
                <div className={styles.heroOverlay} />
                <motion.div {...heroAnimation} className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>KONTAKT</h1>
                </motion.div>
            </section>

            <section className={styles.contact}>
                <div className={styles.contactInner}>
                    <motion.div
                        {...contentAnimation}
                        className={styles.contactContent}
                    >
                        <p className={styles.intro}>
                          Lurer du på noe om produktene våre, eller vil du bare si hei? 
                        </p>
                        <div className={styles.links}>
                            <a
                                href="mailto:masuevamadi@gmail.com"
                                className={styles.link}
                            >
                                {/* <span className={styles.linkIcon}>✉</span> */}
                                masuevamadi@gmail.com 
                            </a>
                        </div>

                        <ContactForm />
                    </motion.div>
                </div>
            </section>
        </>
    )
}
