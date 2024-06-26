import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Error found, try again</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default Error;
