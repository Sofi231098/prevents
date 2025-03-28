import { XIcon } from '@/assets/Icons'
import { Outlet } from 'react-router'
import { Input } from '../components'
import { Footer } from '../components/footer/footer'
import { Header } from '../components/header/header'
import styles from './layout.module.css'

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main>
                <Input
                    placeholder='Search...'
                    Icon={<XIcon />}

                />
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout