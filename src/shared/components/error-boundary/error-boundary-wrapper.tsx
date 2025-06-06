import React from 'react'
import ErrorBoundary from './error-boundary';
import { useLocation } from 'react-router';

interface ErrorBoundaryWrapperProps {
    children: React.ReactNode;
    fallback: React.ReactNode;
}

export const ErrorBoundaryWrapper = ({ children, fallback }: ErrorBoundaryWrapperProps) => {
    const location = useLocation();
    return (
        <ErrorBoundary key={location.key} fallback={fallback}>
            {children}
        </ErrorBoundary>
    );
}
