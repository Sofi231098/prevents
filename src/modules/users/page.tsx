import { Tabs } from "@/shared/components/tabs/tabs";
import { Outlet } from "react-router";

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
        <>
            <Tabs tabs={listaTabs} />
            <Outlet />
        </>
    )
}

export default UsersPage;
