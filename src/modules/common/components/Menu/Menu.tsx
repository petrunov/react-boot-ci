import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = (): JSX.Element => {
  const [size, setSize] = useState(10);

  const handleZoomIn = () => {
    setSize(size + 1);
  };
  const handleZoomOut = () => {
    if (size >= 10) {
      setSize(size - 1);
    }
  };
  return (
    <div className="ptrn-Menu">
      <Link to="/">&raquo; APP</Link> &nbsp;
      <Link to="/org1">&raquo; org1</Link> &nbsp;
      <Link to="/readme">&raquo; readme</Link> &nbsp;
      <Link to={`/randomPage-${Math.ceil(Math.random() * 10).toString()}`}>&raquo; 404</Link> &nbsp;
      <span role="button" tabIndex={0} onClick={handleZoomIn} onKeyUp={handleZoomIn}>
        zoom in
      </span>
      <span role="button" tabIndex={-1} onClick={handleZoomOut} onKeyUp={handleZoomOut}>
        zoom out
      </span>
    </div>
  );
};
export default Menu;
