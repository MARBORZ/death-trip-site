import styles from './info-page.module.scss'
import { motion } from 'motion/react'
import NavArrows from '@/shared/ui/NavArrows'
import { useLenis } from '@/app/providers'
import { useState } from 'react'
import alcohol from '../../assets/videos/images/alcohol.jpg'

const sections = ['hero', 'intro', 'statistics', 'alcohol', 'consequences', 'footer']

export default function InfoPage() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const lenis = useLenis()

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
                lenis={lenis}
                currentIndex={currentIndex}
                onIndexChange={setCurrentIndex}
            />

            {/* Hero Section */}
            <section className={styles.hero} id='hero'>
                <div className={styles.heroImage}>
                    <img
                        src={alcohol}
                        alt="Rus og trafikk"
                    />
                </div>
                <div className={styles.heroOverlay} />
                <motion.div {...heroAnimation} className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>RUS & TRAFIKK</h1>
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
                            Hva er russetiden?
                        </h2>
                        <p>
                            Russetiden er en av Norges mest kjente tradisjoner
                            blant avgangselever i videregående skole. Hvert år i
                            april og mai feirer tusenvis av unge mennesker
                            avslutningen på 13 års skolegang med fest, busser,
                            musikk og russeknuter. For mange er det den beste
                            tiden i livet.
                        </p>
                        <p>
                            Men bak feiringen ligger en mørkere virkelighet.
                            Russetiden er også perioden med flest trafikkulykker
                            blant unge i Norge. Kombinasjonen av alkohol,
                            søvnmangel og ungdommelig overmot har ført til
                            utallige tragedier på norske veier.
                        </p>
                        <blockquote className={styles.pullQuote}>
                            «Russetiden skal være en feiring av livet — ikke en
                            risiko for å miste det.»
                        </blockquote>
                        <p>
                            Denne siden handler om å forstå risikoen, kjenne
                            tallene og ta bevisste valg. Fordi én dårlig
                            beslutning kan forandre alt — for alltid.
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
                            Ifølge Statistisk sentralbyrå og Trygg Trafikk er
                            unge mellom 18 og 24 år den mest utsatte gruppen i
                            trafikken. I Norge dør i gjennomsnitt rundt 80–100
                            personer i trafikken hvert år, og unge sjåfører er
                            overrepresentert i statistikken. Omtrent 25 % av
                            alle trafikkdrepte er under 25 år.
                        </p>
                        <blockquote className={styles.pullQuote}>
                            «Hver fjerde person som dør i trafikken i Norge, er
                            under 25 år.»
                        </blockquote>
                        <p>
                            Under russetiden øker antallet ulykker merkbart.
                            Politiet rapporterer hvert år om alvorlige hendelser
                            knyttet til russefeiringen — fra singelulykker til
                            frontkollisjoner. I perioden 2010–2023 var det over
                            150 alvorlige trafikkhendelser direkte knyttet til
                            russetiden.
                        </p>
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
                            Alkohol og kjøring
                        </h2>
                        <p>
                            Norge har en av Europas strengeste promillegrenser:
                            0,2 promille. Det betyr i praksis at selv én øl kan
                            sette deg over grensen. Likevel velger mange unge å
                            kjøre etter å ha drukket — spesielt i russetiden,
                            når festing og transport henger tett sammen.
                        </p>
                        <p>
                            Alkohol påvirker reaksjonsevnen, dømmekraften og
                            synet dramatisk. Ved 0,5 promille er risikoen for
                            ulykke doblet. Ved 1,0 promille er den tidoblet.
                            Selv små mengder alkohol gjør deg til en dårligere
                            sjåfør enn du tror.
                        </p>
                        <blockquote className={styles.pullQuote}>
                            «Ved 0,5 promille er ulykkesrisikoen doblet. Ved 1,0
                            er den ti ganger så høy.»
                        </blockquote>
                        <p>
                            Konsekvensene av promillekjøring i Norge er
                            alvorlige: bøter opp til 150 000 kroner, fengsel i
                            opptil ett år, tap av førerkort i minst to år — og
                            et rulleblad som følger deg resten av livet. Men den
                            verste konsekvensen er den du aldri kan angre på: å
                            ta et liv.
                        </p>
                    </motion.article>

                    {/* Consequences */}
                    <motion.article
                        {...articleAnimation}
                        id="consequences"
                        className={styles.article}
                    >
                        <h2 className={styles.articleHeading}>Konsekvensene</h2>
                        <p>
                            Når ulykken skjer, stopper tiden. Et sekunds
                            uoppmerksomhet, et øyeblikks dårlig vurdering — og
                            livene til alle involverte forandres for alltid. For
                            den som overlever, begynner en lang vei tilbake. For
                            familiene til de som ikke gjør det, finnes det ingen
                            vei tilbake.
                        </p>
                        <p>
                            Unge sjåfører som forårsaker dødsulykker må leve med
                            skylden resten av livet. Mange utvikler PTSD,
                            depresjon og angst. Vennskap brytes, familier
                            splittes, og drømmer knuses — alt på grunn av ett
                            valg.
                        </p>
                        <blockquote className={styles.pullQuote}>
                            «Du trenger ikke å være helten som kjører. Du
                            trenger å være den som sier nei.»
                        </blockquote>
                        <p>
                            Planlegg russetiden trygt. Bruk taxi,
                            kollektivtransport eller en edru sjåfør. Si ifra når
                            noen vil kjøre beruset. Det er ikke feigt å si nei —
                            det er det modigste du kan gjøre. Russetiden skal
                            være starten på resten av livet ditt, ikke slutten.
                        </p>
                    </motion.article>
                </div>
            </section>
        </>
    )
}
