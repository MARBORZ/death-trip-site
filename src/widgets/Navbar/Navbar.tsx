import { Link } from 'react-router'
import styles from './navbar.module.scss'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <span className={styles.logo}>SISTE STORY</span>
            <div className={styles.navLinks}>
                <Link to='/'>Hjem</Link>
                <Link to='/info'>Info</Link>
                <Link to='/contacts'>Kontakt</Link>
            </div>
        </nav>
    )
}