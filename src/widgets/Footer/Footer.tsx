import styles from './footer.module.scss'
import deathtripLogo from '@/assets/logos/deathtrip-logo.png'
import ungITrafikkenLogo from '@/assets/logos/ung-i-trafikken.png'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logos}>
                    <a href="https://www.ungitrafikken.no/kampanjer-og-prosjekter/deathtrip" target='_blank'>
                        <img
                            src={deathtripLogo}
                            alt="Death Trip"
                            className={styles.logo}
                        />
                    </a>
                    <a href="https://www.ungitrafikken.no/" target='_blank'>
                        <img
                            src={ungITrafikkenLogo}
                            alt="Ung i trafikken"
                            className={styles.logoPartner}
                        />
                    </a>
                </div>
                <div className={styles.links}>
                    <a href="/">Hjem</a>
                    <a href="/info">Info</a>
                    <a href="/contacts">Kontakt</a>
                </div>
                <div className={styles.copy}>
                    © 2026 Siste Story - Death Trip. Alle rettigheter
                    forbeholdt.
                </div>
            </div>
        </footer>
    )
}
