import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
    return (
        <>
            <Header />
            <main className="px-8 mt-16">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout