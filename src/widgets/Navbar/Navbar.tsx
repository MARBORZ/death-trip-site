import { Link } from 'react-router'
import styles from './navbar.module.scss'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const close = () => setIsOpen(false)

    return (
        <>
            <nav className={styles.nav}>
                <Link to='/' className={styles.logo} onClick={close}>HDUFNDSK</Link>
                <div className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ''}`}>
                    <Link to='/' onClick={close}>Hjem</Link>
                    <Link to='/info' onClick={close}>Info</Link>
                    <Link to='/contacts' onClick={close}>Kontakt</Link>
                </div>
                <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </button>
            </nav>
            {isOpen && <div className={styles.overlay} onClick={close} />}
        </>
    )
}