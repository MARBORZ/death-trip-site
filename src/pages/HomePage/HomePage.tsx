import styles from './home-page.module.scss'
import { motion } from 'motion/react'

export default function HomePage() {
    const jumpAnimation = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1 }
    }

    return (
        <h1>This is a Home Page.</h1>
)
}