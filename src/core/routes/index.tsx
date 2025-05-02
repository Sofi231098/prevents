import EventsDetailPage from "@/modules/events/pages/events-detail-page";
import EventsPage from "@/modules/events/pages/events-page";
import UsersPage from "@/modules/users/page";
import Layout from "@/shared/layouts/layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

const RoutesProvider = () =>
    <BrowserRouter>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<EventsPage />} />
                    <Route path="profile" element={<UsersPage />}>
                        <Route index element={<Navigate to="my-info" />} />
                        <Route path="my-info" element={<h2>My Info</h2>} />
                        <Route path="liked-events" element={<h2>Liked Events</h2>} />
                    </Route>
                    <Route path="detail/:id" element={<EventsDetailPage />} />
                    <Route path="*" element={<h1>404</h1>} />
                </Route>
            </Routes>
        </QueryParamProvider>
    </BrowserRouter>;

export default RoutesProvider;