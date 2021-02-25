import React from 'react';
import { useLocation } from 'react-router-dom';

const NotFoundPage: React.FC = (): JSX.Element => {
  const location = useLocation();

  return (
    <div className="NotFoundPage">
      <h3>
        Error 404 - Page Not Found:
        <br />
        <br />
        {location.pathname}
      </h3>
    </div>
  );
};

export default NotFoundPage;
