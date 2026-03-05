import styles from './home-page.module.scss'

export default function HomePage() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.containerImg}>
                    <img src="https://picsum.photos/1920/1080?random=1" alt="hero" />
                </div>
                <div className={styles.overlay} />
                <div className={styles.textBlock}>
                    <h1 className={styles.title}>SISTE STORY</h1>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.containerImg}>
                    <img src="https://picsum.photos/1920/1080?random=2" alt="characters" />
                </div>
                <div className={styles.overlay} />
                <div className={styles.textBlock}>
                    <p className={styles.description}>To venner. En kveld. Et valg.</p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.containerImg}>
                    <img src="https://picsum.photos/1920/1080?random=3" alt="evening" />
                </div>
                <div className={styles.overlay} />
                <div className={styles.textBlock}>
                    <p className={styles.description}>Kvelden startet som alle andre.</p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.containerImg}>
                    <img src="https://picsum.photos/1920/1080?random=4" alt="crash" />
                </div>
                <div className={styles.overlay} />
                <div className={styles.textBlock}>
                    <p className={styles.description}>Så tok det bare sekunder.</p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.containerImg}>
                    <img src="https://picsum.photos/1920/1080?random=5" alt="aftermath" />
                </div>
                <div className={styles.overlay} />
                <div className={styles.textBlock}>
                    <p className={styles.description}>Livet endret seg for alltid.</p>
                </div>
            </section>
        </>
    )
}