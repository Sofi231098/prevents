import EventsPage from "@/modules/events/page";
import UsersPage from "@/modules/users/page";
import Layout from "@/shared/layouts/layout";
import { createBrowserRouter, Navigate } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <h1>404</h1>,
        children: [
            {
                path: "/",
                element: <EventsPage />
            },
            {
                path: "profile",
                element: <UsersPage />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="my-info" />  
                    },
                    {
                        path: "my-info",
                        element: <h2>My Info</h2>
                    },
                    {
                        path: "liked-events",
                        element: <h2>Liked Events</h2>
                    }
                ]
            },
            {
                path: "detail/:id",
                element: <h1>Event</h1>
            }
        ]
    }
])