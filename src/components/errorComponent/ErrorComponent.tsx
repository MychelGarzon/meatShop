import React from 'react';
import { useRouteError } from 'react-router-dom';

interface RouteError {
  status?: number;
  statusText?: string;
  message?: string;
}

const ErrorComponent: React.FC = () => {
  const error = useRouteError() as RouteError;
  return (
    <div>
      <h1>Error</h1>
      {error.status ? (
        <>
          <p>Status: {error.status}</p>
          <p>Status Text: {error.statusText}</p>
        </>
      ) : (
        <p>{error.message ?? 'An unexpected error occurred'}</p>
      )}
    </div>
  );
};

export default ErrorComponent;
