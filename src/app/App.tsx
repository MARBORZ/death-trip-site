import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from '../pages/HomePage/HomePage'
import ContactPage from '../pages/ContactPage/ContactPage'
import InfoPage from '../pages/InfoPage/InfoPage'
import Layout from '@/widgets/Layout'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/info' element={<InfoPage />} />
                        <Route path='/contacts' element={<ContactPage />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    )
}