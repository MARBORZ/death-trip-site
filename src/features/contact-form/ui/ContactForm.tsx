import { useContactForm } from '../model'
import styles from './contact-form.module.scss'

export default function ContactForm() {
    const { handleSubmit, status } = useContactForm()

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>
                    Navn
                </label>

                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={styles.input}
                    placeholder="Ditt navn"
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                    E-post
                </label>

                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={styles.input}
                    placeholder="din@epost.no"
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>
                    Melding
                </label>

                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={styles.textarea}
                    placeholder="Skriv din melding her..."
                />
            </div>

            {status === 'success' && (
                <span
                    className={`${styles.statusMessage} ${styles['statusMessage--success']}`}
                >
                    Skjemaet er sendt!
                </span>
            )}
            {status === 'error' && (
                <span
                    className={`${styles.statusMessage} ${styles['statusMessage--error']}`}
                >
                    Noe gikk galt. Prøv igjen.
                </span>
            )}
            {status === 'loading' && (
                <span
                    className={`${styles.statusMessage} ${styles['statusMessage--loading']}`}
                >
                    Sender...
                </span>
            )}

            <button type="submit" className={styles.button}>
                Send melding
            </button>
        </form>
    )
}
