import EventsDetailPage from "@/modules/events/pages/events-detail-page";
import EventsPage from "@/modules/events/pages/events-page";
import { LikedEvents } from "@/modules/users/component/liked-events/liked-events";
import { MyInfo } from "@/modules/users/component/my-info/my-info";
import UsersPage from "@/modules/users/page";
import { ErrorBoundaryWrapper } from "@/shared/components";
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
                        <ErrorBoundaryWrapper fallback={<h1>Error loading event details</h1>}>
                            <EventsPage />
                        </ErrorBoundaryWrapper>
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
                                <ErrorBoundaryWrapper fallback={<h1>Error loading user profile</h1>}>
                                    <MyInfo />
                                </ErrorBoundaryWrapper>
                            }
                        />
                        <Route
                            path="liked-events"
                            element={
                                <ErrorBoundaryWrapper fallback={<h1>Error loading liked events</h1>}>
                                    <LikedEvents />
                                </ErrorBoundaryWrapper>
                            }
                        />
                    </Route>
                    <Route
                        path="detail/:id"
                        element={
                            <ErrorBoundaryWrapper fallback={<h1>Error loading event details</h1>}>
                                <EventsDetailPage />
                            </ErrorBoundaryWrapper>
                        }
                    />
                    <Route path="*" element={<h1>404</h1>} />
                </Route>
            </Routes>
        </QueryParamProvider>
    </BrowserRouter>;

export default RoutesProvider;