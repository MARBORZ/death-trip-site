import { BrowserRouter, Routes, Route, Link } from 'react-router'
import HomePage from '../pages/HomePage/HomePage'
import ContactPage from '../pages/ContactPage/ContactPage'
import InfoPage from '../pages/InfoPage/InfoPage'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <nav>
                    <Link to={'/home'}>Hjem</Link>
                    <Link to={'/contacts'}>Kontakt</Link>
                    <Link to={'/info'}>Info</Link>
                </nav>

                <Routes>
                    <Route path='/' element={<h1>This is App page</h1>} />
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/contacts' element={<ContactPage />} />
                    <Route path='/info' element={<InfoPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}