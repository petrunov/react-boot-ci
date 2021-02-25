import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = (): JSX.Element => (
  <>
    <Link to="/">&raquo; APP</Link> &nbsp;
    <Link to="/readme">&raquo; readme</Link> &nbsp;
    <Link to={`/randomPage-${Math.ceil(Math.random() * 10).toString()}`}>&raquo; 404</Link> &nbsp;
  </>
);

export default Menu;
