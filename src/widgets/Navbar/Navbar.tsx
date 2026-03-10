import { Link } from 'react-router'
import styles from './navbar.module.scss'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link to='/' className={styles.logo}>HDUFNDSK</Link>
            <div className={styles.navLinks}>
                <Link to='/'>Hjem</Link>
                <Link to='/info'>Info</Link>
                <Link to='/contacts'>Kontakt</Link>
            </div>
        </nav>
    )
}