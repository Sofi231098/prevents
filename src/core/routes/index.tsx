import EventsDetailPage from "@/modules/events/pages/events-detail-page";
import EventsPage from "@/modules/events/pages/events-page";
import UsersPage from "@/modules/users/page";
import ErrorBoundary from "@/shared/components/error-boundary/error-boundary";
import Layout from "@/shared/layouts/layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

const RoutesProvider = () =>
    <BrowserRouter>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={
                        <ErrorBoundary fallback={<h1>Error loading event details</h1>}>
                            <EventsPage />
                        </ErrorBoundary>
                    }
                    />
                    <Route
                        path="profile"
                        element={
                            <UsersPage />
                        }>
                        <Route index element={<Navigate to="my-info" />} />
                        <Route
                            path="my-info"
                            element={
                                <ErrorBoundary fallback={<h1>Error loading user profile</h1>}>
                                    <h2>My Info</h2>
                                </ErrorBoundary>
                            }
                        />
                        <Route
                            path="liked-events"
                            element={
                                <ErrorBoundary fallback={<h1>Error loading liked events</h1>}>
                                    <h2>Liked Events</h2>
                                </ErrorBoundary>
                            }
                        />
                    </Route>
                    <Route
                        path="detail/:id"
                        element={
                            <ErrorBoundary fallback={<h1>Error loading event details</h1>}>
                                <EventsDetailPage />
                            </ErrorBoundary>
                        }
                    />
                    <Route path="*" element={<h1>404</h1>} />
                </Route>
            </Routes>
        </QueryParamProvider>
    </BrowserRouter>;

export default RoutesProvider;