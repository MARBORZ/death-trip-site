import styles from './contact-page.module.scss'
import { motion } from 'motion/react'

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
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroImage}>
                    <img
                        src="https://picsum.photos/1920/1080?random=20"
                        alt="Kontakt"
                    />
                </div>
                <div className={styles.heroOverlay} />
                <motion.div {...heroAnimation} className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>KONTAKT</h1>
                </motion.div>
            </section>

            {/* Contact Section */}
            <section className={styles.contact}>
                <div className={styles.contactInner}>
                    <motion.div
                        {...contentAnimation}
                        className={styles.contactContent}
                    >
                        <div className={styles.textBox}>
                            <p className={styles.intro}>
                                Hei! Jeg heter Amadi Masuev, er 17 år og er en
                                juniorutvikler som alltid er åpen for nye
                                prosjekter og samarbeid. Ta gjerne kontakt — jeg
                                ser frem til å høre fra deg!
                            </p>
                        </div>
                        <div className={styles.form}>
                            <div className={styles.field}>
                                <label htmlFor="name" className={styles.label}>
                                    Navn
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className={styles.input}
                                    placeholder="Ditt navn"
                                />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="email" className={styles.label}>
                                    E-post
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className={styles.input}
                                    placeholder="din@epost.no"
                                />
                            </div>

                            <div className={styles.field}>
                                <label
                                    htmlFor="message"
                                    className={styles.label}
                                >
                                    Melding
                                </label>
                                <textarea
                                    id="message"
                                    className={styles.textarea}
                                    placeholder="Skriv din melding her..."
                                    rows={5}
                                />
                            </div>

                            <div
                                className={styles.button}
                                onClick={() => {}}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault()
                                    }
                                }}
                                role="button"
                                tabIndex={0}
                            >
                                Send melding
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
