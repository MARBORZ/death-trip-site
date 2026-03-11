import styles from './info-page.module.scss'
import { motion } from 'motion/react'
import NavArrows from '@/shared/ui/NavArrows'
import { useLenis } from '@/app/providers'
import { useState } from 'react'
import alcohol from '@/assets/images/alcohol.jpg'

const sections = ['hero', 'intro', 'statistics', 'alcohol', 'footer']

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
		alt="Informasjon om rus og trafikk"
		/>
		</div>
		<div className={styles.heroOverlay} />
		<motion.div {...heroAnimation} className={styles.heroContent}>
		<h1 className={styles.heroTitle}>Informasjon</h1>
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
		Legg vekk flaska når du skjører
		</h2>

		<blockquote className={styles.pullQuote}>
			Hva skjer i videoen?
		</blockquote>

		<p>
		Videoen starter i en mørk bar. Vi ser en ung gutt i hvit genser som tydelig har drukket altfor mye. Han henger over et bord dekket av tomme bokser og en flaske sprit. Han klarer knapt å holde hodet oppe, men likevel tar han det fatale valget om å sette seg bak rattet.
			Deretter ser vi den skremmende virkeligheten av det valget. En bil full av venner, en sjåfør som ikke har kontroll, og så – kaos. Kameraet rister, kropper blir kastet rundt, og alt blir mørkt. Det er en voldsom, rystende bilulykke.
			Men så "spoles" videoen tilbake. Vi ser den samme vennegjengen, men denne gangen er de trygge. De sitter i en parkert bil, ler, filmer en tullevideo og nyter øyeblikket. De valgte en annen vei, og på grunn av det, får de reise hjem. 
		</p>
		<p>
		Hvorfor skjedde dette?

		Denne videoen er laget for å vise illusjonen av kontroll. Når du har drukket, føler du kanskje at du har "kontroll" eller at det "bare er en kort kjøretur." Videoen fanger det ene sekundet der en gøy kveld på byen blir til en dødelig feil fordi noen undervurderte alkoholens påvirkning.
				</p>
			<blockquote className={styles.pullQuote}>
		«Russetiden skal være en feiring av livet — ikke en
		risiko for å miste det.»
			</blockquote>
		<p>
		Hva er moralen?

		Livet ditt – og vennene dines liv – er verdt mer enn en drosjeregning eller en telefonsamtale etter skyss. Moralen er at promille ikke bare handler om hvordan du føler deg; det handler om hva du ikke lenger er i stand til å gjøre. Du kan ikke reagere, du ser ikke klart, 
		og du kan ikke beskytte de du er glad i når du først har startet motoren.	
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
		Hvorfor er dette viktig? 
		</h2>
		<p>

		Dette er ikke bare en film; det er en virkelighet som skjer hver eneste dag.

			Det handler om alternativet: Videoen viser oss at man kan ha det kjempegøy og være vill med venner uten å sette dem i en kiste.

			Det handler om ansvar: Den minner oss på at hvis du ser 
		en venn strekke seg etter bilnøklene i fylla, så må du være den som stopper dem.
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
		</div>
		</section>
		</>
	)
}
