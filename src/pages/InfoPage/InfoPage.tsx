import styles from './info-page.module.scss'
import { motion } from 'motion/react'
import NavArrows from '@/shared/ui/NavArrows'
import { useState } from 'react'
import alcohol from '@/assets/images/alcohol.jpg'

const sections = ['hero', 'intro', 'statistics', 'alcohol', 'footer']

export default function InfoPage() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const heroAnimation = {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1.2, ease: 'easeOut' as const },
    }

    const articleAnimation = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true, margin: '-100px' },
    }

    return (
        <>
            <NavArrows
                sections={sections}
                currentIndex={currentIndex}
                onIndexChange={setCurrentIndex}
            />

            {/* Hero Section */}
            <section className={styles.hero} id="hero">
                <div className={styles.heroImage}>
                    <img src={alcohol} alt="Informasjon om rus og trafikk" />
                </div>
                <div className={styles.heroOverlay} />
                <motion.div {...heroAnimation} className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>INFORMASJON</h1>
                </motion.div>
            </section>

            {/* Article Section */}
            <section className={styles.articles}>
                <div className={styles.articlesInner}>
                    {/* Intro */}
                    <motion.article
                        {...articleAnimation}
                        className={styles.article}
                        id="intro"
                    >
                        <h2 className={styles.articleHeading}>
                            Legg vekk flaska når du kjører
                        </h2>

                        <blockquote className={styles.pullQuote}>
                            Hva skjer i videoen?
                        </blockquote>

                        <p>
                            Videoen starter i en mørk bar. Vi ser en ung gutt i
                            hvit genser som tydelig har drukket altfor mye. Han
                            henger over et bord dekket av tomme bokser og en
                            flaske sprit. Han klarer knapt å holde hodet oppe,
                            men tar likevel det fatale valget om å sette seg bak
                            rattet. Vi ser så hva det valget fører til. En bil
                            full av venner, en sjåfør uten kontroll — og så
                            kaos. Kameraet rister, kropper kastes rundt, alt
                            blir mørkt. En bilulykke ingen ventet seg. Men så
                            spoles videoen tilbake. Den samme gjengen, men denne
                            gangen er alle trygge. De sitter i en parkert bil,
                            ler og filmer en tullevideo. De valgte annerledes —
                            og kom hjem.
                        </p>
                        <p>
                            Alkohol påvirker dømmekraften lenge før du merker
                            det selv. Du tror du har kontroll. Du tror det er en
                            kort kjøretur. Det er akkurat der det går galt — i
                            det øyeblikket der en vanlig kveld snur til noe du
                            ikke kan ta tilbake.
                        </p>
                    </motion.article>

                    {/* Statistics */}
                    <motion.article
                        {...articleAnimation}
                        id="statistics"
                        className={styles.article}
                    >
                        <h2 className={styles.articleHeading}>
                            Tallene som teller
                        </h2>
                        <p>
                            Unge mellom 18 og 24 år er den mest utsatte gruppen
                            i norsk trafikk. I gjennomsnitt dør rundt 80–100
                            personer i trafikkulykker i Norge hvert år, og unge
                            sjåfører er overrepresentert i statistikken. Omtrent
                            25 % av alle trafikkdrepte er under 25 år.{' '}
                            <a
                                href="https://www.tryggtrafikk.no/tema/unge-bilforere/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                (Trygg Trafikk)
                            </a>
                        </p>
                        <blockquote className={styles.pullQuote}>
                            «Hver fjerde person som dør i trafikken i Norge, er
                            under 25 år.»
                        </blockquote>
                        <p>
                            Det handler ikke bare om de som dør. Hundrevis av
                            unge mennesker sitter igjen med varige skader —
                            fysiske og psykiske — etter ulykker som kunne vært
                            unngått.
                        </p>
                    </motion.article>

                    {/* Alcohol */}
                    <motion.article
                        {...articleAnimation}
                        id="alcohol"
                        className={styles.article}
                    >
                        <h2 className={styles.articleHeading}>
                            Hvorfor er dette viktig?
                        </h2>
                        <p>
                            Det går an å ha en vill og minneverdig kveld uten å
                            sette vennene sine i fare. Og hvis du ser noen rekke
                            etter bilnøklene i fylla — da er det din jobb å
                            stoppe dem. Ikke fordi du er morsom, men fordi du
                            bryr deg.
                        </p>
                        <blockquote className={styles.pullQuote}>
                            «Ved 0,5 promille er ulykkesrisikoen doblet. Ved 1,0
                            promille er den ti ganger så høy.»{' '}
                            <a
                                href="https://www.vegvesen.no/trafikkinformasjon/trafikksikkerhet/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                (Statens vegvesen)
                            </a>
                        </blockquote>
                        <p>
                            Konsekvensene av promillekjøring i Norge er
                            alvorlige: bøter opp til 150 000 kroner, fengsel i
                            opptil ett år, tap av førerkort i minst to år — og
                            et rulleblad som følger deg resten av livet.{' '}
                            <a
                                href="https://lovdata.no/dokument/NL/lov/1965-06-18-4/KAPITTEL_5#%C2%A722"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                (Vegtrafikkloven § 22)
                            </a>{' '}
                            Men den verste konsekvensen er den du aldri kan
                            angre på: å ta et liv.
                        </p>
                    </motion.article>
                </div>
            </section>
        </>
    )
}
