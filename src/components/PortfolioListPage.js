import React from 'react';
import { Link } from 'react-router-dom';


const PortfolioListPage = () => (
  <div>
    <h1>PortfolioListPage component</h1>
    <p>Check out what I've done</p>
    <Link to="projects/1">Item One     </Link>
    <Link to="projects/2">Item Two     </Link>
    <Link to="projects/3">Item three </Link>
    </div>
)

export default PortfolioListPage;
