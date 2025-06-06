import EventsDetailPage from "@/modules/events/pages/events-detail-page";
import EventsPage from "@/modules/events/pages/events-page";
import { LikedEvents } from "@/modules/users/component/liked-events/liked-events";
import { MyInfo } from "@/modules/users/component/my-info/my-info";
import UsersPage from "@/modules/users/page";
import { Error, ErrorBoundaryWrapper } from "@/shared/components";
import ErrorPage from "@/shared/components/error/error-page";
import Layout from "@/shared/layouts/layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

const ErrorApplication = () => {
    return <Error
        title="Ocurrió un error inesperado"
        subtitle="Por favor, inténtalo de nuevo más tarde o reporte el problema al administrador del sistema."
        showButton
    />
}

const RoutesProvider = () =>
    <BrowserRouter>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={
                        <ErrorBoundaryWrapper fallback={<ErrorApplication />}>
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
                                <ErrorBoundaryWrapper fallback={<ErrorApplication />}>
                                    <MyInfo />
                                </ErrorBoundaryWrapper>
                            }
                        />
                        <Route
                            path="liked-events"
                            element={
                                <ErrorBoundaryWrapper fallback={<ErrorApplication />}>
                                    <LikedEvents />
                                </ErrorBoundaryWrapper>
                            }
                        />
                    </Route>
                    <Route
                        path="detail/:id"
                        element={
                            <ErrorBoundaryWrapper fallback={<ErrorApplication />}>
                                <EventsDetailPage />
                            </ErrorBoundaryWrapper>
                        }
                    />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </QueryParamProvider>
    </BrowserRouter>;

export default RoutesProvider;