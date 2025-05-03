import { Outlet } from 'react-router'
import { Footer } from '../components/footer/footer'
import { Header } from '../components/header/header'
import styles from './layout.module.css'

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout