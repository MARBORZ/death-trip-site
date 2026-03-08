import { useLenis } from '@/app/providers'
import { useEffect } from 'react'
import { useLocation } from 'react-router'

export default function ScrollToTop() {
    const { pathname } = useLocation()
    const lenis = useLenis()

    useEffect(() => {
        lenis?.scrollTo(0, { immediate: true })
    }, [pathname, lenis])

    return null
}
