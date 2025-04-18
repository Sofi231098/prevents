import { Tabs } from "@/shared/components/tabs/tabs";
import { Outlet } from "react-router";
import styles from './page.module.css';

const listaTabs = [
    {
        label: 'Mi información',
        path: 'my-info'
    },
    {
        label: 'Eventos favoritos',
        path: 'liked-events'
    }
]

const UsersPage = () => {
    return (
        <section className={styles.container}>
            <Tabs tabs={listaTabs} />
            <Outlet />
        </section>
    )
}

export default UsersPage;
